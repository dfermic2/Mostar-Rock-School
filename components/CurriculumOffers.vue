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
  max-width: 440px;
  padding: 40px 20px 40px 40px;
  background: #fafbfb;
  border-radius: 5px;
  box-shadow: 1px 4px 6px #cbcbcb;
  margin-bottom: 50px;
}

.curriculum-offer > h3 {
  font-size: 19px;
  margin-bottom: 20px;
  line-height: 25px;
}

.offers {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
