<template>
  <div style="padding: 10rem">
    <SpreadTheWord />
    <br />
    <NewsletterHorizontal />
  </div>
</template>

<script setup>
import tongue from "../public/assets/images/tongue.png";
import bubbles from "../public/assets/images/bubbles.png";
import drum from "../public/assets/images/drum.png";
import diamond from "../public/assets/images/diamond.png";
import theGuardian from "../public/assets/images/The-Guardian.png";
import alJazeera from "../public/assets/images/Al-Jazeera.png";

let contributionTypes = [
  {
    id: 1,
    type: "Education",
    content: `By funding our classrooms, you provide quality music education to talented individuals who may not have access otherwise. Your contribution helps us offer comprehensive programs, individual lessons, group sessions, band collaborations, and live performances.`,
    icon: tongue,
    iconName: "Tongue",
  },
  {
    id: 2,
    type: "Community Integration",
    content: `Your donation allows us to conduct workshops and outreach programs, reaching out to marginalized communities and promoting inclusivity. Through music, we can bridge divides and foster understanding among diverse groups.`,
    icon: bubbles,
    iconName: "Bubbles",
  },
  {
    id: 3,
    type: "Impactful events",
    content: `By supporting our concerts, festivals, and special events, you help us create memorable experiences for our students and the wider community. These events not only showcase the incredible talent nurtured at the Mostar Rock School but also bring people together in celebration of music.`,
    icon: drum,
    iconName: "Drum",
  },
  {
    id: 4,
    type: "Scholarship",
    content: `Your generosity can provide scholarships and financial aid packages to deserving students. With your support, we ensure that talented individuals, regardless of their financial circumstances, have the opportunity to pursue their musical dreams and unlock their full potential.`,
    icon: diamond,
    iconName: "Diamond",
  },
];
const events = [
  {
    id: 1,
    title: "Treći po redu MORS session event u K19",
    date: "27.04.2023",
    time: "21:00",
    location: "MC Pavarotti",
    fee: "5 KM",
  },
  {
    id: 2,
    title: "Edo Maajka u Mostaru",
    date: "27.04.2023",
    time: "21:00",
    location: "OKC Abrasevic",
    fee: "Free",
  },
];

{
  /* PLATINUM SPONSORS */
}

import norway_embassy_sarajevo from "../public/assets/images/Norwegian Embassy Sarajevo.png";
import kingdom_of_netherland from "../public/assets/images/Kingdom of Netherland.png";

const platinumSponsors = [
  {
    id: 1,
    name: "Norwegian Embassy Sarajevo",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta exercitationem dolore accusamus at et aperiam, harum minus. Minima, expedita delectus.",
    img: norway_embassy_sarajevo,
  },
  {
    id: 2,
    name: "Kingdom of the Netherlands",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta exercitationem dolore accusamus at et aperiam, harum minus. Minima, expedita delectus.",
    img: kingdom_of_netherland,
  },
];

{
  /* GOLDEN SPONSORS */
}

import njemacka_ambasada_sarajevo from "../public/assets/images/Njemacka ambasada Sarajevo.png";
import embassy_of_sweden_sarajevo from "../public/assets/images/Embassy of Sweden Sarajevo.png";
import swiss_agency from "../public/assets/images/SWISS-AGENCY.png";

const goldenSponsors = [
  {
    id: 1,
    name: "Njemacka Ambasada Sarajevo",
    img: njemacka_ambasada_sarajevo,
  },
  {
    id: 2,
    name: "Embassy of Sweden Sarajevo",
    img: embassy_of_sweden_sarajevo,
  },
  {
    id: 3,
    name: "Swiss Agency for Development and Cooperation",
    img: swiss_agency,
  },
];

{
  /* BASIC SPONSORS */
}

import federalno_ministarstvo_kulture_i_sporta from "../public/assets/images/FBIH-Kultura i sport.png";
import usaid from "../public/assets/images/USAID.png";
import grad_mostar from "../public/assets/images/GRAD-MOSTAR 242x121.png";
import amus from "../public/assets/images/AMUS.png";
import spark from "../public/assets/images/SPARK.png";
import federalno_ministarstvo_obrazovanja_i_nauke from "../public/assets/images/Federalno ministarstvo obrazovanja i nauke.png";
import usa_embassy_sarajevo from "../public/assets/images/USA Embassy Sarajevo.png";
import vlada_hnk from "../public/assets/images/VLADA-HNK.png";
import stability_pact_for_eastern_europe from "../public/assets/images/STABILITY-PAKT.png";
import dubioza_kolektiv from "../public/assets/images/DUBIOZA KOLEKTIV.png";
import red_bull from "../public/assets/images/RED-BULL.png";
import osce from "../public/assets/images/OSCE.png";
import robert_bosch_stiftung from "../public/assets/images/ROBERT-BOSCH.png";

const basicSponsors = [
  {
    id: 1,
    name: "Kingdom of the Netherlands",
    img: kingdom_of_netherland,
  },
  {
    id: 2,
    name: "Norwegian Embassy Sarajevo",
    img: norway_embassy_sarajevo,
  },
  {
    id: 3,
    name: "Federalno ministarstvo kulture i sporta",
    img: federalno_ministarstvo_kulture_i_sporta,
  },
  {
    id: 4,
    name: "USAID",
    img: usaid,
  },
  {
    id: 5,
    name: "Embassy of Sweden Sarajevo",
    img: embassy_of_sweden_sarajevo,
  },
  {
    id: 6,
    name: "Grad Mostar",
    img: grad_mostar,
  },
  {
    id: 7,
    name: "Swiss Agency for Development and Cooperation",
    img: swiss_agency,
  },
  {
    id: 8,
    name: "AMUS",
    img: amus,
  },
  {
    id: 9,
    name: "SPARK",
    img: spark,
  },
  {
    id: 10,
    name: "Federalno ministarstvo obrazovanja i nauke",
    img: federalno_ministarstvo_obrazovanja_i_nauke,
  },
  {
    id: 11,
    name: "USA Embassy Sarajevo",
    img: usa_embassy_sarajevo,
  },
  {
    id: 12,
    name: "Vlada HNK",
    img: vlada_hnk,
  },
  {
    id: 13,
    name: "Stability Pack",
    img: stability_pact_for_eastern_europe,
  },
  {
    id: 14,
    name: "Dubioza Kolektiv",
    img: dubioza_kolektiv,
  },
  {
    id: 15,
    name: "Red Bull",
    img: red_bull,
  },
  {
    id: 16,
    name: "OSCE",
    img: osce,
  },
  {
    id: 17,
    name: "Robert Bosch Stiftung",
    img: robert_bosch_stiftung,
  },
];

const mediaCoverageList = [
  {
    id: 1,
    date: "16 March 2018",
    content: `Come together: music is rebuilding bridges in divided Balkans`,
    img: theGuardian,
    imgName: "The Guardian",
  },
  {
    id: 2,
    date: "30 July 2024",
    content: `Development in progress. School is amazing`,
    img: alJazeera,
    imgName: "Al-Jazeera",
  },
];
</script>
