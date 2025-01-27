import type { Metadata } from 'next';
import { Comic_Neue, Satisfy } from 'next/font/google';
import './globals.css';
import { NextUIProvider } from '@nextui-org/react';
import ResponsiveNavbar from '../components/ResponsiveNavbar';
import { Footer } from '../components/Footer';
import Blob from '../components/Blob';
import BlobBackground from '../components/BlobBackground';

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
      <body
        className={`${comicNeue.className} relative bg-background-50 w-svw overflow-x-hidden`}
      >
        <BlobBackground />
        <div>
          <NextUIProvider>
            <ResponsiveNavbar
              items={[
                { name: 'Adopt', href: 'adopt' },
                { name: 'About', href: 'about' },
                { name: 'Contact', href: 'contact' },
              ]}
            />
            <main className="relative flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 max-w-[1024px] md:mx-auto overflow-x-hidden">
              {children}
            </main>
            <Footer />
          </NextUIProvider>
        </div>
      </body>
    </html>
  );
}
