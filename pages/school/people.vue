<template>
  <div>
    <div class="container">
      <header>
        <Navbar />
        <div class="info-container">
          <div class="info-content">
            <div class="info">
              <p class="back" @click="navigateTo('/school')">< The School</p>
              <h1>Our staff</h1>
              <p class="info-description">
                Integrity, dedication, professionalism, enthusiasm and lifelong
                learning is what drives our staff. MoRS teacher's went through
                exchange programs for knowledge updates in modern music
                curriculum and pedagogy at Popakademie (AU) and Fontys Rock
                Academy (NL) and they received a Contribution to pedagogical
                practice in BiH award from Pedagogical Institute in Mostar. We
                take pride in what we do and live our mission.
              </p>
            </div>
          </div>
        </div>

        <div class="bottom-hero">
          <div class="bottom-heading">
            <h2>
              The misfits. The rebels. The troublemakers. The square pegs in
              round holes.
            </h2>
          </div>
          <SupportCallCard />
        </div>
      </header>
      <Transition>
        <PeoplePopup v-if="route.query.id" />
      </Transition>
      <section class="staff-content">
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
                <StaffCard
                  :person="person"
                  @click="navigateTo(`/school/people/?id=${person.id}`)"
                />
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
                <StaffCard
                  :person="person"
                  @click="navigateTo(`/school/people/?id=${person.id}`)"
                />
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
                <StaffCard
                  :person="person"
                  @click="navigateTo(`/school/people/?id=${person.id}`)"
                />
              </div>
            </article>
          </div>
        </section>
      </section>

      <Donation />
    </div>
  </div>
</template>

<script setup>
import { staff } from "~/data";
let route = useRoute();
</script>

<style scoped>
div {
  max-width: 100vw;
}

header {
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(9, 9, 121, 0) 33%,
      rgba(7, 7, 97, 0) 67%,
      rgba(0, 0, 0, 1) 100%
    ),
    url("../../public/assets/images/staff/staff-header-cover-photo.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom 14.6875rem center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  min-height: 67.8125rem;
}

.info-container {
  display: flex;
}

.info-content {
  display: flex;
  flex-grow: 1;
  align-items: center;
  max-width: 74rem;
  margin-inline: auto;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 16.5rem;
  max-width: 45.9rem;
  color: white;
  h1 {
    font-size: 4.6875rem;
    font-family: "F37Hybrid-Bold";
    line-height: 5.3rem;
    padding-bottom: 2.5rem;
    margin: 0;
  }

  .info-description {
    font-size: 1rem;
    line-height: 1.4375rem;
    font-weight: 600;
  }

  .back {
    font-size: 1.875rem;
    font-family: "F37Hybrid-Bold";
    transition: 500ms;
    width: fit-content;
  }

  .back:hover {
    color: #ff0000;
    cursor: pointer;
  }
}

.bottom-hero {
  display: flex;
  flex-wrap: wrap-reverse;
  max-width: 74rem;
  gap: 2rem;
  margin-inline: auto;
  align-items: flex-end;

  .bottom-heading {
    display: flex;
    align-items: flex-end;
    max-width: 41.75rem;
    min-height: 20rem;

    h2 {
      color: black;
      font-size: 2.5rem;
      line-height: 3.125rem;
      font-family: "F37Hybrid-Bold";
      margin: 0;
      padding: 0;
    }
  }
}

.description {
  max-width: 42.5rem;
  line-height: 1.4375rem;
}

.info-footer {
  margin-top: 6.25rem;
  display: flex;
  gap: 4.625rem;
}

.sub-heading {
  max-width: 40rem;
  display: flex;
  flex-direction: column-reverse;
  margin-top: 8.125rem;
}

.sub-heading > h2 {
  font-size: 2.5rem;
  font-family: "F37Hybrid-Bold";
  line-height: 3.125rem;
}

.staff-content {
  max-width: 74rem;
  margin-inline: auto;
  margin-bottom: 6.25rem;
}

.staff-container {
  display: flex;
  flex-direction: column;
  margin-top: 3.125rem;
}

h3 {
  font-size: 1.875rem;
  font-family: "F37Hybrid-Bold";
}

.management-administration,
.programme,
.lecturers {
  display: flex;
  flex-wrap: wrap;
  margin-top: 3.125rem;
  gap: 1.25rem;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
