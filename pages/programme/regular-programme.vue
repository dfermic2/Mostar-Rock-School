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
            <h1>Regular School programme</h1>
            <p>
              Mostar Rock School Regular Programme offers a comprehensive
              curriculum that encompasses everything young musicians might need
              when starting their musical journey. From educational activities
              in both individual and group formats, to production, creative
              development, studio recordings, publishing and booking.
            </p>
            <NuxtLink to="/enroll">
              <button type="button" class="btn-style btn-link">
                Enroll now
              </button>
            </NuxtLink>
            <NuxtLink to="/programme/additional-programme"
              ><button type="button" class="btn-style btn-link">
                Additional Programme
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
        <h1>Music Lessons</h1>
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
            <NuxtLink to="/enroll">
              <button type="button" class="btn-style btn-link">
                Ready to rock with us?
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
          <h1>Session Band Program</h1>
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

      <section class="summer-school p-inline">
        <div class="summer-school-container">
          <div class="left-side">
            <img
              src="../../public/assets/images/programme/Summer School.jpg"
              alt=""
            />
          </div>

          <div class="right-side">
            <h1>Summer School</h1>
            <p>
              Ljetna škola je eksperimentalni obrazovni program koji traje u
              ljetnom periodu, tačnije kroz 6 i 7 mjesec. U programu Ljetne
              škole se nude grupne radionice, master class program na određene
              teme ili za određene isntrumente. U suradnji sa drugim festivalima
              npr. Mostar Blues & Rock Festivalom se organizuju radionice sa
              poznatim svjetskim ličnostima. Program Ljetne škole redovno pohađa
              oko 70 polaznika dok su master class radionice i prezentacije
              otvorene za javnost.
            </p>
            <p>
              Ljetna škola organizuje 150+ radionica u toku 2 mjeseca i završni
              koncert na kojem se prezentira rad na radionicama.
            </p>
            <NuxtLink to="/contact">
              <button class="btn btn-style btn-link">
                Get in touch to learn more
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
              Ciljevi MoRS produkcije su da uveže sve rezultate Škole i kreira
              tržište za mlade talente. Prepoznaje potencijal talenta/proizvoda,
              osmišljava pakovanje istog u vidu audio/video snimka, nalazi način
              da realizuje potrebe kako bi proizvod mogao da se uveže sa realnim
              sektorom poslovanja u muzičkoj industriji (klubovi, festivali,
              specifični eventi, ostvarivanje autorskih i izvođačkih prava,
              itd.)
            </p>
            <NuxtLink to="/contact">
              <button class="btn btn-style btn-link">
                Get in touch to learn more
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
          MoRS booking je nastao kao prirodna potreba da mladi talenti naprave
          sljedeće korake u muzičkoj industriji kako bi dobili priliku za
          amaterski i profesionalni angažman na muzičkoj domaćoj, regionalnoj
          ili svjetskoj sceni.
        </p>
        <p>
          Ovisno o mogućnosti finansiranja, Booking odjel organizira turneje,
          spaja mlade muzičare/bendove sa klubovima, festivalima, specifičnim
          eventima. Kroz proces organizacije mladi ljudi uče o organizaciji
          koncerata, o poslovima promocije, tehničke organizacije, interesima
          raznih strana u samoj organizaciji, dok se na terenu suočavaju i sa
          organizacijom putovanja, tonskih proba, medijskim kampanjama i drugim
          potrebama vezanim za turneju. Praktično, sučeljavaju se sa svim
          neophodnim potezima koji se trebaju desiti kako bi turneja bila
          uspješna, a čega publika nije niti svjesna.
        </p>
        <p>
          Booking department posjeduje regionalnu kontakt bazu promotora i
          organizatora. Booking također prezentira mlade bendove iz regiona u
          regionu.
        </p>
        <p>
          Booking odjel je od 2017. godine do danas organizovao preko 450
          događaja.
        </p>
        <NuxtLink to="/contact">
          <button class="btn btn-style btn-link">
            Get in touch to learn more
          </button>
        </NuxtLink>
      </section>

      <section class="spread-the-word p-inline">
        <SpreadTheWord />
      </section>
    </div>
  </div>
</template>
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
