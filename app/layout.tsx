import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Cormorant_Garamond, Inter } from 'next/font/google';

const sans = Inter({ subsets: ['latin'], variable: '--font-sans' });
const serif = Cormorant_Garamond({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'DiSar Furniture Service | Hialeah Furniture Repair & Restoration',
  description:
    'Family-owned furniture repair, refinishing, upholstery, and fine art restoration in Hialeah and across South Florida.',
  metadataBase: new URL('https://disarfurniture.com')
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
