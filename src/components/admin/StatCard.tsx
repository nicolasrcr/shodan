import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  icon: ReactNode;
  title: string;
  value: number;
  variant?: 'gold' | 'green' | 'orange' | 'blue';
}

const StatCard = ({ icon, title, value, variant = 'gold' }: StatCardProps) => {
  const variants = {
    gold: {
      border: 'border-primary/30',
      glow: 'shadow-[0_0_30px_-5px_hsl(43,74%,52%,0.3)]',
      gradient: 'from-primary/20 via-primary/5 to-transparent',
      text: 'text-primary',
      ring: 'ring-primary/20',
    },
    green: {
      border: 'border-green-500/30',
      glow: 'shadow-[0_0_30px_-5px_hsl(142,76%,36%,0.3)]',
      gradient: 'from-green-500/20 via-green-500/5 to-transparent',
      text: 'text-green-500',
      ring: 'ring-green-500/20',
    },
    orange: {
      border: 'border-orange-500/30',
      glow: 'shadow-[0_0_30px_-5px_hsl(24,95%,53%,0.3)]',
      gradient: 'from-orange-500/20 via-orange-500/5 to-transparent',
      text: 'text-orange-500',
      ring: 'ring-orange-500/20',
    },
    blue: {
      border: 'border-blue-500/30',
      glow: 'shadow-[0_0_30px_-5px_hsl(217,91%,60%,0.3)]',
      gradient: 'from-blue-500/20 via-blue-500/5 to-transparent',
      text: 'text-blue-500',
      ring: 'ring-blue-500/20',
    },
  };

  const v = variants[variant];

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl border bg-card/80 backdrop-blur-sm p-6',
        'transition-all duration-500 hover:scale-[1.02]',
        v.border,
        v.glow,
        'ring-1',
        v.ring
      )}
    >
      {/* Gradient border effect */}
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-br opacity-50',
          v.gradient
        )}
      />
      
      {/* Glow orb */}
      <div
        className={cn(
          'absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-30',
          variant === 'gold' && 'bg-primary',
          variant === 'green' && 'bg-green-500',
          variant === 'orange' && 'bg-orange-500',
          variant === 'blue' && 'bg-blue-500'
        )}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <div className={cn('opacity-80', v.text)}>{icon}</div>
          <span className="text-sm font-medium text-muted-foreground">{title}</span>
        </div>
        <p className={cn('text-4xl font-bold', v.text)}>{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
