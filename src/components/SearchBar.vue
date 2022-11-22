<script setup lang="ts">
import { computed, type PropType } from "vue";

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
  <form class="p-2 xs:p-6 mb-2">
    <label
      for="default-search"
      class="mb-2 text-sm font-medium sr-only text-gray-600"
      >Search</label
    >
    <div class="relative">
      <div
        class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <input
        type="search"
        v-model="model"
        id="default-search"
        class="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-100 rounded-lg"
        placeholder="Search Pokemons"
      />
    </div>
  </form>
</template>
