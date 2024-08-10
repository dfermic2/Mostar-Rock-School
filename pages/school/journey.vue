<script setup lang="ts"></script>

<template>
  <div>
    <header>
      <Navbar />
      <div class="hero">
        <div class="left">
          <div class="header-footer">
            <div class="info">
              <p @click="navigateTo('/school')">< The School</p>
              <h1>Our journey</h1>
              <p class="left-description">
                Since the first idea of starting a Rock School that brings young
                musicians together through education and performance in 1998,
                through its first generation when the idea first saw the light
                of day in 2012, up until the present day, the School has grown
                to become a leader in urban music education in BiH.
              </p>
            </div>
            <div class="info">
              <h2>
                Every journey starts with the first step. Or the first chord.
              </h2>
              <p class="right-description">
                In 1998, Apeiron, as part of the Pavarotti Music Center,
                initiated a rock school project in Mostar. Although short-lived,
                it sparked the concept of an urban, non-classical music culture
                at the center, offering rehearsal space to local bands. By the
                end of 2011, Orhan Maslo, in collaboration with Musicians
                without Borders and the Pavarotti Music Center, revived this
                idea, taking the first steps towards its realization.
              </p>
            </div>
          </div>
        </div>

        <div class="right">
          <div class="footer">
            <div class="support">
              <SupportCallCard />
            </div>
            <div class="illustrations">
              <img
                src="../../public/assets/images/journey/vinyl-small.png"
                alt="Small vinyl photo"
                title="Small vinyl"
              />
              <img
                src="../../public/assets/images/journey/vinyl-big.png"
                alt="Big vinyl photo"
                title="Big vinyl"
              />
            </div>
          </div>
        </div>
      </div>
    </header>

    <section class="timeline-container">
      <Timeline />
      <img
        class="scrollbar"
        src="../../public/assets/images/journey/scrollbar-track.png"
        alt=""
      />
    </section>

    <Donation />
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

header {
  max-width: 100vw;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(9, 9, 121, 0) 33%,
      rgba(7, 7, 97, 0) 67%,
      rgba(0, 0, 0, 1) 100%
    ),
    url('../../public/assets/images/journey/journey-header-cover-photo.png');
  background-size: cover;
  height: 67.8125rem;
  margin-bottom: 28.125rem;
}

.hero {
  display: flex;
  gap: 1.875rem;
  margin-top: 11.625rem;
  min-height: 60.375rem;
  max-width: 74rem;
  margin-inline: auto;
}

.left {
  max-width: 41.75rem;
  min-height: 60.375rem;
}

.header-footer {
  height: 60.375rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.info {
  max-width: 41.75rem;
  min-height: 22.25rem;
  color: #fff;
}

.info:last-child {
  color: #000;
  margin-top: 28.125rem;
}

.info > p:first-child {
  margin-bottom: 2.1875rem;
  cursor: pointer;
  font-size: 1.875rem;
  font-family: 'F37Hybrid-Bold';
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
  margin-bottom: 2.1875rem;
  font-size: 4.6875rem;
  font-family: 'F37Hybrid-Bold';
}

.left-description {
  line-height: 1.4375rem;
}

.info > h2 {
  font-size: 2.5rem;
  font-family: 'F37Hybrid-Bold';
  margin-bottom: 2.5rem;
}

.right {
  margin-top: 11.625rem;
  max-width: 30rem;
  min-height: 60.375rem;
  display: flex;
  flex-direction: column-reverse;
}

.footer {
  max-width: 30rem;
  min-height: 32.1875rem;
}

.support {
  max-width: 30rem;
  min-height: 19.8125rem;
}

.illustrations {
  max-width: 30rem;
  margin-top: 1.5625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4.375rem;
}

.timeline-container {
  position: relative;
  max-width: 74rem;
  margin-inline: auto;
}

.scrollbar {
  position: absolute;
  bottom: 0rem;
  z-index: -1;
}
</style>
