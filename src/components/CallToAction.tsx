'use client';

import React from 'react';
import StyledButton from './StyledButton';
import { FaArrowRightLong } from 'react-icons/fa6';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

interface CallToActionProps {
  text: string;
  href: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ text, href }) => {
  let containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      containerRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'bottom bottom',
          end: 'center center',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div ref={containerRef}>
      <StyledButton href={href} endContent={<FaArrowRightLong />}>
        {text}
      </StyledButton>
    </div>
  );
};

export default CallToAction;
