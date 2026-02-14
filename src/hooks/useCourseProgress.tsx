import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { sections } from '@/data/judoData';

interface ProgressEntry {
  section_id: string;
  completed: boolean;
  last_seen_at: string;
}

export function useCourseProgress() {
  const { user } = useAuth();
  const [progress, setProgress] = useState<ProgressEntry[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProgress = useCallback(async () => {
    if (!user) return;
    const { data } = await supabase
      .from('user_progress')
      .select('section_id, completed, last_seen_at')
      .eq('user_id', user.id);
    setProgress(data || []);
    setLoading(false);
  }, [user]);

  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);

  const markSeen = useCallback(async (sectionId: string) => {
    if (!user || sectionId === 'home') return;
    const { error } = await supabase
      .from('user_progress')
      .upsert({
        user_id: user.id,
        section_id: sectionId,
        last_seen_at: new Date().toISOString(),
      }, { onConflict: 'user_id,section_id' });
    if (!error) {
      setProgress(prev => {
        const existing = prev.find(p => p.section_id === sectionId);
        if (existing) {
          return prev.map(p => p.section_id === sectionId ? { ...p, last_seen_at: new Date().toISOString() } : p);
        }
        return [...prev, { section_id: sectionId, completed: false, last_seen_at: new Date().toISOString() }];
      });
    }
  }, [user]);

  const toggleCompleted = useCallback(async (sectionId: string) => {
    if (!user) return;
    const current = progress.find(p => p.section_id === sectionId);
    const newCompleted = !(current?.completed ?? false);
    const { error } = await supabase
      .from('user_progress')
      .upsert({
        user_id: user.id,
        section_id: sectionId,
        completed: newCompleted,
        last_seen_at: new Date().toISOString(),
      }, { onConflict: 'user_id,section_id' });
    if (!error) {
      setProgress(prev => {
        const existing = prev.find(p => p.section_id === sectionId);
        if (existing) {
          return prev.map(p => p.section_id === sectionId ? { ...p, completed: newCompleted } : p);
        }
        return [...prev, { section_id: sectionId, completed: newCompleted, last_seen_at: new Date().toISOString() }];
      });
    }
  }, [user, progress]);

  const getLastSeenSection = useCallback((): string | null => {
    if (progress.length === 0) return null;
    const sorted = [...progress].sort((a, b) => 
      new Date(b.last_seen_at).getTime() - new Date(a.last_seen_at).getTime()
    );
    return sorted[0]?.section_id || null;
  }, [progress]);

  const progressStats = useCallback(() => {
    // Exclude 'home' from countable sections
    const countable = sections.filter(s => s.id !== 'home');
    const completed = countable.filter(s => 
      progress.find(p => p.section_id === s.id && p.completed)
    ).length;
    return {
      total: countable.length,
      completed,
      percentage: countable.length > 0 ? Math.round((completed / countable.length) * 100) : 0,
    };
  }, [progress]);

  const isSectionCompleted = useCallback((sectionId: string) => {
    return progress.find(p => p.section_id === sectionId)?.completed ?? false;
  }, [progress]);

  return { progress, loading, markSeen, toggleCompleted, getLastSeenSection, progressStats, isSectionCompleted };
}
