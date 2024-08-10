import videoType from './public/assets/images/news-images/icon-video.png'
import textType from './public/assets/images/news-images/icon-text.png'
import quoteType from './public/assets/images/news-images/icon-quote.png'

import firstArticlePhoto from './public/assets/images/news-images/firstArticlePhoto.png'
import secondArticlePhoto from './public/assets/images/news-images/secondArticlePhoto.png'
import thirdArticlePhoto from './public/assets/images/news-images/thirdArticlePhoto.png'
import fourthArticlePhoto from './public/assets/images/news-images/fourthArticlePhoto.png'
import fifthArticlePhoto from './public/assets/images/news-images/fifthArticlePhoto.png'
import sixthArticlePhoto from './public/assets/images/news-images/sixthArticlePhoto.png'
import seventhArticlePhoto from './public/assets/images/news-images/seventhArticlePhoto.png'
import eightArticlePhoto from './public/assets/images/news-images/eightArticlePhoto.png'

export const news = [
  {
    id: 1,
    title: 'Come together: how music is rebuilding bridges in divided Balkans',
    date: '1 August 2024',
    newsTypeIcon: videoType,
    newsTypeIconName: 'Video icon',
    coverPhoto: firstArticlePhoto,
    category: 'Video',
  },
  {
    id: 2,
    title: 'Jazz masterclass with Francisco Angel Blanco "Latino"',
    date: '31 July 2024',
    newsTypeIcon: textType,
    newsTypeIconName: 'Text icon',
    coverPhoto: secondArticlePhoto,
    category: 'Article',
  },
  {
    id: 3,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ab.',
    date: '30 July 2024',
    newsTypeIcon: quoteType,
    newsTypeIconName: 'Quote icon',
    coverPhoto: thirdArticlePhoto,
    category: 'Interview',
  },
  {
    id: 4,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ab.',
    date: '29 July 2024',
    newsTypeIcon: textType,
    newsTypeIconName: 'Text icon',
    coverPhoto: fourthArticlePhoto,
    category: 'Article',
  },
  {
    id: 5,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ab.',
    date: '28 July 2024',
    newsTypeIcon: videoType,
    newsTypeIconName: 'Video icon',
    coverPhoto: fifthArticlePhoto,
    category: 'Video',
  },
  {
    id: 6,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ab.',
    date: '27 July 2024',
    newsTypeIcon: textType,
    newsTypeIconName: 'Text icon',
    coverPhoto: sixthArticlePhoto,
    category: 'Article',
  },
  {
    id: 7,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ab.',
    date: '26 July 2024',
    newsTypeIcon: textType,
    newsTypeIconName: 'Text icon',
    coverPhoto: seventhArticlePhoto,
    category: 'Article',
  },
  {
    id: 8,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ab.',
    date: '25 July 2024',
    newsTypeIcon: textType,
    newsTypeIconName: 'Text icon',
    coverPhoto: eightArticlePhoto,
    category: 'Article',
  },
]

//Management and Administration images
import MarinBosnjak from '../public/assets/images/staff/marin-bosnjak.webp'
import JasminaKazazic from '../public/assets/images/staff/jasmina-kazazic.webp'
import LubnaCuric from '../public/assets/images/staff/lubna-curic.webp'
import OrhanMaslo from '../public/assets/images/staff/orhan-maslo.webp'
//Programme images
import DjenoMujic from '../public/assets/images/staff/djeno-mujic.webp'
import MonikaGrubisic from '../public/assets/images/staff/monika-grubisic.webp'
import NerminaCoric from '../public/assets/images/staff/nermica-coric.webp'
//Lecturers images
import AtilaAksoj from '../public/assets/images/staff/atilla-aksoj.webp'
import IvanKovacevic from '../public/assets/images/staff/ivan-kovacevic.webp'
import DomagojZelenika from '../public/assets/images/staff/domagoj-zelenika.webp'
import SeminMerzic from '../public/assets/images/staff/semin-merzic.webp'

