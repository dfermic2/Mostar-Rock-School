<template>
  <div class="container">
    <MediaCoverageCard />
  </div>
</template>

<script setup>
import theGuardian from '../assets/images/The-Guardian.png'
import AlJazeera from '../assets/images/Al-Jazeera.png'

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

const mediaCoverageList = [
  {
    id: 1,
    name: '16 March 2018',
    content: `Come together: music is rebuilding bridges in divided Balkans`,
    img: theGuardian,
    imgName: 'The Guardian',
  },
  {
    id: 2,
    name: '30 July 2024',
    content: `Development in progress. School is amazing`,
    img: AlJazeera,
    imgName: 'Al-Jazeera',
  },
]
</script>

<style lang="scss" scoped></style>
