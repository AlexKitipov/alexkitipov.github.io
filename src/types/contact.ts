export type ContactVisibility = 'public' | 'private';

export type ContactChannel = {
  id: string;
  label: string;
  value: string;
  href?: string;
  accessibleLabel?: string;
  kind: 'email' | 'phone' | 'location' | 'social' | 'website' | 'messaging';
  visibility: ContactVisibility;
  note?: string;
};

export type SocialLink = {
  label: string;
  url: string;
  kind:
    | 'github'
    | 'facebook'
    | 'learning'
    | 'tool'
    | 'legacy'
    | 'python'
    | 'ai'
    | 'other';
  isPublic: boolean;
  description?: string;
};
