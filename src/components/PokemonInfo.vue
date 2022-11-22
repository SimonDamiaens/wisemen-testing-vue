<script setup lang="ts">
import type { PokemonDetails } from "@/types/pokemonDetails.type";
import type { PropType } from "vue";

defineProps({
  pokemon: {
    type: Object as PropType<PokemonDetails>,
    required: true,
  },
});
</script>

<template>
  <section>
    <h2 class="font-bold px-2 text-xl">INFO</h2>
    <div>
      <div
        class="flex flex-col text-gray-400 bg-white rounded-lg shadow-lg p-2"
      >
        <p>Number: {{ pokemon.id }}</p>
        <p>Height: {{ pokemon.height }}</p>
        <p>Weight: {{ pokemon.weight }}</p>

        <div class="w-full bg-gray-200 rounded-full h-2.5">
          <div class="bg-red-600 h-2.5 rounded-full" style="width: 45%"></div>
        </div>
      </div>
    </div>
  </section>
</template>
