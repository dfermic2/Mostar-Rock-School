<template>
  <div>
    <div class="curriculum-offer">
      <h3>The curriculum offers education for:</h3>
      <div class="offers">
        <div v-for="offer in offers" :key="offer.id">
          <CurriculumOffer :offer="offer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { offers } = defineProps(['offers'])
</script>

<style scoped>
.curriculum-offer {
  max-width: 27.5rem;
  padding: 2.5rem 1.25rem 2.5rem 2.5rem;
  background: #fafbfb;
  border-radius: 0.3125rem;
  box-shadow: 0.0625rem 0.25rem 0.375rem #cbcbcb;
  margin-bottom: 0.3125rem;
}

.curriculum-offer > h3 {
  font-size: 1.1875rem;
  margin-bottom: 1.25rem;
  line-height: 1.5625rem;
}

.offers {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}
</style>
