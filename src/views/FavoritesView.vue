<script setup lang="ts">
import FavoritesHeader from "@/components/FavoritesHeader.vue";
import PokemonOverview from "@/components/PokemonOverview.vue";
import { usePokemonStore } from "@/stores/pokemon.store";

const store = usePokemonStore();
</script>

<template>
  <main class="min-h-screen bg-gradient-to-br from-blue-900 to-purple-700">
    <div class="max-w-6xl m-auto">
      <FavoritesHeader />
      <PokemonOverview :pokemons="store.getFavorites()" />
    </div>
  </main>
</template>
s
