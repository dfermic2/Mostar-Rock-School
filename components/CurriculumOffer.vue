<template>
  <div class="offer">
    <div class="box"></div>
    <p>{{ offer.offer }}</p>
  </div>
</template>

<script setup>
const { offer } = defineProps(["offer"]);
</script>

<style scoped>
.offer {
  width: 27.5rem;
  height: 1.5625rem;
  display: flex;
  align-items: center;
  gap: 1.875rem;
}

.box {
  width: 0.625rem;
  height: 0.625rem;
  background: #ff0000;
}

.offer > p {
  font-weight: 600;
}
</style>
