export type Animal = "dog" | "cat" | "bird" | "reptile" | "rabbit";

export interface Pet {
  id: number;
  name: string;
  animal: Animal;
  city: string;
  state: string;
  description: string;
  breed: string;
  images: string[];
  location?: string;
}

export interface PetAPIResponse {
  numberOfResults: number;
  startIndex: number;
  endIndex: number;
  hasNext: boolean;
  pets: Pet[];
}
export interface BreedListAPIResponse {
  animal: Animal;
  breeds: string[];
}
