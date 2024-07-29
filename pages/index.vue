<template>
  <div class="container">
    <div style="margin-left: 20px; margin-top: 20px">
      <StaffCard :person="staff.lecturers[0]" />
    </div>
  </div>
</template>

<script setup>
//Management and Administration images
import MarinBosnjak from '../assets/images/staff/marin-bosnjak.webp'
import JasminaKazazic from '../assets/images/staff/jasmina-kazazic.webp'
import LubnaCuric from '../assets/images/staff/lubna-curic.webp'
import OrhanMaslo from '../assets/images/staff/orhan-maslo.webp'
//Programme images
import DjenoMujic from '../assets/images/staff/djeno-mujic.webp'
import MonikaGrubisic from '../assets/images/staff/monika-grubisic.webp'
import NerminaCoric from '../assets/images/staff/nermica-coric.webp'
//Lecturers images
import AtilaAksoj from '../assets/images/staff/atilla-aksoj.webp'
import IvanKovacevic from '../assets/images/staff/ivan-kovacevic.webp'
import DomagojZelenika from '../assets/images/staff/domagoj-zelenika.webp'
import SeminMerzic from '../assets/images/staff/semin-merzic.webp'

const staff = {
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
      id: 1,
      name: 'Đeno Mujić',
      department: 'Creative Department/Drums & Audio Production',
      shape: 'triangle',
      img: DjenoMujic,
    },
    {
      id: 2,
      name: 'Monika Grubišić-Ćabo',
      department: 'Head of Education/Vocal Coach',
      shape: 'circle',
      img: MonikaGrubisic,
    },
    {
      id: 3,
      name: 'Nermina Ćorić',
      department: 'Student Administration Officer',
      shape: 'rectangle',
      img: NerminaCoric,
    },
  ],
  lecturers: [
    {
      id: 1,
      name: 'Atila Aksoj',
      department: 'Guitar',
      shape: 'half-rectangle',
      img: AtilaAksoj,
    },
    {
      id: 2,
      name: 'Ivan Kovacevic',
      department: 'Guitar',
      shape: 'leaf',
      img: IvanKovacevic,
    },
    {
      id: 3,
      name: 'Domagoj Zelenika',
      department: 'Guitar',
      shape: 'triangle',
      img: DomagojZelenika,
    },
    {
      id: 4,
      name: 'Semin Merzić',
      department: 'Band Coach',
      shape: 'circle',
      img: SeminMerzic,
    },
  ],
}

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

<style scoped></style>
