import Image from 'next/image';

const UnderConstruction = () => {
  return (
    <div className="flex gap-4 max-w-[525px]">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl">Under Construction</h2>
        <p>
          This part of our website is still being built. Thank you for your
          patience!
        </p>
      </div>
      <Image
        src="/construction_cat.png"
        alt="A cartoonish overweight tabby cat wearing a construction hat and holding a large hammer."
        width={150}
        height={175}
        objectFit="cover"
        className="flex-1 w-[150px] h-[175px]"
      />
    </div>
  );
};

export default UnderConstruction;
