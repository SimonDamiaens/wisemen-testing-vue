<script setup lang="ts">
import type { Pokemon } from "@/types/pokemon.type";
import type { PropType } from "vue";

defineProps({
  pokemon: {
    type: Object as PropType<Pokemon>,
    required: true,
  },
});
</script>

<template>
  <div class="flex justify-between w-full">
    <div class="flex gap-2">
      <img :src="pokemon.sprites.front_default" />
      <div class="flex flex-col justify-center">
        <p class="cap font-bold">{{ pokemon.name }}</p>
        <p class="text-gray-400">Nr. {{ pokemon.id }}</p>
      </div>
    </div>
    <div class="flex">
      <div v-for="type in pokemon.types" :key="type.slot">
        <div class="bg-gray-400 px-1 text-sm text-white rounded-full">
          {{ type.type.name }}
        </div>
      </div>
    </div>
  </div>
</template>
