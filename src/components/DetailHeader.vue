<script setup lang="ts">
import AddFavoriteButton from "./AddFavoriteButton.vue";
import BackButton from "./BackButton.vue";

defineProps({
  isFavorite: {
    type: Boolean,
    required: true,
  },
});

const emits = defineEmits(["click"]);

const onFavoriteButtonClick = () => {
  emits("click");
};
</script>

<template>
  <header class="flex justify-between">
    <BackButton />
    <AddFavoriteButton
      :isFavorite="isFavorite"
      @click="onFavoriteButtonClick"
    />
  </header>
</template>
