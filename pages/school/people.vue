<template>
  <div>
    <div class="container">
      <header>
        <Navbar />
        <div class="hero">
          <div class="info">
            <p @click="$router.go(-1)">< The School</p>
            <h1>Our staff Lorem ipsum dolor sit.</h1>
            <p class="description">
              Integrity, dedication, professionalism, enthusiasm and lifelong
              learning is what drives our staff. MoRS teacher’s went through
              exchange programs for knowledge updates in modern music curriculum
              and pedagogy at Popakademie (AU) and Fontys Rock Academy (NL) and
              they received a Contribution to pedagogical practice in BiH award
              from Pedagogical Institute in Mostar. We take pride in what we do
              and live our mission.
            </p>
          </div>
          <div class="info-footer">
            <div class="sub-heading">
              <h2>
                The misfits. The rebels. The troublemakers. The square pegs in
                round holes.
              </h2>
            </div>
            <div class="call-for-support">
              <SupportCallCard />
            </div>
          </div>
        </div>
      </header>
      <div class="content">
        <p class="title">Meet the people behind Mostar Rock School.</p>
        <section class="staff-container">
          <div id="management-administration">
            <h3>Management and Administration</h3>
            <article class="management-administration">
              <div
                v-for="person in staff.managementAndAdministration"
                :key="person.id"
                class="member"
              >
                <StaffCard :person="person" />
              </div>
            </article>
          </div>
          <div id="programme">
            <h3>Programme</h3>
            <article class="programme">
              <div
                v-for="person in staff.programme"
                :key="person.id"
                class="member"
              >
                <StaffCard :person="person" />
              </div>
            </article>
          </div>
          <div id="lecturers">
            <h3>Lecturers</h3>
            <article class="lecturers">
              <div
                v-for="person in staff.lecturers"
                :key="person.id"
                class="member"
              >
                <StaffCard :person="person" />
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { staff } from '~/data'
</script>

<style scoped>
div {
  max-width: 100vw;
}

header {
  max-width: 100vw;
  height: 1085px;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(9, 9, 121, 0) 33%,
      rgba(7, 7, 97, 0) 67%,
      rgba(0, 0, 0, 1) 100%
    ),
    url('../../public/assets/images/staff/staff-header-cover-photo.png');
  background-size: cover;
  margin-bottom: 100px;
  /* background: yellow; */
}

.hero {
  max-width: 74rem;
  height: 1085px;
  margin-top: 187px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.info {
  max-width: 780px;
  color: #fff;
}

.info > p:first-child {
  width: fit-content;
  font-size: 1.875rem;
  font-family: 'F37Hybrid-Bold';
  letter-spacing: 0%;
  cursor: pointer;
}

.info > p:first-child:hover {
  color: #ff0000;
  transition: 500ms;
}

.info > p:first-child:not(hover) {
  color: #fff;
  transition: 500ms;
}

.info > h1 {
  margin-top: 2.1875rem;
  margin-bottom: 35px;
  font-size: 3.125rem;
  font-family: 'F37Hybrid-Bold';
  letter-spacing: 0%;
  line-height: 4.0625rem;
}

.description {
  max-width: 680px;
  line-height: 23px;
}

.info-footer {
  margin-top: 100px;
  display: flex;
  gap: 74px;
}

.sub-heading {
  max-width: 640px;
  display: flex;
  flex-direction: column-reverse;
  margin-top: 130px;
}

.sub-heading > h2 {
  font-size: 40px;
  font-family: 'F37Hybrid-Bold';
  line-height: 50px;
}

.content {
  max-width: 74rem;
  margin-inline: auto;
  margin-top: 300px;
  margin-bottom: 100px;
}

.staff-container {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}

h3 {
  font-size: 30px;
  font-family: 'F37Hybrid-Bold';
}

.management-administration,
.programme,
.lecturers {
  display: flex;
  margin-top: 50px;
  gap: 20px;
}
</style>
