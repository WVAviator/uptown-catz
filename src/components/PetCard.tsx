import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';
import Sex from './Sex';

interface PetCardProps {
  name: string;
  summary: string;
  description?: string;
  image: {
    src: string;
    alt: string;
  };
  sex: 'Male' | 'Female' | 'Unknown';
}

const PetCard = ({ name, summary, description, image, sex }: PetCardProps) => {
  return (
    <Card className=" max-w-[294px] h-[400px] bg-foreground-100">
      <CardBody className="overflow-visible py-2 aspect-square p-4 bg-foreground-100">
        <Image
          alt={image.alt}
          className="object-cover rounded-xl shadow-inner"
          src={image.src}
          width={270}
        />
      </CardBody>
      <CardHeader className="pt-2 px-4 flex-col items-start">
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-xl">{name}</h3>
          <span>
            <Sex sex={sex} />
          </span>
        </div>
        <p className="text-tiny uppercase font-bold">{summary}</p>
        {description && (
          <small className="text-default-500">{description}</small>
        )}
      </CardHeader>
    </Card>
  );
};

export default PetCard;
