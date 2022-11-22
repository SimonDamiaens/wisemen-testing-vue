<script setup lang="ts">
import CircleLoader from "@/components/CircleLoader.vue";
import Favorite from "@/components/FavoriteButton.vue";
import HomeHeader from "@/components/HomeHeader.vue";
import PokemonOverview from "@/components/PokemonOverview.vue";
import { usePokemonStore } from "@/stores/pokemon.store";
import { computed, onBeforeMount, onMounted, ref } from "vue";

const store = usePokemonStore();

onBeforeMount(() => {
  store.isLoading = true;
});

const searchText = ref("");

const filteredPokemons = computed(() => {
  return store.filterPokemons(searchText.value);
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
      <HomeHeader v-model="searchText" />
      <Favorite :numberOfFavorites="store.favorites.length" />
      <CircleLoader v-if="store.isLoading" />
      <div v-if="!store.isLoading">
        <PokemonOverview :pokemons="filteredPokemons" />
      </div>
    </div>
  </main>
</template>
