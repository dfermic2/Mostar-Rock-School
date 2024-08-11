<template>
  <div class="contribution-types">
    <div v-for="contribution in contributionTypes" :key="contribution.id">
      <ContributionType class="contribution" :contribution="contribution" />
    </div>
  </div>
</template>

<script setup>
let { contributionTypes } = defineProps(["contributionTypes"]);
</script>

<style scoped>
.contribution-types {
  max-width: 73.75rem;
  margin: auto;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1.25rem;
}

@media (width < 1180px) {
  .contribution-types {
    grid-template-columns: auto;
  }
}
</style>
