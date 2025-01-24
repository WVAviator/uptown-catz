import Image from 'next/image';
import UnderConstruction from '../components/UnderConstruction';
import HeroTitle from '../components/HeroTitle';

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
            href: '/contact',
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
      <section className="mt-[100px] w-full flex justify-center">
        <UnderConstruction />
      </section>
    </div>
  );
}
