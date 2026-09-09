import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Hongyu Deng | Electrical & Computer Engineering',
  description: 'Academic profile of Hongyu Deng: education at Lehigh, Maynooth, and Fuzhou universities, digital circuit optimization, and engineering experience.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
