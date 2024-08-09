<template>
  <div class="offer">
    <div class="box"></div>
    <p>{{ offer.offer }}</p>
  </div>
</template>

<script setup>
const { offer } = defineProps(['offer'])
</script>

<style scoped>
.offer {
  width: 440px;
  height: 25px;
  display: flex;
  align-items: center;
  gap: 30px;
}

.box {
  width: 10px;
  height: 10px;
  background: #ff0000;
}

.offer > p {
  font-size: 15px;
  font-weight: 600;
}
</style>
