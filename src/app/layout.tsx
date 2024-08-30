import type { Metadata } from 'next';
import { Comic_Neue, Satisfy } from 'next/font/google';
import './globals.css';
import { NextUIProvider } from '@nextui-org/react';
import ResponsiveNavbar from '../components/ResponsiveNavbar';

const comicNeue = Comic_Neue({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Uptown Catz',
  description: 'Your favorite neighborhood cat rescue!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${comicNeue.className} bg-background-50`}>
        <NextUIProvider>
          <ResponsiveNavbar
            items={[
              { name: 'Adopt', href: 'adopt' },
              { name: 'About', href: 'about' },
              { name: 'Contact', href: 'contact' },
            ]}
          />
          <main className="flex min-h-screen flex-col items-center justify-between p-8 max-w-[1024px] m-auto">
            {children}
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
}
