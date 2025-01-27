import Image from 'next/image';
import UnderConstruction from '../components/UnderConstruction';
import HeroTitle from '../components/HeroTitle';
import Testimonial from '../components/Testimonial';
import CallToAction from '../components/CallToAction';

export default function Home() {
  return (
    <div className="w-full">
      <section className="w-full max-w-[880px] mx-auto">
        <HeroTitle
          text="Saving lives, nine at a time."
          subtext="Join us in providing a safe haven and a new beginning for every feline friend."
          mainAction={{
            text: 'Adopt',
            href: '/adopt',
          }}
          secondaryAction={{
            text: 'Volunteer',
            href: '/volunteer',
          }}
        />
        <div className="w-full flex justify-start min-[430px]:justify-end items-end">
          {/* <div className="min-w-[14px]"></div> */}
          <Image
            src="/TownHero.png"
            alt="A couple small town buildings with cat silhouettes visible in the windows."
            width={1559}
            height={951}
            className="ml-4 sm:ml-12 md:ml-20 w-[359px] min-w-[359px] h-[219px] sm:w-[500px] sm:min-w-[500px] sm:h-[305px] object-fill -translate-y-4 translate-x-8"
          />
        </div>
      </section>
      <section className="mt-[100px] w-full flex justify-center flex-col">
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <Testimonial
            image={{
              src: '/AMP_0061 (6).jpg',
              alt: 'An image of cat being cared for by a volunteer.',
            }}
          >
            <h2 className="text-lg font-bold">Saving Lives</h2>
            <p>
              We rescue, rehabilitate, and rehome cats in need, giving them a
              second chance at a loving home.
            </p>
            <p className="hidden md:block">
              Every cat deserves a chance to live a happy, healthy life. Our
              rescue team works tirelessly to provide medical care, nourishment,
              and love to stray and abandoned cats, helping them find their
              forever families.
            </p>
          </Testimonial>
          <div className="h-32 md:-translate-x-20">
            <CallToAction text="Learn more" href="/about" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row-reverse">
          <Testimonial
            image={{
              src: '/AMP_0123 (1).jpg',
              alt: 'An image of cat staring out the window on a rainy day.',
            }}
            align="right"
          >
            <h2 className="text-lg font-bold">A Safe Haven for Every Cat</h2>
            <p>
              We provide rescued cats with warmth, comfort, and the loving homes
              they deserve.
            </p>
            <p className="hidden md:block">
              Whether it&apos;s a cozy foster home or a permanent placement, our
              mission is to ensure every cat feels safe and cherished. With
              proper care and attention, these cats can transition from
              uncertainty to a life filled with joy and companionship.
            </p>
          </Testimonial>
          <div className="h-32 md:translate-x-16">
            <CallToAction text="Adopt from us" href="/adopt" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <Testimonial
            image={{
              src: '/AMP_0068 (5) 1.png',
              alt: 'An image of cat being cared for by a volunteer.',
            }}
          >
            <h2 className="text-lg font-bold">Compassion in Action</h2>
            <p>
              Our dedicated volunteers make a difference every day—join us in
              giving cats the love and care they deserve.
            </p>
            <p className="hidden md:block">
              Our volunteers are the heart of our organization, offering their
              time and effort to rescue, care for, and rehome cats in need. If
              you have a passion for helping animals, we welcome you to be part
              of our mission and make a lasting impact.
            </p>
          </Testimonial>
          <div className="h-32 md:-translate-x-12">
            <CallToAction text="Join our mission" href="/about" />
          </div>
        </div>
      </section>
      <section className="h-16"></section>
    </div>
  );
}
