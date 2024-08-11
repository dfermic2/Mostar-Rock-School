<template>
  <div>
    <div class="container">
      <header>
        <Navbar />
        <div class="hero-container">
          <div class="hero-text">
            <p class="back" @click="navigateTo('/support')">< Support</p>
            <h1>No man is an island…</h1>
          </div>
          <DonationForm />
        </div>
      </header>

      <section class="sponsors">
        <div class="sponsors-content">
          <h1>Current Donors</h1>
          <div class="platinum-sponsors-container">
            <div v-for="platinum in platinumSponsors" :key="platinum.id">
              <PlatinumSponsorCard :sponsor="platinum" />
            </div>
          </div>
        </div>
      </section>

      <section class="donors-throughout-years">
        <div class="sponsors-content">
          <h1>Our supporters throughout the years</h1>
          <div class="basic-sponsors-container">
            <div v-for="basic in basicSponsors" :key="basic.id">
              <BasicSponsorCard :sponsor="basic" />
            </div>
          </div>
        </div>
      </section>

      <Donation />
    </div>
  </div>
</template>

<script setup>
import { basicSponsors, platinumSponsors } from "~/data";
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

header {
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(9, 9, 121, 0) 33%,
      rgba(7, 7, 97, 0) 67%,
      rgba(0, 0, 0, 1) 100%
    ),
    url("../../public/assets/images/support-donors/support-donors-header-cover-photo.png");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  min-height: 53.125rem;
}

.hero-container {
  display: flex;
  flex-grow: 1;
  max-width: 74rem;
  justify-content: space-between;
  align-items: center;
  margin-inline: auto;
}
.hero-text {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 45.7rem;
  color: white;

  h1 {
    font-size: 4.7rem;
    line-height: 5.3rem;
    padding: 2.3rem 0 2.3rem 0;
  }

  .back {
    font-size: 1.875rem;
    font-family: "F37Hybrid-Bold";
    transition: 500ms;
  }

  .back:hover {
    color: #ff0000;
    cursor: pointer;
  }
}

.container {
  max-width: 100vw;
}

.sponsors {
  max-width: 100vw;
  margin-bottom: 12.5rem;
  margin-top: 6.25rem;
}

.sponsors-content {
  max-width: 74rem;
  margin-inline: auto;
}

.sponsors-content > h1 {
  font-size: 1.875rem;
  font-family: "F37Hybrid-Bold";
}

.platinum-sponsors-container {
  display: flex;
  gap: 1.25rem;
  margin-top: 2.4375rem;
}

.donors-throughout-years {
  margin-bottom: 6.25rem;
}

.basic-sponsors-container {
  margin-top: 2.4375;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 1.25rem;
}
</style>
