<template>
  <div>
    <div class="container">
      <div class="image-container p-125">
        <img
          class="image"
          :src="sponsor.img"
          :alt="`${sponsor.name} logo`"
          :title="`${sponsor.name}`"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { sponsor } = defineProps(['sponsor'])
</script>

<style scoped>
.container {
  width: 23.75rem;
  height: 11.25rem;
  background: rgb(237, 243, 252);
  box-shadow: 1px 1px 3px #d6d6d6;
  border-radius: 0.3125rem;
}

.image-container {
  display: flex;
  justify-content: center;
}

.p-125 {
  padding: 1.25rem;
}

.image {
  width: 21.25rem;
  height: 8.75rem;
}
</style>
