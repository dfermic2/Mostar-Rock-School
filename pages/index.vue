<template>
  <div class="container">
    <div style="margin: 20px">
      <Contributions :contributionTypes="contributionTypes" />
    </div>
  </div>
</template>

<script setup>
import tongue from '../assets/images/tongue.png'
import bubbles from '../assets/images/bubbles.png'
import drum from '../assets/images/drum.png'
import diamond from '../assets/images/diamond.png'

let contributionTypes = [
  {
    id: 1,
    type: 'Education',
    content: `By funding our classrooms, you provide quality music education to talented individuals who may not have access otherwise. Your contribution helps us offer comprehensive programs, individual lessons, group sessions, band collaborations, and live performances.`,
    icon: tongue,
    iconName: 'Tongue',
  },
  {
    id: 2,
    type: 'Community Integration',
    content: `Your donation allows us to conduct workshops and outreach programs, reaching out to marginalized communities and promoting inclusivity. Through music, we can bridge divides and foster understanding among diverse groups.`,
    icon: bubbles,
    iconName: 'Bubbles',
  },
  {
    id: 3,
    type: 'Impactful events',
    content: `By supporting our concerts, festivals, and special events, you help us create memorable experiences for our students and the wider community. These events not only showcase the incredible talent nurtured at the Mostar Rock School but also bring people together in celebration of music.`,
    icon: drum,
    iconName: 'Drum',
  },
  {
    id: 4,
    type: 'Scholarship',
    content: `Your generosity can provide scholarships and financial aid packages to deserving students. With your support, we ensure that talented individuals, regardless of their financial circumstances, have the opportunity to pursue their musical dreams and unlock their full potential.`,
    icon: diamond,
    iconName: 'Diamond',
  },
]
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
