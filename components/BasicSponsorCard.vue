<template>
  <div class="container">
    <div class="image-container p-main">
      <img
        class="image"
        :src="sponsor.img"
        :alt="`${sponsor.name} logo`"
        :title="`${sponsor.name}`"
      />
    </div>
  </div>
</template>

<script setup>
const { sponsor } = defineProps(['sponsor'])
</script>

<style scoped>
.container {
  width: 17.5rem;
  height: 11.25rem;
  background: #fff;
  box-shadow: 1px 1px 3px #d6d6d6;
  border-radius: 0.3125rem;
}

.image-container {
  display: flex;
  justify-content: center;
}

.p-main {
  padding: 1.25rem 0.92125rem;
}

.image {
  width: 15.658125rem;
  height: 8.75rem;
}
</style>
