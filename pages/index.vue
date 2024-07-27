<template>
  <div class="container">
    <MediaCoverageCard />
  </div>
</template>

<script setup>
import BasicSponsorCard from '~/components/BasicSponsorCard.vue'
import GoldenSponsorCard from '~/components/GoldenSponsorCard.vue'

const events = [
  {
    id: 1,
    title: 'Treći po redu MORS session event u K19',
    date: '27.04.2023',
    time: '21:00',
    location: 'MC Pavarotti',
    fee: '5KM',
  },
  {
    id: 2,
    title: 'Edo Maajka u Mostaru',
    date: '27.04.2023',
    time: '21:00',
    location: 'OKC Abrasevic',
    fee: 'Free',
  },
]
</script>

<style lang="scss" scoped></style>
