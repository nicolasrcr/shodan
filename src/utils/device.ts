export async function getDeviceHash(): Promise<string> {
  const raw = [
    navigator.userAgent,
    navigator.language,
    Intl.DateTimeFormat().resolvedOptions().timeZone,
    String(window.screen?.width || ''),
    String(window.screen?.height || ''),
    String((navigator as any).platform || ''),
  ].join('|');

  const enc = new TextEncoder().encode(raw);
  const buf = await crypto.subtle.digest('SHA-256', enc);
  const bytes = Array.from(new Uint8Array(buf));
  return bytes.map(b => b.toString(16).padStart(2, '0')).join('');
}
