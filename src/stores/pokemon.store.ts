import { ref } from "vue";
import { defineStore } from "pinia";
import type { Pokemon } from "@/types/pokemon.type";
import { useStorage } from "@vueuse/core";
import type { PokemonDetails } from "@/types/pokemonDetails.type";
import * as PokemonService from "@/services/pokemon.service";

export const usePokemonStore = defineStore("pokedex", () => {
  const pokemons = ref<Pokemon[]>([]);
  const singlePokemon = ref<PokemonDetails>();
  const favorites = useStorage("Favorites", ref<Number[]>([]));
  const isLoading = ref<boolean>();

  async function getAllPokemons() {
    isLoading.value = true;
    pokemons.value = await PokemonService.fetchPokemons();
    isLoading.value = false;
  }

  async function getSinglePokemon(id: string) {
    isLoading.value = true;
    singlePokemon.value = await PokemonService.fetchSinglePokemon(id);
    isLoading.value = false;
  }

  function getFavorites() {
    return pokemons.value.filter((poke) => isFavorite(poke.id));
  }

  function addFavorite(id: Number) {
    favorites.value.push(id);
  }

  function deleteFavorite(id: Number) {
    const index = favorites.value.indexOf(id);
    favorites.value.splice(index, 1);
  }

  function isFavorite(id: Number) {
    return favorites.value.includes(id);
  }

  function filterPokemons(searchText: string): Pokemon[] {
    if (searchText.match(/^[0-9]+$/)) {
      return pokemons.value.filter((poke) => {
        return poke.id === Number(searchText);
      });
    } else if (searchText.match(/^[a-zA-Z]+$/)) {
      return pokemons.value.filter((poke) => {
        const types = poke.types.filter((type) => {
          return searchText.toLowerCase().includes(type.type.name);
        });
        return (
          poke.name.includes(searchText.toLowerCase()) || types.length !== 0
        );
      });
    }
    return pokemons.value;
  }

  return {
    pokemons,
    singlePokemon,
    isLoading,
    favorites,
    isFavorite,
    getAllPokemons,
    getSinglePokemon,
    getFavorites,
    addFavorite,
    deleteFavorite,
    filterPokemons,
  };
});
