<template>
  <div>
    <div class="container">
      <header>
        <Navbar />
        <div class="hero-container">
          <div class="info">
            <h1>{{ $t("regular_programme_hero_h") }}</h1>
            <p>
              {{ $t("regular_programme_hero_p") }}
            </p>
            <NuxtLink :to="localePath('/enroll')">
              <button type="button" class="btn-style btn-link">
                {{ $t("enroll_btn") }}
              </button>
            </NuxtLink>
            <NuxtLink :to="localePath('/programme/additional-programme')"
              ><button type="button" class="btn-style btn-link">
                {{ $t("additional_programme") }}
              </button>
            </NuxtLink>
          </div>
          <div class="img-wrapper">
            <img
              src="../../public/assets/images/programme/drums.png"
              alt="Drums photo"
              title="Drums photo"
            />
            <div class="ellipse"></div>
          </div>
        </div>
      </header>

      <section class="music-lessons-container p-inline">
        <h1>{{ $t("regular_programme_lessons_h") }}</h1>
        <section class="music-lessons">
          <div class="articles">
            <div class="article-text">
              <strong>
                <p>
                  {{ $t("regular_programme_lessons_p1") }}
                </p>
              </strong>
            </div>
            <div class="article-text">
              <p>
                {{ $t("regular_programme_lessons_p2") }}
              </p>
            </div>
            <NuxtLink :to="localePath('/enroll')">
              <button type="button" class="btn-style btn-link">
                {{ $t("ready_to_rock_btn") }}
              </button>
            </NuxtLink>
          </div>
          <CurriculumOffers :offers="offers" />
        </section>
      </section>

      <section class="band-img p-inline">
        <iframe
          src="https://www.youtube.com/embed/MiozKvQGIzg?si=zDeJTniWCfky3apI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </section>

      <section class="session-band-program-background p-inline">
        <section class="session-band-program">
          <h1>{{ $t("session_band_program") }}</h1>
          <div class="session-band-program-container">
            <div class="article-texts">
              <strong>
                <p>
                  {{ $t("session_band_p1") }}
                </p>
              </strong>
              <p>
                {{ $t("session_band_p2") }}
              </p>
              <p>
                {{ $t("session_band_p3") }}
              </p>
              <p>
                {{ $t("session_band_p4") }}
              </p>
              <NuxtLink :to="localePath('/enroll')">
                <button class="btn btn-style" type="button">
                  {{ $t("ready_to_rock_btn") }}
                </button>
              </NuxtLink>
            </div>
            <div class="session-band-photo-container">
              <img
                src="../../public/assets/images/programme/black-white-band-playing.png"
                alt=""
              />
            </div>
          </div>
        </section>
      </section>

      <section class="summer-school p-inline">
        <div class="summer-school-container">
          <div class="left-side">
            <img
              src="../../public/assets/images/programme/Summer School.jpg"
              alt=""
            />
          </div>

          <div class="right-side">
            <h1>{{ $t("summer_school_h") }}</h1>
            <p>
              {{ $t("summer_school_p1") }}
            </p>
            <p>
              {{ $t("summer_school_p2") }}
            </p>
            <NuxtLink :to="localePath('/contact')">
              <button class="btn btn-style btn-link">
                {{ $t("learn_more_btn") }}
              </button>
            </NuxtLink>
          </div>
        </div>
      </section>

      <section class="mors-production-container p-inline">
        <div class="mors-production">
          <div class="right-side">
            <h1>MoRS Production</h1>
            <p>
              {{ $t("mors_production_p") }}
            </p>
            <NuxtLink :to="localePath('/contact')">
              <button class="btn btn-style btn-link">
                {{ $t("learn_more_btn") }}
              </button>
            </NuxtLink>
          </div>
          <div class="photo-container">
            <iframe
              src="https://www.youtube.com/embed/OrQ-XlVpkLc?si=_ZT6OtORCXWtBxmR"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>

      <section class="mors-booking p-inline">
        <h1>MoRS Booking</h1>
        <p>
          {{ $t("mors_booking_p1") }}
        </p>
        <p>
          {{ $t("mors_booking_p2") }}
        </p>
        <p>
          {{ $t("mors_booking_p3") }}
        </p>
        <p>
          {{ $t("mors_booking_p4") }}
        </p>
        <NuxtLink :to="localePath('/contact')">
          <button class="btn btn-style btn-link">
            {{ $t("learn_more_btn") }}
          </button>
        </NuxtLink>
      </section>

      <section class="spread-the-word p-inline">
        <SpreadTheWord />
      </section>
    </div>
  </div>
</template>

