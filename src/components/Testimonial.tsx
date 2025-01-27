'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React from 'react';

interface TestimonialProps {
  children: React.ReactNode;
  image: {
    src: string;
    alt: string;
  };
  align?: 'left' | 'right';
}

const Testimonial: React.FC<TestimonialProps> = ({
  children,
  image,
  align = 'left',
}) => {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      contentRef.current,
      {
        y: 0,
        opacity: 0,
      },
      {
        y: -32,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top bottom',
          end: 'top center',
          scrub: true,
          markers: true,
          onUpdate: (self) => {
            console.log('Current scroller:', self.scroller);
          },
        },
      }
    );
  }, []);

  return (
    <div
      className={`w-full m-0 flex flex-col ${
        align === 'left' ? 'items-start' : 'items-end'
      }`}
    >
      <div className=" object-cover rounded-md overflow-hidden">
        <Image src={image.src} alt={image.alt} width={468} height={468} />
      </div>
      <div ref={triggerRef} className="w-[90%] min-h-36 mx-auto opacity-90">
        <div
          ref={contentRef}
          className="p-4 bg-foreground-200 rounded-md flex flex-col gap-2 backdrop-blur-md"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
