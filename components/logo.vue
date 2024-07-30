<template>
  <div class="darken">
    <NuxtLink to="/">
      <img src="../public/assets/logo.png" v-bind:height="imgHeight" />
    </NuxtLink>
  </div>
</template>

<script setup>
const { imgHeight } = defineProps(["imgHeight"]);
</script>

<style scoped>
.darken:hover {
  opacity: 65%;
}

.darken {
  transition: all 0.3s ease-in-out;
}
</style>
