<script setup lang="ts">
import Heart from "../assets/heart.png";
import RedHeart from "..//assets/red-heart.png";
import { computed } from "vue";

const props = defineProps({
  isFavorite: {
    type: Boolean,
    required: true,
  },
});

const emits = defineEmits(["click"]);

const imageSrc = computed(() => (props.isFavorite ? RedHeart : Heart));
</script>

<template>
  <button class="addFavorite" @click="emits('click')">
    <img class="w-7 h-7 transition-all" :src="imageSrc" alt="♡" />
  </button>
</template>
