import type { Metadata } from 'next';
import profile from './profile.json';
import './globals.css';
export const metadata: Metadata = {
  title: profile.name + ' | Electrical & Computer Engineering',
  description: profile.intro,
  metadataBase: new URL(profile.site_url),
  alternates: { canonical: '/' },
  authors: [{ name: profile.name }],
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: profile.name + ' | Electrical & Computer Engineering',
    description: profile.intro,
    url: profile.site_url,
    type: 'website',
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
