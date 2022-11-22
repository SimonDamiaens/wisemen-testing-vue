<script setup lang="ts">
import { usePokemonStore } from "@/stores/pokemon.store";

const props = defineProps({
  numberOfFavorites: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <section
    class="mx-2 xs:mx-6 mt-4 p-4 h-28 bg-gradient-to-br from-blue-900 to-purple-700 rounded-lg text-white"
  >
    <RouterLink
      class="h-full flex flex-col justify-end relative"
      to="/favorites"
    >
      <h1 class="text-lg font-semibold">Favorites</h1>
      <p class="font-medium">
        {{ numberOfFavorites }}
        {{ numberOfFavorites === 1 ? "pokemon" : "pokemons" }}
      </p>
      <img
        class="absolute opacity-30 right-0 h-20"
        src="../assets/ball.png"
        alt=""
      />
    </RouterLink>
  </section>
</template>