export const staff = {
  managementAndAdministration: [
    {
      id: 1,
      name: 'Marin Bošnjak',
      department: 'Head of Production',
      shape: 'circle',
      img: MarinBosnjak,
      description: '',
    },
    {
      id: 2,
      name: 'Jasmina Kazazić',
      department: 'Financial Manager',
      shape: 'rectangle',
      img: JasminaKazazic,
      description: '',
    },
    {
      id: 3,
      name: 'Lubna Ćurić',
      department: 'Project Assistant/Booking Manager',
      shape: 'triangle',
      img: LubnaCuric,
      description:
        'Lubna Ćurić is a student of pedagogy and project assistant and manager of the Booking department at the Rock school. She entered the world of music by attending the first and second degree music school in Mostar, where she played the piano. She fulfilled her ambition towards rhythm and dynamics by enrolling in the Rock School Mostar in 2017, where she started playing drums. At the Rock School, she was the drummer of the then Academic band, and in 2019 she became the drummer of the band New Soul Generation Bosnia and went on a German tour with New Soul Generation Germany. In 2021, she started her DJ career and become an active member of both the local and wider electronic scene.',
    },
    {
      id: 4,
      name: 'Orhan Maslo',
      department: 'Project Manager',
      shape: 'circle',
      img: OrhanMaslo,
      description: '',
    },
  ],
  programme: [
    {
      id: 5,
      name: 'Đeno Mujić',
      department: 'Creative Department/Drums & Audio Production',
      shape: 'triangle',
      img: DjenoMujic,
      description: '',
    },
    {
      id: 6,
      name: 'Monika Grubišić-Ćabo',
      department: 'Head of Education/Vocal Coach',
      shape: 'circle',
      img: MonikaGrubisic,
      description: '',
    },
    {
      id: 7,
      name: 'Nermina Ćorić',
      department: 'Student Administration Officer',
      shape: 'rectangle',
      img: NerminaCoric,
      description: '',
    },
  ],
  lecturers: [
    {
      id: 8,
      name: 'Atila Aksoj',
      department: 'Guitar',
      shape: 'half-rectangle',
      img: AtilaAksoj,
      description: '',
    },
    {
      id: 9,
      name: 'Ivan Kovacevic',
      department: 'Guitar',
      shape: 'leaf',
      img: IvanKovacevic,
      description: '',
    },
    {
      id: 10,
      name: 'Domagoj Zelenika',
      department: 'Guitar',
      shape: 'triangle',
      img: DomagojZelenika,
      description: '',
    },
    {
      id: 11,
      name: 'Semin Merzić',
      department: 'Band Coach',
      shape: 'circle',
      img: SeminMerzic,
      description: '',
    },
  ],
}

import norway_embassy_sarajevo from '../public/assets/images/Norwegian Embassy Sarajevo.png'
import kingdom_of_netherland from '../public/assets/images/Kingdom of Netherland.png'
import njemacka_ambasada_sarajevo from '../public/assets/images/Njemacka ambasada Sarajevo.png'
import embassy_of_sweden_sarajevo from '../public/assets/images/Embassy of Sweden Sarajevo.png'
import swiss_agency from '../public/assets/images/SWISS-AGENCY.png'

