<template>
  <div class="container">
    <div>
      <PlatinumSponsorCard :sponsor="platinumSponsors[0]" />
    </div>

    <div style="margin-top: 20px">
      <GoldenSponsorCard :sponsor="goldenSponsors[0]" />
    </div>

    <div style="margin-top: 20px">
      <BasicSponsorCard :sponsor="basicSponsors[8]" />
    </div>
  </div>
</template>

<script setup>
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

{
  /* PLATINUM SPONSORS */
}

import norway_embassy_sarajevo from '@/assets/images/Norwegian Embassy Sarajevo.png'
import kingdom_of_netherland from '@/assets/images/Kingdom of Netherland.png'

const platinumSponsors = [
  {
    id: 1,
    name: 'Norwegian Embassy Sarajevo',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta exercitationem dolore accusamus at et aperiam, harum minus. Minima, expedita delectus.',
    img: norway_embassy_sarajevo,
  },
  {
    id: 2,
    name: 'Kingdom of the Netherlands',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta exercitationem dolore accusamus at et aperiam, harum minus. Minima, expedita delectus.',
    img: kingdom_of_netherland,
  },
]

{
  /* GOLDEN SPONSORS */
}

import njemacka_ambasada_sarajevo from '@/assets/images/Njemacka ambasada Sarajevo.png'
import embassy_of_sweden_sarajevo from '@/assets/images/Embassy of Sweden Sarajevo.png'
import swiss_agency from '@/assets/images/SWISS-AGENCY.png'

const goldenSponsors = [
  {
    id: 1,
    name: 'Njemacka Ambasada Sarajevo',
    img: njemacka_ambasada_sarajevo,
  },
  {
    id: 2,
    name: 'Embassy of Sweden Sarajevo',
    img: embassy_of_sweden_sarajevo,
  },
  {
    id: 3,
    name: 'Swiss Agency for Development and Cooperation',
    img: swiss_agency,
  },
]

{
  /* BASIC SPONSORS */
}

import federalno_ministarstvo_kulture_i_sporta from '@/assets/images/FBIH-Kultura i sport.png'
import usaid from '@/assets/images/USAID.png'
import grad_mostar from '@/assets/images/GRAD-MOSTAR 242x121.png'
import amus from '@/assets/images/AMUS.png'
import spark from '@/assets/images/SPARK.png'
import federalno_ministarstvo_obrazovanja_i_nauke from '@/assets/images/Federalno ministarstvo obrazovanja i nauke.png'
import usa_embassy_sarajevo from '@/assets/images/USA Embassy Sarajevo.png'
import vlada_hnk from '@/assets/images/VLADA-HNK.png'
import stability_pact_for_eastern_europe from '@/assets/images/STABILITY-PAKT.png'
import dubioza_kolektiv from '@/assets/images/DUBIOZA KOLEKTIV.png'
import red_bull from '@/assets/images/RED-BULL.png'
import osce from '@/assets/images/OSCE.png'
import robert_bosch_stiftung from '@/assets/images/ROBERT-BOSCH.png'
import BasicSponsorCard from '~/components/BasicSponsorCard.vue'

const basicSponsors = [
  {
    id: 1,
    name: 'Kingdom of the Netherlands',
    img: kingdom_of_netherland,
  },
  {
    id: 2,
    name: 'Norwegian Embassy Sarajevo',
    img: norway_embassy_sarajevo,
  },
  {
    id: 3,
    name: 'Federalno ministarstvo kulture i sporta',
    img: federalno_ministarstvo_kulture_i_sporta,
  },
  {
    id: 4,
    name: 'USAID',
    img: usaid,
  },
  {
    id: 5,
    name: 'Embassy of Sweden Sarajevo',
    img: embassy_of_sweden_sarajevo,
  },
  {
    id: 6,
    name: 'Grad Mostar',
    img: grad_mostar,
  },
  {
    id: 7,
    name: 'Swiss Agency for Development and Cooperation',
    img: swiss_agency,
  },
  {
    id: 8,
    name: 'AMUS',
    img: amus,
  },
  {
    id: 9,
    name: 'SPARK',
    img: spark,
  },
  {
    id: 10,
    name: 'Federalno ministarstvo obrazovanja i nauke',
    img: federalno_ministarstvo_obrazovanja_i_nauke,
  },
  {
    id: 11,
    name: 'USA Embassy Sarajevo',
    img: usa_embassy_sarajevo,
  },
  {
    id: 12,
    name: 'Vlada HNK',
    img: vlada_hnk,
  },
  {
    id: 13,
    name: 'Stability Pack',
    img: stability_pact_for_eastern_europe,
  },
  {
    id: 14,
    name: 'Dubioza Kolektiv',
    img: dubioza_kolektiv,
  },
  {
    id: 15,
    name: 'Red Bull',
    img: red_bull,
  },
  {
    id: 16,
    name: 'OSCE',
    img: osce,
  },
  {
    id: 17,
    name: 'Robert Bosch Stiftung',
    img: robert_bosch_stiftung,
  },
]
</script>

<style scoped></style>
