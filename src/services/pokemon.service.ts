import axios from "axios";
import type { Pokemon } from "@/types/pokemon.type";
import type { PokemonDTO } from "@/types/pokemonDTO.type";
import type { PokemonDetails } from "@/types/pokemonDetails.type";

export async function fetchPokemons(): Promise<Pokemon[]> {
  const response = await axios.get(
    "https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon"
  );

  return response.data;
}

export async function fetchSinglePokemon(id: string): Promise<PokemonDetails> {
  const response = await axios.get<PokemonDTO>(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );

  return mapSinglePokemon(response.data);
}

function mapSinglePokemon(pokemonDTO: PokemonDTO): PokemonDetails {
  return {
    id: pokemonDTO.id,
    name: pokemonDTO.name,
    height: pokemonDTO.height,
    weight: pokemonDTO.weight,
    abilities: pokemonDTO.abilities.map((ability) => ability.ability.name),
    sprite: pokemonDTO.sprites.other["official-artwork"].front_default,
    stats: pokemonDTO.stats.map((stat) => ({
      base_stat: stat.base_stat,
      name: stat.stat.name,
    })),
    types: pokemonDTO.types.map((type) => type.type.name),
  };
}