export const platinumSponsors = [
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

import federalno_ministarstvo_kulture_i_sporta from '../public/assets/images/FBIH-Kultura i sport.png'
import usaid from '../public/assets/images/USAID.png'
import grad_mostar from '../public/assets/images/GRAD-MOSTAR 242x121.png'
import amus from '../public/assets/images/AMUS.png'
import spark from '../public/assets/images/SPARK.png'
import federalno_ministarstvo_obrazovanja_i_nauke from '../public/assets/images/Federalno ministarstvo obrazovanja i nauke.png'
import usa_embassy_sarajevo from '../public/assets/images/USA Embassy Sarajevo.png'
import vlada_hnk from '../public/assets/images/VLADA-HNK.png'
import stability_pact_for_eastern_europe from '../public/assets/images/STABILITY-PAKT.png'
import dubioza_kolektiv from '../public/assets/images/DUBIOZA KOLEKTIV.png'
import red_bull from '../public/assets/images/RED-BULL.png'
import osce from '../public/assets/images/OSCE.png'
import robert_bosch_stiftung from '../public/assets/images/ROBERT-BOSCH.png'

export const basicSponsors = [
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

export const sponsors = [
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
  {
    id: 3,
    name: 'Njemacka Ambasada Sarajevo',
    img: njemacka_ambasada_sarajevo,
  },
  {
    id: 4,
    name: 'Embassy of Sweden Sarajevo',
    img: embassy_of_sweden_sarajevo,
  },
  {
    id: 5,
    name: 'Swiss Agency for Development and Cooperation',
    img: swiss_agency,
  },
  {
    id: 6,
    name: 'Federalno ministarstvo kulture i sporta',
    img: federalno_ministarstvo_kulture_i_sporta,
  },
  {
    id: 7,
    name: 'USAID',
    img: usaid,
  },
  {
    id: 8,
    name: 'Grad Mostar',
    img: grad_mostar,
  },
  {
    id: 9,
    name: 'AMUS',
    img: amus,
  },
  {
    id: 10,
    name: 'SPARK',
    img: spark,
  },
  {
    id: 11,
    name: 'Federalno ministarstvo obrazovanja i nauke',
    img: federalno_ministarstvo_obrazovanja_i_nauke,
  },
  {
    id: 12,
    name: 'USA Embassy Sarajevo',
    img: usa_embassy_sarajevo,
  },
  {
    id: 13,
    name: 'Vlada HNK',
    img: vlada_hnk,
  },
  {
    id: 14,
    name: 'Stability Pack',
    img: stability_pact_for_eastern_europe,
  },
  {
    id: 15,
    name: 'Dubioza Kolektiv',
    img: dubioza_kolektiv,
  },
  {
    id: 16,
    name: 'Red Bull',
    img: red_bull,
  },
  {
    id: 17,
    name: 'OSCE',
    img: osce,
  },
  {
    id: 18,
    name: 'Robert Bosch Stiftung',
    img: robert_bosch_stiftung,
  },
]

export const offers = [
  {
    id: 1,
    offer: 'Drums',
  },
  {
    id: 2,
    offer: 'Bass Guitar',
  },
  {
    id: 3,
    offer: 'Electric Music Production',
  },
  {
    id: 4,
    offer: 'Keyboards (electric piano)',
  },
  {
    id: 5,
    offer: 'Electric guitar',
  },
  {
    id: 6,
    offer: 'Workshops and masterclasses',
  },
  {
    id: 7,
    offer: 'Vocals',
  },
  {
    id: 8,
    offer: 'Audio recording production',
  },
]

export const years = [
  {
    id: 1,
    year: 2012,
    title: 'How it started ',
    about:
      'Mostar Rock School began its work in August 2012. Twenty young musicians from Mostar (16 students and 4 lecturers) took part in a summer rock camp in Macedonia – Skopje Summer School. First school bands were formed which will lead the way for many generations to come.',
  },
  {
    id: 2,
    year: 2014,
    title: 'The humble beginning',
    about:
      'Mostar Rock School was registered as an NGO at the local level with the aim of actively contributing through its activities to the revival of the comprehensive urban music scene in Mostar and Bosnia and Herzegovina, and to connect young people through music as a means of achieving their common goals, regardless of their ethnic, religious or other affiliation.',
  },
  {
    id: 3,
    year: 2015,
    title: 'Summer of Music',
    about:
      'The program started getting traction. More and more students were now a part of the School. In addition, with the help of the Embassy of the Republic of Germany in Bosnia and Herzegovina, Mostar Rock School successfully realized the project called &#39;Summer Rock School&#39; expanding its reach to a wider area.',
  },
  {
    id: 4,
    year: 2016,
    title: 'Sailing Through Uncertainty',
    about:
      'At the beginning of 2016, with a record number of students thus far, Mostar Rock School is left without funds because the support for this fifth program year could not be continued due to the redirection of the priorities of the Norwegian government. After a 10-month crisis period, we were back on stronger to Rock again!',
  },
  {
    id: 5,
    year: 2017,
    title: 'New Partnerships',
    about:
      'Mostar Rock School signed and concluded a three-year contract with the Swedish Embassy in Sarajevo in March 2017, and a three-year contract with USAID in Bosnia and Herzegovina in May 2017. The program started expanding, as well as the interest for the School. With the addition of the Booking Department, Mostar Rock School started establishing itself as a bigger generator of cultural and musical events.',
  },
  {
    id: 6,
    year: 2018,
    title: 'Continuity and Collaboration',
    about:
      'In August 2018, Rock School again signed a three-year agreement with the Embassy of the Kingdom of Norway, and successfully continued with the previous school activities, reaching even bigger numbers, outreaching to communities outside of Mostar with its Mobile Rock School Program and strengthening its core educational program further.',
  },
  {
    id: 7,
    year: 2023,
    title: 'Going Forward',
    about:
      'The journey is far from over, and the future is bright. Mostar Rock School is expanding horizons, making music, and leaving an indelible mark on the world. With every chord played and every note sung, it continues to be a beacon of hope, unity, and artistic expression in Mostar and beyond.',
  },
]
