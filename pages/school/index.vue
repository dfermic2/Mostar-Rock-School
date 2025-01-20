<template>
  <div>
    <header>
      <Navbar />
      <div class="grid">
        <div class="text">
          <h1>{{ $t("school_hero_h") }}</h1>
          <p>
            {{ $t("school_hero_p") }}
          </p>
          <NuxtLink :to="localePath('/school/journey')">
            <button>{{ $t("view_journey_btn") }}</button>
          </NuxtLink>
        </div>
        <div class="image">
          <img
            src="../../public/assets/images/guitar-rotated.png"
            alt="guitar"
          />
        </div>
      </div>
    </header>
    <div class="our-mission p-inline">
      <div class="our-mission-content">
        <img src="../../public/assets/images/staff/omar.png" />
        <div class="our-mission-text">
          <h1>{{ $t("school_mission_h") }}</h1>
          <p>
            {{ $t("school_mission_p1") }}
          </p>
          <p class="font-weight-600">
            {{ $t("school_mission_p2") }}
          </p>
          <div class="our-mission-btn">
            <NuxtLink :to="localePath('/school/people')">
              <button>{{ $t("meet_people_btn") }}</button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <Statistics />
    <div class="media-coverage p-inline">
      <div class="media-coverage-content">
        <div class="media-coverage-heading">
          <h1>{{ $t("school_media_h") }}</h1>
        </div>
        <div class="media-coverage-text">
          <p>
            {{ $t("school_media_p") }}
          </p>
          <img src="../../public/assets/images/vinyl.png" alt="vinyl" />
        </div>
        <div class="media-coverage-cards">
          <MediaCoverageCard :media-coverage="mediaCoverageList[0]" />
          <MediaCoverageCard :media-coverage="mediaCoverageList[1]" />
        </div>
      </div>
    </div>
    <Donation />
  </div>
</template>

<script setup>
import theGuardian from "../../public/assets/images/The-Guardian.png";
import alJazeera from "../../public/assets/images/Al-Jazeera.png";

const localePath = useLocalePath();

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
    url("../../public/assets/images/hero-images/school-index.png");
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
  grid-column: 9 / span 7;
  align-self: self-end;
  max-width: fit-content;
  overflow: visible;
}

.grid img {
  max-width: 100%;
  width: 33.9rem;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0.8rem 2.3rem 0.6rem rgba(0, 0, 0, 0.25));
}

.grid {
  display: grid;
  margin-top: auto;
  grid-template-columns: repeat(15, 1fr);
  max-width: 74rem;
  min-height: 40rem;
  margin-inline: auto;
}

.text,
.image {
  grid-row: 1 / 2;
}

.text {
  display: flex;
  flex-direction: column;
  grid-column: 1 / span 9;
  box-sizing: border-box;
}

.text h1 {
  margin: 0;
  padding-bottom: 2.3rem;
}

.grid p {
  max-width: 43rem;
  margin: 0;
  padding-bottom: 2.5rem;
}

.text button {
  width: fit-content;
  padding-inline: 2rem;
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
  min-height: 29rem;
  padding-top: 1.25rem;
  box-sizing: border-box;
}

.our-mission-content {
  display: flex;
  max-width: 61.25rem;
  flex-grow: 1;
  flex-wrap: wrap-reverse;
  margin-inline: auto;
  justify-content: space-between;
  padding-bottom: 2rem;

  img {
    max-width: 15rem;
    max-height: 20rem;
  }

  p {
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

  p {
    max-width: 48.75rem;
    font-weight: 600;
  }
}

.media-coverage-text {
  display: flex;
  flex-wrap: wrap;
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

@media (width < 1100px) {
  .text {
    grid-row: 1 / 2;
    grid-column: 2 / span 13;
  }
  .image {
    grid-row: 2 / 2;
    grid-column: 2 / span 13;
  }
}

@media (width < 600px) {
  .our-mission-content {
    justify-content: center;

    .our-mission-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      .our-mission-btn {
        display: block;
        width: 100%;
        max-width: 19.375rem;
      }

      button {
        width: 100%;
        margin: 2rem 0;
      }
    }
  }
}

@media (width < 360px) {
  header h1 {
    font-size: 2.4rem;
  }
}
</style>
