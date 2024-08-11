<script setup lang="ts">
import { offers } from "~/data";
</script>

<template>
  <div>
    <div class="container">
      <header>
        <Navbar />
        <div class="hero-container">
          <div class="info">
            <h1>School programme</h1>
            <p>
              Mostar Rock School offers a comprehensive programme that
              encompasses everything young musicians might need when starting
              their musical journey. From educational activities in both
              individual and group formats, to production of events, creative
              development, studio recordings, publishing and booking.
            </p>
            <button type="button" class="btn-style">Enroll now</button>
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

      <section class="music-lessons-container">
        <h2>Music Lessons</h2>
        <section class="music-lessons">
          <div class="articles">
            <div class="article-text">
              <strong>
                <p>
                  The heart of Rock School Mostar is an educational/teaching
                  program that has been held cyclically since 2012 from the
                  beginning of September to the beginning of June and which in
                  recent years has been attended by between 200 and 250
                  participants per year. The students of Rock School Mostar come
                  from 10 countries around the world.
                </p>
              </strong>
            </div>
            <div class="article-text">
              <p>
                In addition to instruments/departments, the teaching program is
                also divided into individual and group teaching, where each
                lecturer creates an author's curriculum and program for both
                types of teaching adapted to each student and group. Classes are
                based on improving technical playing, rhythmicity,
                harmonization, music theory, and the first steps of pairing
                different instruments/vocals, which is a prerequisite for
                playing in a band or orchestra. The eight rooms of the Rock
                School Mostar are fully equipped with all the necessary means
                for musical education and creative work. Instruments,
                loudspeaker, computer, Smart TV. Some of the rooms are specified
                only for certain classes, e.g. lessons for vocals, guitar,
                keyboards... Rock school Mostar implements over 8900 hours of
                teaching program and over 3000 hours of independent and group
                exercises during one school year.
              </p>
            </div>
            <button class="btn btn-style">Ready to rock with us?</button>
          </div>
          <CurriculumOffers :offers="offers" />
        </section>
      </section>

      <section class="band-img">
        <iframe
          width="1180"
          height="650"
          src="https://www.youtube.com/embed/MiozKvQGIzg?si=zDeJTniWCfky3apI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </section>

      <section class="session-band-program-background">
        <section class="session-band-program">
          <h2>Session Band Program</h2>
          <div class="session-band-program-container">
            <div class="article-texts">
              <strong>
                <p>
                  During the school year, Rock School Mostar forms over 70 band
                  formations with over 150 participants gets the opportunity to
                  be a member of the band and through cooperation and creativity
                  build character, knowledge and experience. These bands are
                  what we call "classes" in classical education.
                </p>
              </strong>
              <p>
                What makes this program unique is the mixing of band members
                through 5 cycles a year, where each the formation has 40 days to
                meet, exchange knowledge and experience, research a certain
                musical decade or genre, and creating at least one author's
                work. The crown of every cycle of the Session band program is a
                public concert, which is organised 5 times a year in cooperation
                with partner organisations / institutions in Mostar. At every
                program concert, which is free for visitors, 10-15 band
                formations are presented.
              </p>
              <p>Attendance at program concerts is 1800+ visitors per year.</p>
              <p>
                The bands that have the most interesting musical creations,
                according to the lecturer's evaluations, record their works
                studio, and therefore go through education in the field of audio
                production. The recordings become an eternal bond between these
                young people, while social networks and local radio stations
                provide opportunities for songs reach a wider audience. During
                one school year, more than 1000 hours of sessions of the program
                are held.
              </p>
              <button class="btn btn-style" type="button">
                Ready to rock with us?
              </button>
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

      <section class="music-camps-container">
        <h2>Music Camps</h2>
        <div class="music-camps">
          <div>
            <strong>
              <p>
                Rock School Mostar has so far taken part in exchanges and music
                camps in Macedonia, Croatia, Slovenia, France, Germany, Serbia,
                Austria.
              </p>
            </strong>
            <p>
              The school also implemented two music camps in its own
              organization. The first camp was held in the Roma settlement of
              Kiseljak near Tuzla in 2015 for 60 participants from 4 BH cities,
              and the second in the Olympic Hotel Bistrica in Jahorina in 2016
              for 70 participants from 18 BH cities.
            </p>
            <button class="btn btn-style" type="button">
              Get in touch to learn more
            </button>
          </div>
          <div class="photo-container">
            <iframe
              width="440"
              height="250"
              src="https://www.youtube.com/embed/kPVx7CINnOU?si=CeVJA14qeJQjO9eb"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>

      <section class="event-festival">
        <div class="event-container">
          <div class="left-side">
            <img
              src="../../public/assets/images/programme/guy-with-guitar.png"
              alt=""
            />
          </div>

          <div class="right-side">
            <h2>Events and festivals</h2>
            <p>
              Depending on the situation or need, the production department also
              functions as an organizer, promoter, technical producer,
              coordinator, and/or executive producer.
            </p>
            <p>
              MoRS started and so far realized two editions of the festival Open
              City Mostar, four editions of Old Town Street Fest festival that
              takes place as part of the Red Bull Cliff Diving acrobatic world
              competition jumps from Stari Most in Mostar, two editions of the
              Winterville Festival, the Dubioze Kolektiv Concert at SC
              Kantarevac stadium. MoRS also organizes a concert every year for
              World Music Day on June 21, when he proudly presents the young
              talents of his program and invites a regional guest.
            </p>
            <button class="btn btn-style">Get in touch to learn more</button>
          </div>
        </div>
      </section>

      <section class="spread-the-word">
        <SpreadTheWord />
      </section>
    </div>
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
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
  max-width: 74rem;
  min-height: 35.9rem;
  margin-inline: auto;
}

