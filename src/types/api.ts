export interface ApiResponse {
  results: Character[];
}

export interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  origin: Location;
  image: string;
}

export interface Location {
  name: string;
  url: string;
}
