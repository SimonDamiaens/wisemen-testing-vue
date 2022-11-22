export interface PokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: string[];
  sprite: string;
  stats: {
    base_stat: number;
    name: string;
  }[];
  types: string[];
}
