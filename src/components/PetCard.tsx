import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';

interface PetCardProps {
  name: string;
  summary: string;
  description?: string;
  image: {
    src: string;
    alt: string;
  };
}

const PetCard = ({ name, summary, description, image }: PetCardProps) => {
  return (
    <Card className="py-4 max-w-[294px]">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{summary}</p>
        {description && (
          <small className="text-default-500">{description}</small>
        )}
        <h4 className="font-bold text-large">{name}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt={image.alt}
          className="object-cover rounded-xl"
          src={image.src}
          width={270}
        />
      </CardBody>
    </Card>
  );
};

export default PetCard;
