import type { ContactChannel, SocialLink } from '../types/contact';

const publicEmail = 'aeksandar.kitipov@gmail.com';
const safeMailto = `mailto:${publicEmail}?subject=${encodeURIComponent(
  'Portfolio inquiry',
)}&body=${encodeURIComponent('Hello Aleksandar,\n\n')}`;

export const contactChannels: readonly ContactChannel[] = [
  {
    id: 'preferred-email',
    label: 'Preferred public email',
    value: publicEmail,
    href: safeMailto,
    accessibleLabel: `Send an email to Aleksandar Kitipov at ${publicEmail}`,
    kind: 'email',
    visibility: 'public',
    note: 'Safe default from the legacy site; reviewer should confirm this remains the final public email.',
  },
  {
    id: 'outlook-email',
    label: 'Outlook email',
    value: 'aeksandar.kitipov@outlook.com',
    kind: 'email',
    visibility: 'private',
    note: 'Legacy address retained in data for review but not rendered publicly.',
  },
  {
    id: 'abv-email',
    label: 'ABV email',
    value: 'aleksandar.kitipov@abv.bg',
    kind: 'email',
    visibility: 'private',
    note: 'Legacy address retained in data for review but not rendered publicly.',
  },
  {
    id: 'private-phone',
    label: 'Phone',
    value: 'Private phone number from legacy contacts',
    kind: 'phone',
    visibility: 'private',
    note: 'Do not render until Aleksandar confirms that a phone number should be public.',
  },
  {
    id: 'private-address',
    label: 'Street address',
    value: 'Private street address from legacy contacts',
    kind: 'location',
    visibility: 'private',
    note: 'Full street address intentionally excluded from public pages.',
  },
  {
    id: 'city-location',
    label: 'Location',
    value: 'Plovdiv, Bulgaria',
    kind: 'location',
    visibility: 'public',
    note: 'City-level location only; no full street address is published.',
  },
];

export const publicContactChannels = contactChannels.filter(
  (channel) => channel.visibility === 'public',
);

export const socialLinks: readonly SocialLink[] = [
  {
    label: 'Algorithm of the Day on GitHub',
    url: 'https://github.com/AlexKitipov/-Algorithm-of-the-Day-',
    kind: 'github',
    isPublic: true,
    description: 'Primary public project repository from the legacy site.',
  },
  {
    label: 'Google Colab notebook',
    url: 'https://colab.research.google.com/drive/1QFMujrV8aajNQTwUCzmd_V74PKa_2e4L#scrollTo=eba04bcd',
    kind: 'learning',
    isPublic: true,
    description:
      'Cloud notebook connected to the Algorithm of the Day learning workflow.',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/',
    kind: 'github',
    isPublic: true,
    description: 'Platform for source control, portfolio code, and project publishing.',
  },
  {
    label: 'Python.org',
    url: 'https://www.python.org/',
    kind: 'python',
    isPublic: true,
    description: 'Official Python language documentation and learning resource.',
  },
  {
    label: 'Google Colab',
    url: 'https://colab.research.google.com/',
    kind: 'tool',
    isPublic: true,
    description: 'Browser-based notebook environment for Python experiments.',
  },
  {
    label: 'Microsoft Copilot',
    url: 'https://copilot.microsoft.com/',
    kind: 'ai',
    isPublic: true,
    description: 'AI assistant referenced as a collaborator in the legacy pages.',
  },
  {
    label: 'Google Gemini',
    url: 'https://gemini.google.com/',
    kind: 'ai',
    isPublic: true,
    description: 'AI assistant referenced for learning, writing, and ideation support.',
  },
  {
    label: 'Notepad++',
    url: 'https://notepad-plus-plus.org/',
    kind: 'tool',
    isPublic: true,
    description: 'Editor used in the legacy site origin story.',
  },
  {
    label: 'Facebook profile name',
    url: 'https://www.facebook.com/',
    kind: 'facebook',
    isPublic: false,
    description:
      'Legacy content listed the name “Aleksandar Kitipov”; no profile URL is published until confirmed.',
  },
  {
    label: 'Legacy archive',
    url: '/docs/legacy/index.html',
    kind: 'legacy',
    isPublic: false,
    description:
      'Archived static pages are retained for local review only because they contain private contact details.',
  },
];

export const publicSocialLinks = socialLinks.filter((link) => link.isPublic);
