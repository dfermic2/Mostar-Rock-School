<template>
  <div>
    <header>
      <Navbar />
      <div class="heading-container p-inline">
        <div class="heading-content">
          <div class="heading">
            <h1>The School That Rocks</h1>
            <p>
              {{ $t("home_hero") }}
            </p>
            <NuxtLink :to="localePath('/school')">
              <button>
                <img src="../public/assets/images/note.png" />
                {{ $t("learn_about_school_btn") }}
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>
    <div class="vignette-wrapper">
      <div class="vignette"></div>
    </div>
    <div class="video-container">
      <video
        playsinline="playsinline"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source src="../public/assets/home-video.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="support-container p-inline">
      <div class="support-content">
        <div class="support-text">
          <h1>{{ $t("home_info_header") }}</h1>
          <p>
            {{ $t("home_info_left_p") }}
          </p>
        </div>
        <div class="support-card">
          <SupportCallCard />
        </div>
      </div>
    </div>
    <div class="programme-container p-inline">
      <div class="programme-content">
        <div class="programme-video">
          <iframe
            src="https://www.youtube.com/embed/pckqkg0EeWo?si=cdqFol9-Fa_upJ9t"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div class="programme-info">
          <p>
            {{ $t("home_info_right_p1") }}
          </p>
          <p>
            {{ $t("home_info_right_p2") }}
          </p>
          <NuxtLink :to="localePath('/programme/regular-programme')">
            <button>{{ $t("view_programme_btn") }}</button>
          </NuxtLink>
        </div>
      </div>
    </div>
    <Invite class="p-inline" />
    <div class="news-events-container p-inline">
      <div class="news-events-content">
        <h1>And I said: hey, what's going on?...</h1>
        <div class="news-events">
          <div class="news">
            <div class="news-events-heading pt-15">
              <h2>{{ $t("news") }}</h2>
              <NuxtLink :to="localePath('/news')">
                <button>{{ $t("view_all_btn") }}</button>
              </NuxtLink>
            </div>
            <HomeNewsCard />
            <BasicPaging class="pt-15" />
          </div>
          <div class="events">
            <div class="news-events-heading">
              <h2>{{ $t("events") }}</h2>
              <button>{{ $t("view_all_btn") }}</button>
            </div>
            <div class="events-list">
              <div v-for="event in events" :key="event.id">
                <EventCard :event="event" />
              </div>
            </div>
            <BasicPaging class="pt-15 pb-" />
          </div>
        </div>
      </div>
    </div>
    <Donation />
    <div class="sponsors">
      <div class="sponsors-heading p-inline">
        <h1>Making this journey possible</h1>
        <NuxtLink :to="localePath('/support/donors')">
          <button>{{ $t("view_sponsors_btn") }}</button>
        </NuxtLink>
      </div>
      <div class="sponsors-slider">
        <hr />
        <SponsorAutoSlider />
        <hr />
      </div>
    </div>
  </div>
</template>

<script setup>
import { events } from "~/data";
const localePath = useLocalePath();
</script>

<style scoped>
.heading-container {
  display: flex;
  min-height: 40rem;
}

.heading-content {
  display: flex;
  flex-grow: 1;
  align-items: center;
  max-width: 74rem;
  margin-inline: auto;
}

.heading {
  display: flex;
  flex-direction: column;
  min-height: 24.6875rem;
  justify-content: space-between;
  h1 {
    font-family: "F37Hybrid-Bold";
    font-size: 6.875rem;
    line-height: 6.875rem;
    max-width: 50.8rem;
    margin: 0;
  }

  p {
    max-width: 28.875rem;
  }

  img {
    width: 0.76rem;
    height: 1.25rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 2.82rem;
    width: 18.75rem;
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

  a {
    text-decoration: none;
  }
}

.support-container {
  display: flex;
  min-height: 24.7rem;
}

.support-content {
  display: flex;
  flex-wrap: wrap-reverse;
  flex-grow: 1;
  margin-inline: auto;
  max-width: 74rem;
  justify-content: space-between;
}

.support-card {
  margin-inline: auto;
}

.support-text {
  max-width: 40rem;
  display: flex;
  min-height: 24.7rem;
  flex-direction: column;
  justify-content: flex-end;

  p {
    font-weight: 600;
    padding-bottom: 1.5rem;
  }
}

.programme-container {
  display: flex;
  min-height: 33.75rem;
}

.programme-content {
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  max-width: 74rem;
  min-height: 23.75rem;
  margin-inline: auto;
  margin-bottom: 2.5rem;
  justify-content: space-between;
  align-items: center;

  p {
    max-width: 26.75rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 2.82rem;
    width: 17.5rem;
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

  a {
    text-decoration: none;
  }
}

iframe {
  border-radius: 0.3125rem;
  max-width: 100%;
  width: 680px;
  max-height: 100%;
  height: 380px;
}

.video-container,
.vignette-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  height: 53.125rem;
  width: 100%;
  overflow: hidden;
}

.video-container {
  z-index: -2;
  background-color: black;
}

.vignette-wrapper {
  z-index: -1;
}

.vignette {
  position: absolute;
  z-index: -1;
  top: 0;
  right: -16rem;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 1) 90%
  );
  height: 53.125rem;
  width: 100%;
}

video {
  position: relative;
  z-index: -2;
  right: -16rem;
  top: 0;
  height: 110%;
}

.sponsors {
  min-height: 30.625rem;
  padding: 2rem 0;
  box-sizing: border-box;
}

.sponsors-heading {
  display: flex;
  flex-wrap: wrap;
  max-width: 74rem;
  margin-inline: auto;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;

  button {
    border: 1px solid red;
    font-size: 0.875rem;
    font-weight: bold;
    letter-spacing: 0.02rem;
    background-color: white;
    color: red;
    width: 12.5rem;
    min-height: 1.875rem;
    border-radius: 3px;
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

.sponsors-slider {
  overflow: hidden;
}
hr {
  border: 1px solid rgba(255, 0, 0, 0.25);
  max-width: 73.75rem;
}

.news-events-container {
  min-height: 60rem;
  align-content: center;
}

.news-events-content {
  max-width: 74rem;
  margin-inline: auto;
}

.news-events {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  min-height: 41.125rem;
}

.news {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  max-width: 41.25rem;
}

.events {
  display: flex;
  flex-grow: 1;
  margin-inline: auto;
  flex-direction: column;
  max-width: 30rem;
}

.events-list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 34.375rem;
}

.news-events-heading {
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.5rem;

  button {
    border: 1px solid red;
    font-size: 0.875rem;
    font-weight: bold;
    letter-spacing: 0.02rem;
    background-color: white;
    color: red;
    min-width: 7.5rem;
    height: 1.875rem;
    border-radius: 3px;
    box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
  }

  button:hover {
    border: 1px solid #b00;
    background-color: #b00;
    color: white;
    cursor: pointer;
  }

  h1 {
    margin: 0;
  }
}

@media (width < 600px) {
  .heading {
    align-items: center;
    h1 {
      font-size: 4.375rem;
      line-height: 4.375rem;
      text-align: center;
    }

    button {
      width: 100%;
    }

    a {
      width: 100%;
      max-width: 19.375rem;
    }
  }

  .video-container video,
  .vignette {
    right: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .programme-content {
    align-items: center;

    button {
      width: 100%;
      max-width: 19.375rem;
      margin-inline: auto;
    }

    .programme-info {
      margin-inline: auto;
    }
  }

  .news-events-container {
    margin-top: 2rem;

    .news,
    .events {
      margin-bottom: 2rem;
    }
  }
}
</style>