<script setup>
import { offers } from "~/data";
const localePath = useLocalePath();
</script>

<style scoped>
* {
  margin: 0;
}

.container {
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
    url("../../public/assets/images/programme/programme-header-cover-photo.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom 6rem center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  min-height: 59.125rem;
}

.hero-container {
  display: flex;
  flex-wrap: wrap;
  max-width: 74rem;
  min-height: 35.9rem;
  margin-inline: auto;
}

.img-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

.img-wrapper img {
  max-width: 100%;
  width: 33.9rem;
  align-self: baseline;
}

.ellipse {
  position: absolute;
  z-index: -1;
  max-width: 100%;
  width: 42rem;
  height: 4rem;
  background: radial-gradient(
    ellipse,
    rgba(0, 0, 0, 0.728) 35%,
    rgba(255, 255, 255, 0) 60%
  );
}

.info {
  max-width: 39.3125rem;
  height: 41.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
}

.info > h1 {
  margin-top: -11.875rem;
  margin-bottom: 2.1875rem;
}

.info > p {
  margin-bottom: 2.5rem;
}

.btn-link {
  height: 2.8125rem;
  width: 17rem;
  margin-bottom: 1rem;
  font-weight: bold;
  transition: 500ms;
}

.btn-link:hover {
  background: #b00;
}

.drums-container {
  margin-left: 15.625rem;
  display: grid;
}

.drumms {
  display: flex;
  flex-direction: column-reverse;
}

.music-lessons-container {
  max-width: 74rem;
  margin-inline: auto;
  margin-bottom: 6.25rem;
}

.music-lessons {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 1.875rem;
  gap: 1.25rem;
}

.articles {
  max-width: 40.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.btn-style {
  color: #fff;
  border: none;
  outline: none;
  border-radius: 0.1875rem;
  background: #ff0000;
  color: #fff;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: bold;
  cursor: pointer;
}

.btn {
  width: fit-content;
  height: 2.8125rem;
  margin-top: 0.625rem;
  padding: 0.875rem 2.71875rem 0.8125rem 2.78125rem;
  transition: 500ms;
}

.btn:hover {
  background: #b00;
}

.band-img {
  max-width: 74rem;
  margin-inline: auto;
  margin-bottom: -21.875rem;

  iframe {
    max-width: 100%;
    width: 1180px;
    max-height: 100%;
    height: 640px;
  }
}

iframe {
  border-radius: 5px;
}

.session-band-program-background {
  max-width: 100vw;
  margin-bottom: 6.25rem;
  background: #000;
}

.session-band-program {
  padding-top: 28.125rem;
  padding-bottom: 6.25rem;
  color: #fff;
  max-width: 74rem;
  margin-inline: auto;

  img {
    max-width: 100%;
    width: 27.5rem;
  }
}

.session-band-program-container {
  margin-top: 1.875rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
}

.article-texts {
  display: flex;
  flex-direction: column;
  max-width: 40.5rem;
  gap: 1.25rem;
}

.article-texts > p {
  max-width: 42.5rem;
  text-align: justify;
}

.spread-the-word,
.mors-booking {
  max-width: 74rem;
  margin-inline: auto;
  margin-bottom: 6.25rem;
}

.mors-booking {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  h1 {
    margin-bottom: 1.875rem;
  }
}

.mors-production-container {
  max-width: 74rem;
  margin-inline: auto;
  margin-bottom: 6.25rem;
}

.mors-production {
  margin-top: 0.875rem;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
}

.summer-school {
  max-width: 74rem;
  margin-inline: auto;
  margin-bottom: 6.25rem;
}

.summer-school-container {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
  align-items: center;
  gap: 2rem;
}

.photo-container {
  display: flex;
  flex-direction: column;
  justify-content: center;

  iframe {
    max-width: 100%;
    width: 440px;
    max-height: 100%;
    height: 250px;
    box-shadow: 7px 15px 48px 17px rgba(0, 0, 0, 0.2);
  }
}

iframe {
  border-radius: 5px;
}

.btn-style {
  color: #fff;
  border: none;
  outline: none;
  border-radius: 0.1875rem;
  background: #ff0000;
  color: #fff;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: bold;
  cursor: pointer;
}

.right-side {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 42.5rem;
}

.right-side p {
  text-align: justify;
}

.btn {
  width: fit-content;
  height: 2.8125rem;
  margin-top: 0.625rem;
  padding: 0.875rem 2.71875rem 0.8125rem 2.78125rem;
  transition: 500ms;
}

.left-side img {
  max-width: 100%;
  width: 27.5rem;
}

.btn:hover {
  background: #b00;
}
</style>
