<template>
  <div>
    <header>
      <Navbar />
      <div class="grid">
        <div class="text">
          <h1>We believe in <br />the transformative power of music</h1>
          <p>
            In August 2012 eight girls and eight boys from different sides of
            Mostar city joined a music camp in Skopje, North Macedonia.
            Alongside 40 young people from Kosovska Mitrovica, they created a
            diverse and harmonious community, free from political divisions.
            Guided by teachers and coaches from various countries, they formed
            four music bands, igniting the spirit of the Mostar Rock School
            adventure.
          </p>
          <button>VIEW OUR JOURNEY</button>
        </div>
        <div class="image">
          <img src="../../public/assets/images/black-guitar.png" alt="guitar" />
        </div>
      </div>
    </header>
    <div class="our-mission">
      <div class="our-mission-content">
        <img src="../../public/assets/images/staff/omar.png" />
        <div class="our-mission-text">
          <h1>Our mission</h1>
          <p>
            Our mission is to use music as a powerful tool for community
            integration, reconciliation, and personal growth.
          </p>
          <p class="font-weight-600">
            We aim to provide a nurturing environment where individuals can
            explore their musical passions, develop their talents, and build
            lasting connections across cultural and social boundaries. Through
            education, collaboration, and performance, we strive to create a
            harmonious and inclusive society.
          </p>
          <NuxtLink to="/school/people">
            <button>MEET OUR PEOPLE</button>
          </NuxtLink>
        </div>
      </div>
    </div>
    <Statistics />
    <div class="media-coverage">
      <div class="media-coverage-content">
        <div class="media-coverage-heading">
          <h1>Media coverage</h1>
          <button>VIEW ALL</button>
        </div>
        <div class="media-coverage-text">
          <p>
            The impact of the Mostar Rock School has not gone unnoticed.
            Renowned media outlets such as NRK, Al Jazeera, and the BBC have
            recognized the significance of our work, sharing our inspiring story
            with the world. Through their coverage, our message of unity,
            reconciliation, and the power of music has reached audiences far and
            wide.
          </p>
          <img src="../../public/assets/images/vinyl.png" alt="vinyl" />
        </div>
        <div class="media-coverage-cards">
          <MediaCoverageCard :media-coverage="mediaCoverageList[0]" />
          <MediaCoverageCard :media-coverage="mediaCoverageList[1]" />
        </div>
        <BasicPaging />
      </div>
    </div>
  </div>
</template>

<script setup>
import theGuardian from "../../public/assets/images/The-Guardian.png";
import alJazeera from "../../public/assets/images/Al-Jazeera.png";
import BasicPaging from "~/components/BasicPaging.vue";

const mediaCoverageList = [
  {
    id: 1,
    date: "16 March 2018",
    content: `Come together: music is rebuilding bridges in divided Balkans`,
    img: theGuardian,
    imgName: "The Guardian",
  },
  {
    id: 2,
    date: "30 July 2024",
    content: `Development in progress. School is amazing`,
    img: alJazeera,
    imgName: "Al-Jazeera",
  },
];
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
    url(../../public/assets/images/hero-images/school-index.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom 5rem center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  min-height: 58.125rem;
}

.image {
  grid-column: 5 / span 6;
  align-self: self-end;
  max-width: fit-content;
  overflow: hidden;
}

.grid img {
  max-width: 52.1rem;
  height: auto;
  object-fit: contain;
  transform: rotate(333deg);
  filter: drop-shadow(0.8rem 2.3rem 0.6rem rgba(0, 0, 0, 0.25));
}

.grid {
  display: grid;
  margin-top: auto;
  grid-template-columns: repeat(auto-fit, minmax(4.93rem, 1fr));
  max-width: 74rem;
  min-height: 40rem;
  margin-inline: auto;
  color: white;
}

.text,
.image {
  grid-row: 1 / 2;
}

.text {
  display: flex;
  max-width: 43rem;
  flex-direction: column;
  grid-column: 1 / span 9;
  box-sizing: border-box;
}

.text h1 {
  font-family: "F37Hybrid-Bold";
  font-size: 4.7rem;
  line-height: 5.3rem;
  margin: 0;
  padding-bottom: 2.3rem;
}

.grid p {
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.44rem;
  margin: 0;
  padding-bottom: 2.5rem;
}

.text button {
  width: 13.75rem;
}

button {
  height: 2.82rem;
  border-radius: 0.25rem;
  border: none;
  margin: 0;
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

.our-mission {
  display: flex;
  flex-grow: 1;
  min-height: 29rem;
  padding-top: 1.25rem;
  box-sizing: border-box;
}

.our-mission-content {
  display: flex;
  max-width: 61.25rem;
  flex-grow: 1;
  margin-inline: auto;
  justify-content: space-between;

  img {
    max-width: 15rem;
    max-height: 20rem;
  }

  h1 {
    font-family: "F37Hybrid-Bold";
    font-size: 2.5rem;
  }

  p {
    font-size: 0.9375rem;
    line-height: 1.56rem;
    max-width: 39.6rem;
  }

  button {
    width: 15.875rem;
  }
}

.our-mission-text {
  min-height: 20.3rem;
}

.font-weight-600 {
  font-weight: 600;
}

.media-coverage {
  min-height: 44.7rem;
  align-content: center;
}

.media-coverage-content {
  max-width: 74rem;
  min-height: 32.2rem;
  margin-inline: auto;

  h1 {
    font-family: "F37Hybrid-Bold";
    font-size: 2.5rem;
  }

  p {
    font-size: 0.9375rem;
    line-height: 1.56rem;
    max-width: 48.75rem;
    font-weight: 600;
  }
}

.media-coverage-text {
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  max-width: 63.8rem;

  img {
    max-width: 6.25rem;
    max-height: 5.3rem;
  }
}

.media-coverage-heading {
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;

  button {
    border: 1px solid red;
    background-color: white;
    color: red;
    width: 7.5rem;
    height: 1.875rem;
    box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
  }

  button:hover {
    border: 1px solid #b00;
    background-color: #b00;
    color: white;
    cursor: pointer;
  }
}

.media-coverage-cards {
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2.5rem 0 1.875rem 0;
}
</style>
