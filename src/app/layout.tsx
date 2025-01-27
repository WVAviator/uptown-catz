import type { Metadata } from 'next';
import { Comic_Neue, Satisfy } from 'next/font/google';
import './globals.css';
import { NextUIProvider } from '@nextui-org/react';
import ResponsiveNavbar from '../components/ResponsiveNavbar';
import { Footer } from '../components/Footer';
import Blob from '../components/Blob';

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
        className={`${comicNeue.className} bg-background-50 w-full overflow-x-hidden`}
      >
        <NextUIProvider>
          <ResponsiveNavbar
            items={[
              { name: 'Adopt', href: 'adopt' },
              { name: 'About', href: 'about' },
              { name: 'Contact', href: 'contact' },
            ]}
          />
          <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 max-w-[1024px] md:mx-auto">
            {children}
          </main>
          <Footer />
          {/* <div className="absolute inset-0 overflow-x-hidden pointer-events-none">
            <div className="absolute left-0 top-0 lg:left-32 lg:-top-[256px] origin-center w-[50vw] sm:w-[40vw] lg:w-[30vw]">
              <Blob scale={3.5} opacity={0.35} color="#a8c6a5" />
            </div>
            <div className="absolute -right-32 top-[100vh] origin-center w-[50vw] sm:w-[40vw] lg:w-[30vw]">
              <Blob scale={2.5} opacity={0.35} rotation={85} color="#DC7454" />
            </div>
            <div className="absolute -left-32 top-[175vh] origin-center w-[50vw] sm:w-[40vw] lg:w-[30vw]">
              <Blob scale={2.5} opacity={0.35} rotation={185} color="#8EC5C1" />
            </div>
          </div> */}
        </NextUIProvider>
      </body>
    </html>
  );
}