.img-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 35.9rem;
  align-items: center;
}

.img-wrapper img {
  max-width: 33.9rem;
  align-self: baseline;
}

.ellipse {
  position: absolute;
  z-index: -1;
  width: 42rem;
  height: 4rem;
  background: radial-gradient(
    ellipse,
    rgba(0, 0, 0, 0.728) 35%,
    rgba(255, 255, 255, 0) 60%
  );
}

.info {
  max-width: 48.3125rem;
  height: 41.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
}

.info > h1 {
  font-size: 4.6875rem;
  line-height: 5.3125rem;
  font-family: "F37Hybrid-Bold";
  margin-top: -11.875rem;
  margin-bottom: 2.1875rem;
}

.info > p {
  font-size: 1rem;
  line-height: 1.4375rem;
  margin-bottom: 2.5rem;
}

.info > button {
  width: 13.75rem;
  height: 2.8125rem;
  padding: 0.875rem 3.84375rem 0.8125rem 3.90625rem;
  font-weight: bold;
}

.info > button:hover {
  background: #b00;
  transition: 500ms;
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

h2 {
  font-size: 2.5rem;
  font-family: "F37Hybrid-Bold";
}

.music-lessons {
  display: flex;
  margin-top: 1.875rem;
  gap: 3.75rem;
}

.articles {
  max-width: 42.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.article-text {
  text-align: justify;
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
  font-weight: 500;
  cursor: pointer;
}

.btn {
  width: fit-content;
  height: 2.8125rem;
  margin-top: 0.625rem;
  padding: 0.875rem 2.71875rem 0.8125rem 2.78125rem;
}

.btn:hover {
  background: #b00;
  transition: 500ms;
}

.band-img {
  max-width: 74rem;
  margin-inline: auto;
  margin-bottom: -21.875rem;
}
.photo-container {
  iframe {
    box-shadow: 7px 15px 48px 17px rgba(0, 0, 0, 0.2);
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
}

.session-band-program-container {
  margin-top: 1.875rem;
  display: flex;
  gap: 3.75rem;
}

.article-texts {
  font-family: "Inter";
  font-size: 0.9375rem;
  line-height: 1.5625rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.article-texts > p {
  max-width: 42.5rem;
  text-align: justify;
}

.music-camps-container {
  max-width: 74rem;
  margin-inline: auto;
  margin-bottom: 6.25rem;
}

.music-camps {
  margin-top: 1.875rem;
  display: flex;
  gap: 3.75rem;
}

.music-camps div:first-child {
  color: #000;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 42.5rem;
  margin-top: 1.875rem;
}

.event-festival {
  max-width: 74rem;
  margin-inline: auto;
  margin-bottom: 6.25rem;
}

.event-container {
  display: flex;
  align-items: center;
  gap: 3.75rem;
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

.spread-the-word {
  max-width: 74rem;
  margin-inline: auto;
  margin-bottom: 6.25rem;
}
</style>
