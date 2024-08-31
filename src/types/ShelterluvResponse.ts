import { ShelterluvAnimal } from './ShelterluvAnimal';

export interface ShelterluvResponse {
  success: number;
  animals: ShelterluvAnimal[];
  has_more: boolean;
  total_count: number;
}
