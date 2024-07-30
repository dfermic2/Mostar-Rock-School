<template>
  <div class="container">
    <MediaCoverageCard :mediaCoverage="mediaCoverageList[0]" />
  </div>
</template>

<script setup>
import theGuardian from '../public/assets/images/The-Guardian.png'
import alJazeera from '../public/assets/images/Al-Jazeera.png'

const events = [
  {
    id: 1,
    title: 'Treći po redu MORS session event u K19',
    date: '27.04.2023',
    time: '21:00',
    location: 'MC Pavarotti',
    fee: '5 KM',
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
    date: '16 March 2018',
    content: `Come together: music is rebuilding bridges in divided Balkans`,
    img: theGuardian,
    imgName: 'The Guardian',
  },
  {
    id: 2,
    date: '30 July 2024',
    content: `Development in progress. School is amazing`,
    img: alJazeera,
    imgName: 'Al-Jazeera',
  },
]
</script>
