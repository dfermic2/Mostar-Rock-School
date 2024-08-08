<template>
  <div>
    <!-- <div class="bg-grey"> -->
    <header>
      <Navbar />
    </header>
    <SponsorAutoSlider />
    <Statistics />
    <!-- </div> -->
    <p>Index</p>
  </div>
</template>

<script setup>
import videoType from "../public/assets/images/news-images/icon-video.png";
import textType from "../public/assets/images/news-images/icon-text.png";
import quoteType from "../public/assets/images/news-images/icon-quote.png";

import firstArticlePhoto from "../public/assets/images/news-images/firstArticlePhoto.png";
import secondArticlePhoto from "../public/assets/images/news-images/secondArticlePhoto.png";
import thirdArticlePhoto from "../public/assets/images/news-images/thirdArticlePhoto.png";
import fourthArticlePhoto from "../public/assets/images/news-images/fourthArticlePhoto.png";
import fifthArticlePhoto from "../public/assets/images/news-images/fifthArticlePhoto.png";
import sixthArticlePhoto from "../public/assets/images/news-images/sixthArticlePhoto.png";
import seventhArticlePhoto from "../public/assets/images/news-images/seventhArticlePhoto.png";
import eightArticlePhoto from "../public/assets/images/news-images/eightArticlePhoto.png";

const news = [
  {
    id: 1,
    title: "Come together: how music is rebuilding bridges in divided Balkans",
    date: "1 August 2024",
    newsTypeIcon: videoType,
    newsTypeIconName: "Video icon",
    coverPhoto: firstArticlePhoto,
    category: "Video",
  },
  {
    id: 2,
    title: 'Jazz masterclass with Francisco Angel Blanco "Latino"',
    date: "31 July 2024",
    newsTypeIcon: textType,
    newsTypeIconName: "Text icon",
    coverPhoto: secondArticlePhoto,
    category: "Article",
  },
  {
    id: 3,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ab.",
    date: "30 July 2024",
    newsTypeIcon: quoteType,
    newsTypeIconName: "Quote icon",
    coverPhoto: thirdArticlePhoto,
    category: "Interview",
  },
  {
    id: 4,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ab.",
    date: "29 July 2024",
    newsTypeIcon: textType,
    newsTypeIconName: "Text icon",
    coverPhoto: fourthArticlePhoto,
    category: "Article",
  },
  {
    id: 5,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ab.",
    date: "28 July 2024",
    newsTypeIcon: videoType,
    newsTypeIconName: "Video icon",
    coverPhoto: fifthArticlePhoto,
    category: "Video",
  },
  {
    id: 6,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ab.",
    date: "27 July 2024",
    newsTypeIcon: textType,
    newsTypeIconName: "Text icon",
    coverPhoto: sixthArticlePhoto,
    category: "Article",
  },
  {
    id: 7,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ab.",
    date: "26 July 2024",
    newsTypeIcon: textType,
    newsTypeIconName: "Text icon",
    coverPhoto: seventhArticlePhoto,
    category: "Article",
  },
  {
    id: 8,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ab.",
    date: "25 July 2024",
    newsTypeIcon: textType,
    newsTypeIconName: "Text icon",
    coverPhoto: eightArticlePhoto,
    category: "Article",
  },
];

let categories = [...new Set(news.map((c) => c.category))];
categories.splice(0, 0, "All Categories");

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

/* PLATINUM SPONSORS */

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

/* GOLDEN SPONSORS */

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

/* BASIC SPONSORS */

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
import SpreadTheWord from "~/components/SpreadTheWord.vue";

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
</script>
