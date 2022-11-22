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
    console.log(index);
    favorites.value.splice(index, 1);
    console.log(favorites.value);
  }

  function isFavorite(id: Number) {
    return favorites.value.includes(id);
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
  };
});
