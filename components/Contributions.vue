<template>
  <div>
    <div class="container" role="contribution-types">
      <div v-for="contribution in contributionTypes" :key="contribution.id">
        <ContributionType class="contribution" :contribution="contribution" />
      </div>
    </div>
  </div>
</template>

<script setup>
let { contributionTypes } = defineProps(['contributionTypes'])
console.log(contributionTypes)
</script>

<style scoped>
.container[role='contribution-types'] {
  width: 73.75rem;
  margin: auto;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1.25rem;
}
</style>
