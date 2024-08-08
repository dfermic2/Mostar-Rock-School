<template>
  <div>
    <div class="container">
      <header>
        <Navbar />
        <div class="hero">
          <div class="info">
            <div class="about">
              <p @click="navigateTo(`/support`)">< Support</p>
              <h1>No man is an island…</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos omnis optio architecto laudantium eveniet.
                Voluptates, consequatur accusantium iusto omnis aperiam
                reprehenderit fugiat quasi neque! Id, corporis totam adipisci
                deleniti officia quos, nobis nostrum autem optio ad tenetur
                explicabo ea fuga!
              </p>
            </div>
            <div class="donations">
              <DonationForm />
            </div>
          </div>
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
import { basicSponsors, platinumSponsors } from '~/data'
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.container {
  max-width: 100vw;
}

header {
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(9, 9, 121, 0) 33%,
      rgba(7, 7, 97, 0) 67%,
      rgba(0, 0, 0, 1) 100%
    ),
    url('../../public/assets/images/support-donors/support-donors-header-cover-photo.png');
  background-size: cover;
}

.hero {
  margin-top: 12.1875rem;

  margin-bottom: 6.25rem;
  min-height: 53.125rem;
  max-width: 74rem;
  margin-inline: auto;
}

.info {
  height: 30.3125rem;
  display: flex;
  align-items: center;
  gap: 6.25rem;
  color: #fff;
}

.info > .about {
  max-width: 40.625rem;
  height: 19.875rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.about > p:first-child {
  cursor: pointer;
  margin-bottom: 1.5625rem;
  font-size: 1.875rem;
  font-family: 'F37Hybrid-Bold';
}

.about > p:first-child:hover {
  color: #ff0000;
  transition: 500ms;
}

.about > p:first-child:not(hover) {
  color: #fff;
  transition: 500ms;
}

.about > h1 {
  margin-bottom: 0.9375rem;
  font-size: 4.6875rem;
  font-family: 'F37Hybrid-Bold';
}

.about > p:last-child {
  font-size: 1rem;
  line-height: 1.4375rem;
}

.sponsors {
  max-width: 100vw;
  margin-bottom: 12.5rem;
}

.sponsors-content {
  max-width: 74rem;
  margin-inline: auto;
}

.sponsors-content > h1 {
  font-size: 1.875rem;
  font-family: 'F37Hybrid-Bold';
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
