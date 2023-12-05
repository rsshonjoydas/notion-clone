export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export const siteConfig: SiteConfig = {
  name: 'Jotion',
  description: 'The connected workspace where better, faster work happens.',
  url: `${process.env.NEXT_PUBLIC_APP_URL}`,
  ogImage: 'https://redolence.com/og.jpg',
  links: {
    twitter: 'https://twitter.com/rsshonjoydas',
    github: 'https://github.com/rsshonjoydas',
  },
};
