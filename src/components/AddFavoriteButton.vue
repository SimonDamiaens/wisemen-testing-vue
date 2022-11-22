<script setup lang="ts">
const props = defineProps({
  isFavorite: {
    type: Boolean,
    required: true,
  },
});

const emits = defineEmits(["click"]);

const imageSrc = props.isFavorite
  ? "../assets/heart.png"
  : "../assets/red-heart.png";
</script>

<template>
  <div @click="emits('click')">
    <img class="w-7 h-7 transition-all" :src="imageSrc" alt="♡" />
  </div>
</template>
