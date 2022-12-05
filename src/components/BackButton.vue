<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <RouterLink class="flex items-center" to="/">
    <img
      class="backButton w-5 h-5 mr-2"
      src="../assets/left-arrow.png"
      alt="Return Home Arrow"
    />
    <span class="text-lg font-thin text-white">Terug</span>
  </RouterLink>
</template>
