import { Satisfy } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const satisfy = Satisfy({ weight: '400', subsets: ['latin'] });

const Logo = () => {
  return (
    <Link href="/" className="flex items-end gap-2 cursor-pointer group">
      <Image
        src={'/cat_walking_silhouette.svg'}
        alt="A silhouette of a cat walking."
        width={32}
        height={32}
        className="mb-1"
      />
      <p
        className={`font-bold text-lg text-default group-hover:text-primary transition-colors duration-150 ${satisfy.className}`}
      >
        UPTOWN CATZ
      </p>
    </Link>
  );
};

export default Logo;
