<script setup lang="ts">
import { computed, type PropType } from "vue";
import SearchBar from "./SearchBar.vue";

const props = defineProps({
  modelValue: {
    type: String as PropType<string>,
    required: true,
    default: () => "nl",
  },
});

const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <header>
    <h1 class="p-2 xs:p-6 text-4xl py-2 font-bold">Pokédex</h1>
    <SearchBar v-model="model" />
  </header>
</template>
