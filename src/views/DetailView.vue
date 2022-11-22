<script setup lang="ts">
import PokemonInfo from "@/components/PokemonInfo.vue";
import { usePokemonStore } from "@/stores/pokemon.store";
import { computed, onBeforeMount } from "vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import CircleLoader from "@/components/CircleLoader.vue";
import DetailHeader from "@/components/DetailHeader.vue";

const route = useRoute();
const pokemonId = computed<string>(() => route.params.id.toString());

const store = usePokemonStore();

const isFavorite = computed<boolean>(() =>
  store.isFavorite(Number.parseInt(pokemonId.value))
);

const onFavoriteButtonClick = () => {
  if (isFavorite.value) {
    store.deleteFavorite(Number.parseInt(pokemonId.value));
  }
};

onBeforeMount(() => {
  store.isLoading = true;
});

onMounted(() => {
  try {
    store.getSinglePokemon(pokemonId.value);
  } catch (error) {
    console.log(error);
  }
});
</script>
<template>
  <main class="min-h-screen bg-gray-400">
    <div class="max-w-6xl m-auto text-white p-2">
      <CircleLoader v-if="store.isLoading && store.singlePokemon" />
      <div v-if="!store.isLoading && store.singlePokemon">
        <DetailHeader @click="onFavoriteButtonClick" :isFavorite="isFavorite" />

        <div class="flex justify-center flex-col">
          <h2 class="cap text-4xl font-bold">{{ store.singlePokemon.name }}</h2>
          <img
            class="w-3/4 m-auto max-w-lg sm:my-10"
            :src="store.singlePokemon.sprite"
            :alt="store.singlePokemon.name"
          />
          <PokemonInfo :pokemon="store.singlePokemon" />
        </div>
      </div>
    </div>
  </main>
</template>
