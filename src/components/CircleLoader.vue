<template>
  <div class="h-[90vh] flex justify-center items-center">
    <div class="loader w-1/3 max-w-[180px]"></div>
  </div>
</template>

<style>
.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid red;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
