import useShelterluvAnimals from '../hooks/useShelterluvAnimals';
import PetCard from './PetCard';

const PetList = async () => {
  const animals = await useShelterluvAnimals();
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {animals.map((animal) => (
        <PetCard
          name={animal.Name}
          summary={`${animal.Age}${animal.Sex === 'Male' ? 'M' : 'F'} ${
            animal.Breed
          }`}
          description={animal.Description?.slice(0, 50)}
          image={{
            src: animal.CoverPhoto,
            alt: `A ${animal.Color} ${animal.Breed} ${animal.Type}.`,
          }}
        />
      ))}
    </div>
  );
};

export default PetList;
