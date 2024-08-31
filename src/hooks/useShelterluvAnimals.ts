import { ShelterluvAnimal } from '../types/ShelterluvAnimal';
import { ShelterluvResponse } from '../types/ShelterluvResponse';

const SHELTERLUV_API_URL = process.env.SHELTERLUV_API_URL;
const SHELTERLUV_API_KEY = process.env.SHELTERLUV_API_KEY;

const useShelterluvAnimals = async () => {
  if (!SHELTERLUV_API_KEY || !SHELTERLUV_API_URL) {
    console.error(
      'Error fetching Shelterluv animals. The variables SHELTERLUV_API_URL and SHELTERLUV_API_KEY must be set.'
    );
    return [];
  }

  console.log('Attempting to retrieve adoptable animals from Shelterluv.');

  try {
    const headers = new Headers();
    headers.append('X-Api-Key', SHELTERLUV_API_KEY);

    const url = new URL(`${SHELTERLUV_API_URL}/animals`);
    // url.searchParams.set('status_type', 'publishable');

    const response = await fetch(url, {
      headers,
    });

    const data: ShelterluvResponse = await response.json();
    return data.animals;
  } catch (error) {
    console.error('An error occurred retrieving animal data from Shelterluv.');
    console.error(error);
    return [];
  }
};

export default useShelterluvAnimals;
