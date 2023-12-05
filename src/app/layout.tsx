import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import * as React from 'react';

import { siteConfig } from '@/config/site';
import { absoluteUrl } from '@/lib/utils';

import { ThemeProvider } from '@/components/providers/theme-provider';
import '@/styles/index.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(`${siteConfig.url}`),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'Server Components', 'Radix UI'],
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: absoluteUrl('/og.jpg'),
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: '@rsshonjoydas',
  },
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/logo.svg',
        href: '/logo.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/logo-dark.svg',
        href: '/logo-dark.svg',
      },
    ],
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

const localization = {
  socialButtonsBlockButton: 'Sign In with {{provider|titleize}}',
  signUp: {
    start: {
      subtitle: '',
    },
    emailCode: {
      subtitle: 'to access {{applicationName}}',
    },
  },
  signIn: {
    start: {
      subtitle: '',
    },
    emailCode: {
      subtitle: 'to access {{applicationName}}',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        layout: {
          socialButtonsPlacement: 'bottom',
          termsPageUrl: `${siteConfig.url}/terms`,
          helpPageUrl: `${siteConfig.url}/help`,
          logoImageUrl: './logo-dark.svg',
          privacyPageUrl: `${siteConfig.url}/privacy`,
        },
        elements: {
          formButtonPrimary: 'bg-purple-500 hover:bg-purple-400 text-sm normal-case',
        },
      }}
      localization={localization}
    >
      <html lang='en' suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
            storageKey='Jotion-theme-2'
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
