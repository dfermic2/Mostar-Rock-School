<template>
  <header>
    <Navbar />
    <div class="hero-container">
      <div class="hero-text">
        <h1>With a little help from our friends...</h1>
        <p>
          At the Mostar Rock School, we believe in the transformative power of
          music. Through our innovative programs and inclusive approach, we use
          music as a tool for community integration, reconciliation, and
          personal growth. We invite you to join us in making a difference
          through the universal language of music.
        </p>
      </div>
      <DonationForm />
    </div>
  </header>
  <div class="contribute-container">
    <div class="contribute-content">
      <div class="contribute-text">
        <h1>We'll make a better day, just you and me...</h1>
        <p class="font-w-600">
          Your support can create lasting change. With your donation, you
          contribute to:
        </p>
      </div>
      <Contributions :contributionTypes="contributionTypes" />
    </div>
  </div>
  <DonationTypes :donationTypes="donationTypes" />
  <div class="sponsors-container">
    <div class="sponsors-content">
      <div class="sponsors-text">
        <h1>Making this journey possible</h1>
        <p>
          People who made it possible throughout the years. A generous thanks to
          all of you for making our mission possible.
        </p>
        <NuxtLink to="/support/donors">
          <button>VIEW OUR SPONSORS</button>
        </NuxtLink>
      </div>
      <img src="../../public/assets/images/guy-pointing.png" alt="" />
    </div>
    <div class="sponsors-slider">
      <hr />
      <SponsorAutoSlider />
      <hr />
    </div>
  </div>
  <div class="bottom-container">
    <div class="bottom-content">
      <NewsletterHorizontal />
      <SpreadTheWord />
    </div>
  </div>
</template>

<script setup>
import { donationTypes, contributionTypes } from "~/data";
</script>

<style scoped>
header {
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(9, 9, 121, 0) 33%,
      rgba(7, 7, 97, 0) 67%,
      rgba(0, 0, 0, 1) 100%
    ),
    url(../../public/assets/images/hero-images/support.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  min-height: 53.125rem;
}

h1 {
  font-size: 2.5rem;
  line-height: 3.125rem;
  font-family: "F37Hybrid-Bold";
}

p {
  font-size: 0.9375rem;
  line-height: 1.56rem;
  max-width: 39.6rem;
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
  max-width: 42.7rem;
  color: white;

  h1 {
    font-size: 4.7rem;
    line-height: 5.3rem;
    margin: 0;
    padding-bottom: 2.3rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.4375rem;
    font-weight: 600;
    max-width: 40rem;
  }
}

.contribute-container {
  min-height: 50.7rem;
  align-content: center;
  padding-bottom: 1.5rem;
}
.contribute-text {
  margin-inline: auto;
  max-width: 73.75rem;
  padding-bottom: 1.5rem;
}

button {
  height: 2.82rem;
  width: 15.625rem;
  border-radius: 0.25rem;
  border: none;
  margin: 1rem 0 0 0;
  background: red;
  color: white;
  line-height: 1.56rem;
  letter-spacing: 0.02rem;
  font-weight: bold;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  cursor: pointer;
  background-color: #b00;
}

.font-w-600 {
  font-weight: 600;
}

.sponsors-container {
  background-color: #fafbfb;
  min-height: 45.625rem;
  padding: 6.25rem 0;
  box-sizing: border-box;
  align-content: center;
}

.sponsors-content {
  display: flex;
  flex-grow: 1;
  margin-inline: auto;
  max-width: 73.75rem;
  justify-content: space-between;
  padding-bottom: 3rem;

  img {
    max-width: 30rem;
    max-height: 17.5rem;
    object-fit: cover;
    border-radius: 0.3rem;
  }
}
.sponsors-slider {
  overflow: hidden;
}
hr {
  border: 1px solid rgba(255, 0, 0, 0.25);
  max-width: 73.75rem;
}

.bottom-content {
  display: flex;
  flex-direction: column;
  min-height: 54.7rem;
  max-width: 74rem;
  margin-inline: auto;
  padding: 4rem 0 4rem 0;
  justify-content: space-around;
  box-sizing: border-box;
}
</style>
