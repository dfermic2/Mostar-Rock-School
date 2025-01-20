import videoType from "./public/assets/images/news-images/icon-video.png";
import textType from "./public/assets/images/news-images/icon-text.png";
import quoteType from "./public/assets/images/news-images/icon-quote.png";

import firstArticlePhoto from "./public/assets/images/news-images/firstArticlePhoto.png";
import secondArticlePhoto from "./public/assets/images/news-images/secondArticlePhoto.png";
import thirdArticlePhoto from "./public/assets/images/news-images/thirdArticlePhoto.png";
import fourthArticlePhoto from "./public/assets/images/news-images/fourthArticlePhoto.png";
import fifthArticlePhoto from "./public/assets/images/news-images/fifthArticlePhoto.png";
import sixthArticlePhoto from "./public/assets/images/news-images/sixthArticlePhoto.png";
import seventhArticlePhoto from "./public/assets/images/news-images/seventhArticlePhoto.png";
import eightArticlePhoto from "./public/assets/images/news-images/eightArticlePhoto.png";

export const news = [
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

//Management and Administration images
import MarinBosnjak from "../public/assets/images/staff/marin-bosnjak.webp";
import JasminaKazazic from "../public/assets/images/staff/jasmina-kazazic.webp";
import OrhanMaslo from "../public/assets/images/staff/orhan-maslo.webp";
//Programme images
import DjenoMujic from "../public/assets/images/staff/djeno-mujic.webp";
import MonikaGrubisic from "../public/assets/images/staff/monika-grubisic.webp";
import NerminaCoric from "../public/assets/images/staff/nermica-coric.webp";
//Lecturers images
import IvanKovacevic from "../public/assets/images/staff/ivan-kovacevic.webp";
import DomagojZelenika from "../public/assets/images/staff/domagoj-zelenika.webp";
import SeminMerzic from "../public/assets/images/staff/semin-merzic.webp";

export const staff = {
  managementAndAdministration: [
    {
      id: 1,
      name: "Marin Bošnjak",
      department: "head_of_production",
      shape: "circle",
      img: MarinBosnjak,
      description: "",
    },
    {
      id: 2,
      name: "Jasmina Kazazić",
      department: "financial_manager",
      shape: "rectangle",
      img: JasminaKazazic,
      description: "",
    },
    {
      id: 3,
      name: "Orhan Maslo",
      department: "project_manager",
      shape: "circle",
      img: OrhanMaslo,
      description: "",
    },
  ],
  programme: [
    {
      id: 4,
      name: "Đeno Mujić",
      department: "creative_department",
      shape: "triangle",
      img: DjenoMujic,
      description: "",
    },
    {
      id: 5,
      name: "Monika Grubišić-Ćabo",
      department: "vocal_coach",
      shape: "circle",
      img: MonikaGrubisic,
      description: "",
    },
    {
      id: 6,
      name: "Nermina Ćorić",
      department: "student_administration",
      shape: "rectangle",
      img: NerminaCoric,
      description: "",
    },
  ],
  lecturers: [
    {
      id: 7,
      name: "Ivan Kovacevic",
      department: "guitar",
      shape: "leaf",
      img: IvanKovacevic,
      description: "",
    },
    {
      id: 8,
      name: "Domagoj Zelenika",
      department: "guitar",
      shape: "triangle",
      img: DomagojZelenika,
      description: "",
    },
    {
      id: 9,
      name: "Semin Merzić",
      department: "band_coach",
      shape: "circle",
      img: SeminMerzic,
      description: "",
    },
  ],
};

import norway_embassy_sarajevo from "../public/assets/images/Norwegian Embassy Sarajevo.png";
import kingdom_of_netherland from "../public/assets/images/Kingdom of Netherland.png";
import njemacka_ambasada_sarajevo from "../public/assets/images/Njemacka ambasada Sarajevo.png";
import embassy_of_sweden_sarajevo from "../public/assets/images/Embassy of Sweden Sarajevo.png";
import swiss_agency from "../public/assets/images/SWISS-AGENCY.png";

export const platinumSponsors = [
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

export const basicSponsors = [
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

export const sponsors = [
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
  {
    id: 3,
    name: "Njemacka Ambasada Sarajevo",
    img: njemacka_ambasada_sarajevo,
  },
  {
    id: 4,
    name: "Embassy of Sweden Sarajevo",
    img: embassy_of_sweden_sarajevo,
  },
  {
    id: 5,
    name: "Swiss Agency for Development and Cooperation",
    img: swiss_agency,
  },
  {
    id: 6,
    name: "Federalno ministarstvo kulture i sporta",
    img: federalno_ministarstvo_kulture_i_sporta,
  },
  {
    id: 7,
    name: "USAID",
    img: usaid,
  },
  {
    id: 8,
    name: "Grad Mostar",
    img: grad_mostar,
  },
  {
    id: 9,
    name: "AMUS",
    img: amus,
  },
  {
    id: 10,
    name: "SPARK",
    img: spark,
  },
  {
    id: 11,
    name: "Federalno ministarstvo obrazovanja i nauke",
    img: federalno_ministarstvo_obrazovanja_i_nauke,
  },
  {
    id: 12,
    name: "USA Embassy Sarajevo",
    img: usa_embassy_sarajevo,
  },
  {
    id: 13,
    name: "Vlada HNK",
    img: vlada_hnk,
  },
  {
    id: 14,
    name: "Stability Pack",
    img: stability_pact_for_eastern_europe,
  },
  {
    id: 15,
    name: "Dubioza Kolektiv",
    img: dubioza_kolektiv,
  },
  {
    id: 16,
    name: "Red Bull",
    img: red_bull,
  },
  {
    id: 17,
    name: "OSCE",
    img: osce,
  },
  {
    id: 18,
    name: "Robert Bosch Stiftung",
    img: robert_bosch_stiftung,
  },
];

export const offers = [
  {
    id: 1,
    offer: "drums",
  },
  {
    id: 2,
    offer: "bass_guitar",
  },
  {
    id: 3,
    offer: "creative_electronic_production",
  },
  {
    id: 4,
    offer: "keyboards",
  },
  {
    id: 5,
    offer: "electric_guitar",
  },
  {
    id: 6,
    offer: "workshops_masterclasses",
  },
  {
    id: 7,
    offer: "vocals",
  },
  {
    id: 8,
    offer: "audio_recording_production",
  },
];

export const events = [
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

export const donationTypes = [
  {
    id: 1,
    title: "online_donation",
    description: "online_donation_p",
    btnIcn: "ion:heart",
    btnText: "donate_now_btn",
    path: "/support",
  },
  {
    id: 2,
    title: "corporate_sponsorship",
    description: "corporate_sponsorship_p",
    btnIcn: "",
    btnText: "contact_us_btn",
    path: "/contact",
  },
  {
    id: 3,
    title: "inKind_donations",
    description: "inKind_donations_p",
    btnIcn: "",
    btnText: "get_in_touch_btn",
    path: "/contact",
  },
  {
    id: 4,
    title: "fundraising_events",
    description: "fundraising_events_p",
    btnIcn: "",
    btnText: "talk_ideas_btn",
    path: "/contact",
  },
];

import tongue from "../public/assets/images/tongue.png";
import bubbles from "../public/assets/images/bubbles.png";
import drum from "../public/assets/images/drum.png";
import diamond from "../public/assets/images/diamond.png";

export const contributionTypes = [
  {
    id: 1,
    type: "education",
    content: "education_p",
    icon: tongue,
    iconName: "Tongue",
  },
  {
    id: 2,
    type: "community_integration",
    content: "community_integration_p",
    icon: bubbles,
    iconName: "Bubbles",
  },
  {
    id: 3,
    type: "impactful_events",
    content: "impactful_events_p",
    icon: drum,
    iconName: "Drum",
  },
  {
    id: 4,
    type: "scholarship",
    content: "scholarship_p",
    icon: diamond,
    iconName: "Diamond",
  },
];

export const years = [
  {
    id: 1,
    year: 2012,
    title: "timeline_2012_h",
    about: "timeline_2012_p",
  },
  {
    id: 2,
    year: 2014,
    title: "timeline_2014_h",
    about: "timeline_2014_p",
  },
  {
    id: 3,
    year: 2015,
    title: "timeline_2015_h",
    about: "timeline_2015_p",
  },
  {
    id: 4,
    year: 2016,
    title: "timeline_2016_h",
    about: "timeline_2016_p",
  },
  {
    id: 5,
    year: 2017,
    title: "timeline_2017_h",
    about: "timeline_2017_p",
  },
  {
    id: 6,
    year: 2018,
    title: "timeline_2018_h",
    about: "timeline_2018_p",
  },
  {
    id: 7,
    year: 2023,
    title: "Going Forward",
    title: "timeline_2023_h",
    about: "timeline_2023_p",
  },
];
