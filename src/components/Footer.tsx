import React from 'react';
import Logo from './Logo';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="px-12 min-h-32 bg-background-300 flex flex-col sm:flex-row items-center sm:justify-between w-full">
      <div className="flex flex-col items-center">
        <div className="py-8 flex flex-col items-center gap-4">
          <Logo />
          <p>© {new Date().getFullYear()} Uptown Catz</p>
        </div>
      </div>
      <ul className="flex flex-col p-8 items-center sm:items-start">
        <li>
          <Link className="hover:opacity-80 transition-opacity" href="/privacy">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link className="hover:opacity-80 transition-opacity" href="/terms">
            Terms of Use
          </Link>
        </li>
      </ul>
    </footer>
  );
};
