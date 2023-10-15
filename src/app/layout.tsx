import StyledComponentsRegistry from '@lib/registry';
import type { Metadata } from 'next';
import GlobalStyles from '@styles/GlobalStyles';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body suppressHydrationWarning>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL('https://sajin.page'),
  title: {
    template: '%s',
    default: 'Sajinpage',
  },
  description: `사진을 담다, Sajinpage`,
  keywords: 'photo sharing website',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fff' },
    { media: '(prefers-color-scheme: dark)', color: '#000' },
  ],
  openGraph: {
    title: 'Sajinpage',
    description: `사진을 담다, Sajinpage`,
    url: 'https://sajin.page',
    siteName: "Cha Haneum's website",
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    title: 'Sajinpage',
    description: `사진을 담다, Sajinpage`,
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
