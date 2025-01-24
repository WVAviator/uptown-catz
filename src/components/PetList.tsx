import useShelterluvAnimals from '../hooks/useShelterluvAnimals';
import PageMessage from './PageMessage';
import PetCard from './PetCard';

const buildAgeString = (age: number): string => {
  if (age < 12) {
    return `${age} Months`;
  }
  const years = Math.floor(age / 12);
  if (years == 1) {
    return `${years} Year`;
  }

  return `${years} Years`;
};

const PetList = async () => {
  const animals = await useShelterluvAnimals();

  if (animals.length == 0) {
    return (
      <PageMessage
        title="Everybody's Home!"
        message="All our cats have been adopted. Stay tuned for next kitten season..."
        image={{
          src: '/Cat_09.png',
          alt: 'Two cartoon cats on a scratching post playing with cat toys.',
        }}
      />
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {animals.map((animal) => (
        <PetCard
          key={animal.ID}
          name={animal.Name}
          summary={`${buildAgeString(animal.Age)} | ${animal.Breed}`}
          description={animal.Description?.slice(0, 50)}
          image={{
            src: animal.CoverPhoto ?? '/default_cat.png',
            alt: `A ${animal.Color} ${animal.Breed} ${animal.Type}.`,
          }}
          sex={animal.Sex}
        />
      ))}
    </div>
  );
};

export default PetList;
