<script setup lang="ts">
import CircleLoader from "@/components/CircleLoader.vue";
import Favorite from "@/components/FavoriteButton.vue";
import HomeHeader from "@/components/HomeHeader.vue";
import PokemonOverview from "@/components/PokemonOverview.vue";
import { usePokemonStore } from "@/stores/pokemon.store";
import { onBeforeMount, onMounted } from "vue";

const store = usePokemonStore();

onBeforeMount(() => {
  store.isLoading = true;
});

onMounted(() => {
  try {
    store.getAllPokemons();
  } catch (error) {
    console.log(error);
  }
});
</script>
<template>
  <main class="min-h-screen">
    <div class="max-w-6xl m-auto">
      <HomeHeader />
      <Favorite />
      <CircleLoader v-if="store.isLoading && store.singlePokemon" />

      <div v-if="!store.isLoading && store.pokemons">
        <PokemonOverview :pokemons="store.pokemons" />
      </div>
    </div>
  </main>
</template>
