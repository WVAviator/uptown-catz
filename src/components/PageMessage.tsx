import Image from 'next/image';

interface PageMessageProps {
  title: string;
  message: string;
  image: {
    src: string;
    alt: string;
  };
}

const PageMessage = ({ title, message, image }: PageMessageProps) => {
  return (
    <div className="flex gap-4 max-w-[525px]">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl">{title}</h2>
        <p>{message}</p>
      </div>
      <Image
        src={image.src}
        alt={image.alt}
        width={150}
        height={175}
        className="flex-1 w-[150px] h-[175px] object-fill"
      />
    </div>
  );
};

export default PageMessage;
