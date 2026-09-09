import type { Metadata } from 'next';
import profile from './profile.json';
import './globals.css';
export const metadata: Metadata = {
  title: profile.name + ' | Electrical & Computer Engineering',
  description: profile.intro,
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
