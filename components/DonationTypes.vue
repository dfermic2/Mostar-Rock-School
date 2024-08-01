<template>
  <div>
    <div class="container">
      <div v-for="donation in donationTypes" class="wrapper">
        <DonationType :donation-type="donation" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { donationTypes } = defineProps(["donationTypes"]);
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  gap: 1.25rem;
  margin-inline: auto;
  flex-wrap: wrap;
  max-width: 73.75rem;
}

.wrapper {
  display: flex;
  flex-grow: 1;
  max-width: 36.25rem;
  margin: 0;
  padding: 0;
}
</style>
