<template>
  <div>
    <div class="container">
      <header>
        <Navbar />
        <div class="info-container">
          <div class="info-content">
            <div class="info">
              <NuxtLink class="back" :to="localePath('/school')">
                < {{ $t("school") }}
              </NuxtLink>
              <h1>{{ $t("people_hero_h") }}</h1>
              <p class="info-description">
                {{ $t("people_hero_p") }}
              </p>
            </div>
          </div>
        </div>

        <div class="bottom-hero">
          <div class="bottom-heading">
            <h1 class="heading-smaller">
              {{ $t("people_h") }}
            </h1>
          </div>
          <SupportCallCard />
        </div>
      </header>
      <Transition>
        <PeoplePopup v-if="route.query.id" />
      </Transition>
      <section class="staff-content p-inline">
        <p>{{ $t("people_p") }}</p>
        <section class="staff-container">
          <div id="management-administration">
            <h2>{{ $t("management_administration") }}</h2>
            <article class="management-administration">
              <div
                v-for="person in staff.managementAndAdministration"
                :key="person.id"
                class="member"
              >
                <NuxtLink
                  class="person-info"
                  :to="localePath(`/school/people/?id=${person.id}`)"
                >
                  <StaffCard :person="person" />
                </NuxtLink>
              </div>
            </article>
          </div>
          <div id="programme">
            <h2>{{ $t("programme") }}</h2>
            <article class="programme">
              <div
                v-for="person in staff.programme"
                :key="person.id"
                class="member"
              >
                <NuxtLink
                  class="person-info"
                  :to="localePath(`/school/people/?id=${person.id}`)"
                >
                  <StaffCard :person="person" />
                </NuxtLink>
              </div>
            </article>
          </div>
          <div id="lecturers">
            <h2>{{ $t("lecturers") }}</h2>
            <article class="lecturers">
              <div
                v-for="person in staff.lecturers"
                :key="person.id"
                class="member"
              >
                <NuxtLink
                  class="person-info"
                  :to="localePath(`/school/people/?id=${person.id}`)"
                >
                  <StaffCard :person="person" />
                </NuxtLink>
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

const localePath = useLocalePath();
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

.person-info {
  text-decoration: none;
  color: black;
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
  h1 {
    padding-bottom: 2.5rem;
    margin: 0;
  }

  .back {
    font-size: 1.875rem;
    font-family: "F37Hybrid-Bold";
    transition: 500ms;
    width: fit-content;
    text-decoration: none;
    color: white;
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

    h1 {
      color: black;
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

.member {
  margin-inline: auto;
}

@media (width < 600px) {
  .staff-content {
    h2,
    p {
      text-align: center;
    }
  }
}
</style>
