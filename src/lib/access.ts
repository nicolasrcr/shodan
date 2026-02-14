interface ProfileForAccess {
  has_paid: boolean;
  access_expires_at: string | null;
  created_at: string;
}

export function isAccessActive(profile: ProfileForAccess | null): boolean {
  if (!profile) return false;
  if (!profile.has_paid) return false;

  const expirationDate = profile.access_expires_at
    ? new Date(profile.access_expires_at)
    : (() => {
        const d = new Date(profile.created_at);
        d.setFullYear(d.getFullYear() + 1);
        return d;
      })();

  return expirationDate > new Date();
}

export function getExpirationDate(profile: { access_expires_at: string | null; created_at: string }): Date {
  if (profile.access_expires_at) {
    return new Date(profile.access_expires_at);
  }
  const d = new Date(profile.created_at);
  d.setFullYear(d.getFullYear() + 1);
  return d;
}
