<script setup lang="ts">
import PokemonItem from "./PokemonItem.vue";
import type { Pokemon } from "@/types/pokemon.type";
import type { PropType } from "vue";

defineProps({
  pokemons: {
    type: Array as PropType<Pokemon[]>,
    required: true,
  },
});
</script>
<template>
  <section class="pokemon-list p-2 xs:p-6 flex flex-wrap justify-between">
    <RouterLink
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      :to="`detail/${pokemon.id}`"
      class="bg-white rounded-lg mb-2 p-2 flex justify-start items-top shadow-lg w-full sm:w-[49%]"
    >
      <PokemonItem :pokemon="pokemon" />
    </RouterLink>
  </section>
</template>
