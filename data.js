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
    },
    {
      id: 2,
      name: 'Jasmina Kazazić',
      department: 'Financial Manager',
      shape: 'rectangle',
      img: JasminaKazazic,
    },
    {
      id: 3,
      name: 'Lubna Ćurić',
      department: 'Project Assistant/Booking Manager',
      shape: 'triangle',
      img: LubnaCuric,
    },
    {
      id: 4,
      name: 'Orhan Maslo',
      department: 'Project Manager',
      shape: 'circle',
      img: OrhanMaslo,
    },
  ],
  programme: [
    {
      id: 5,
      name: 'Đeno Mujić',
      department: 'Creative Department/Drums & Audio Production',
      shape: 'triangle',
      img: DjenoMujic,
    },
    {
      id: 6,
      name: 'Monika Grubišić-Ćabo',
      department: 'Head of Education/Vocal Coach',
      shape: 'circle',
      img: MonikaGrubisic,
    },
    {
      id: 7,
      name: 'Nermina Ćorić',
      department: 'Student Administration Officer',
      shape: 'rectangle',
      img: NerminaCoric,
    },
  ],
  lecturers: [
    {
      id: 8,
      name: 'Atila Aksoj',
      department: 'Guitar',
      shape: 'half-rectangle',
      img: AtilaAksoj,
    },
    {
      id: 9,
      name: 'Ivan Kovacevic',
      department: 'Guitar',
      shape: 'leaf',
      img: IvanKovacevic,
    },
    {
      id: 10,
      name: 'Domagoj Zelenika',
      department: 'Guitar',
      shape: 'triangle',
      img: DomagojZelenika,
    },
    {
      id: 11,
      name: 'Semin Merzić',
      department: 'Band Coach',
      shape: 'circle',
      img: SeminMerzic,
    },
  ],
}
