<template>
  <div class="darkenImg">
    <NuxtLink to="/">
      <img src="../public/assets/logo.png" v-bind:height="imgHeight" />
    </NuxtLink>
  </div>
</template>

<script setup>
const { imgHeight } = defineProps(["imgHeight"]);
</script>

<style scoped>
.darkenImg:hover {
  opacity: 65%;
}

.darkenImg {
  transition: all 0.3s ease-in-out;
}
</style>
