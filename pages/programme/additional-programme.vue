<template>
  <div>
    <header>
      <Navbar />
      <div class="hero-container">
        <div class="info">
          <h1>
            {{ $t("additional_programme_hero_h") }}
          </h1>
          <p>
            {{ $t("additional_programme_hero_p") }}
          </p>
          <NuxtLink :to="localePath('/contact')">
            <button class="btn btn-style btn-link">
              {{ $t("learn_more_btn") }}
            </button>
          </NuxtLink>
          <NuxtLink :to="localePath('/programme/regular-programme')"
            ><button type="button" class="btn-style btn-add-programme">
              {{ $t("regular_programme") }}
            </button></NuxtLink
          >
        </div>
      </div>
    </header>
    <section class="video-text-container p-inline">
      <div class="video-text">
        <div class="right-side">
          <h1>{{ $t("music_camps_h") }}</h1>
          <strong>
            <p>
              {{ $t("music_camps_p1") }}
            </p>
          </strong>
          <p>
            {{ $t("music_camps_p2") }}
          </p>
          <NuxtLink :to="localePath('/contact')">
            <button class="btn btn-style btn-link">
              {{ $t("learn_more_btn") }}
            </button>
          </NuxtLink>
        </div>
        <div class="photo-container">
          <iframe
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

    <section class="photo-text-container p-inline">
      <div class="photo-text">
        <div class="left-side">
          <img
            src="../../public/assets/images/programme/guy-with-guitar.png"
            alt=""
          />
        </div>

        <div class="right-side">
          <h1>{{ $t("events_festivals_h") }}</h1>
          <p>
            {{ $t("events_festivals_p1") }}
          </p>
          <p>
            {{ $t("events_festivals_p2") }}
          </p>
          <NuxtLink :to="localePath('/contact')">
            <button class="btn btn-style btn-link">
              {{ $t("learn_more_btn") }}
            </button>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="mobile-rock-school p-inline">
      <h1>{{ $t("mobile_rock_school_h") }}</h1>
      <p>
        {{ $t("mobile_rock_school_p1") }}
      </p>
      <p>
        {{ $t("mobile_rock_school_p2") }}
      </p>
      <p>
        {{ $t("mobile_rock_school_p3") }}
      </p>
      <p>
        {{ $t("mobile_rock_school_p4") }}
      </p>
      <p>
        {{ $t("mobile_rock_school_p5") }}
      </p>
      <NuxtLink :to="localePath('/contact')">
        <button class="btn btn-style btn-link">
          {{ $t("learn_more_btn") }}
        </button>
      </NuxtLink>
    </section>

    <section class="video-text-container p-inline">
      <div class="video-text">
        <div class="right-side">
          <h1>Liron</h1>
          <p>
            {{ $t("liron_p") }}
          </p>
          <NuxtLink :to="localePath('/contact')">
            <button class="btn btn-style btn-link">
              {{ $t("learn_more_btn") }}
            </button>
          </NuxtLink>
        </div>
        <div class="photo-container">
          <iframe
            src="https://www.youtube.com/embed/goD-RNvomuM?si=Jgv1mSS6FuIxwyWs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>

    <section class="video-text-container p-inline">
      <div class="video-text reverse">
        <div class="right-side">
          <h1>DK Studio</h1>
          <p>
            {{ $t("dk_p1") }}
          </p>
          <p>
            {{ $t("dk_p2") }}
          </p>
          <NuxtLink :to="localePath('/contact')">
            <button class="btn btn-style btn-link">
              {{ $t("learn_more_btn") }}
            </button>
          </NuxtLink>
        </div>
        <div class="photo-container">
          <iframe
            src="https://www.youtube.com/embed/0VqG9sTJkg8?si=FVrxcfUJQ-5W00Du"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>

    <section class="spread-the-word p-inline">
      <SpreadTheWord />
    </section>
  </div>
</template>

<script setup>
const localePath = useLocalePath();
</script>

<style scoped>
* {
  margin: 0;
}

header {
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgb(0 0 0 / 60%) 33%,
      rgb(0 0 0 / 60%) 67%,
      rgba(0, 0, 0, 1) 100%
    ),
    url("../../public/assets/images/hero-images/additional-programme.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  min-height: 53.125rem;
  margin-bottom: 6rem;
}

.info {
  max-width: 43.3125rem;
  height: 43.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
}

.info > h1 {
  margin-bottom: 2.1875rem;
}

.info > p {
  margin-bottom: 2.5rem;
}

.info > button,
.btn-add-programme {
  height: 2.8125rem;
  font-weight: bold;
  transition: 500ms;
}

.info > button {
  margin-bottom: 1rem;
  width: 17rem;
}

.btn-add-programme {
  width: 17rem;
}

.info > button:hover,
.btn-add-programme:hover {
  background: #b00;
}

.hero-container {
  display: flex;
  flex-wrap: wrap;
  width: 74rem;
  max-width: 100%;
  min-height: 35.9rem;
  margin-inline: auto;
}

.video-text-container {
  max-width: 74rem;
  margin-inline: auto;
  margin-bottom: 6.25rem;
}

.video-text {
  margin-top: 1.875rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
}

.photo-text-container {
  max-width: 74rem;
  margin-inline: auto;
  margin-bottom: 6.25rem;
}

.photo-text {
  display: flex;
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

.mobile-rock-school {
  display: flex;
  flex-direction: column;
  max-width: 74rem;
  margin-inline: auto;
  margin-bottom: 6.25rem;
  gap: 1.25rem;

  h1 {
    margin-bottom: 1.875rem;
  }
}

.spread-the-word {
  max-width: 74rem;
  margin-inline: auto;
  margin-bottom: 6.25rem;
}

.reverse {
  flex-direction: row-reverse;
}
</style>
