<template>
  <div>
    <header>
      <Navbar />
      <div class="info-container">
        <div class="info-content">
          <div class="info">
            <p class="back" @click="navigateTo('/school')">< The School</p>
            <h1>Our journey</h1>
            <p class="info-description">
              Since the first idea of starting a Rock School that brings young
              musicians together through education and performance in 1998,
              through its first generation when the idea first saw the light of
              day in 2012, up until the present day, the School has grown to
              become a leader in urban music education in BiH.
            </p>
          </div>
        </div>
      </div>

      <div class="bottom-hero">
        <h2>Every journey starts with the first step. Or the first chord.</h2>
        <SupportCallCard />
      </div>
    </header>

    <div class="desc-vynil-container">
      <div class="desc-vynil-content">
        <p class="journey-description">
          In 1998, Apeiron, as part of the Pavarotti Music Center, initiated a
          rock school project in Mostar. Although short-lived, it sparked the
          concept of an urban, non-classical music culture at the center,
          offering rehearsal space to local bands. By the end of 2011, Orhan
          Maslo, in collaboration with Musicians without Borders and the
          Pavarotti Music Center, revived this idea, taking the first steps
          towards its realization.
        </p>
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
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(9, 9, 121, 0) 33%,
      rgba(7, 7, 97, 0) 67%,
      rgba(0, 0, 0, 1) 100%
    ),
    url("../../public/assets/images/journey/journey-header-cover-photo.png");
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
  max-width: 40.9rem;
  color: white;
  h1 {
    font-size: 4.6875rem;
    font-family: "F37Hybrid-Bold";
    line-height: 5.3rem;
    padding-bottom: 2.5rem;
  }

  .info-description {
    font-size: 1rem;
    line-height: 1.4375rem;
    font-weight: 600;
    padding: 1rem 0 1rem 0;
  }

  .back {
    font-size: 1.875rem;
    font-family: "F37Hybrid-Bold";
    transition: 500ms;
    padding: 1.875rem 0 1.875rem 0;
  }

  .back:hover {
    color: #ff0000;
    cursor: pointer;
  }
}

.bottom-hero {
  display: flex;
  max-width: 74rem;
  margin-inline: auto;
  align-items: flex-end;

  h2 {
    color: black;
    font-size: 2.5rem;
    line-height: 3.125rem;
    font-family: "F37Hybrid-Bold";
  }
}

.illustrations {
  max-width: 30rem;
  margin-top: 1.5625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4.375rem;
}

.desc-vynil-container {
  display: flex;
  max-width: 74rem;
  margin-inline: auto;
  padding: 1rem 0 1rem 0;
}

.desc-vynil-content {
  display: flex;
  flex-grow: 1;
  max-width: 66.875rem;
  justify-content: space-between;

  p {
    max-width: 40rem;
    font-size: 0.9375rem;
    line-height: 1.56rem;
    font-weight: 600;
  }
}

.timeline-container {
  position: relative;
  max-width: 74rem;
  margin-inline: auto;
}

.scrollbar {
  position: absolute;
  bottom: -0.0625rem;
  z-index: -1;
}
</style>
