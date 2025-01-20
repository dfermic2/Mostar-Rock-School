<template>
  <div>
    <div class="container">
      <header>
        <Navbar />
        <div class="hero-container">
          <div class="info">
            <h1>{{ $t("news_hero_h") }}</h1>
            <p>
              {{ $t("news_hero_p") }}
            </p>
          </div>
          <div class="img-wrapper">
            <img
              src="../../public/assets/images/news-images/speakers.png"
              alt="Speakers photo"
              title="Speakers photo"
            />
          </div>
        </div>
      </header>

      <div class="news-container p-inline">
        <NewsCardList :articles="news" :categories="categories" />
        <div class="news-paging">
          <NewsPaging />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { news } from "~/data";
let categories = [...new Set(news.map((c) => c.category))];
categories.splice(0, 0, "All Categories");
</script>

<style scoped>
div {
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
    url("../../public/assets/images/news-images/news-hero-image.png");
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
  min-height: 33.9rem;
  align-items: center;
}

.img-wrapper img {
  max-width: 100%;
  width: 33.9rem;
  align-self: baseline;
}

.info {
  max-width: 39.3125rem;
  height: 41.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.info > h1 {
  margin-top: -11.875rem;
  margin-bottom: 2.1875rem;
}

.info > p {
  margin-bottom: 2.5rem;
}

.media {
  margin-top: -2.1875rem;
}

.speakers {
  width: 30rem;
  height: 21.875rem;
  margin: 0rem 21.875rem 0rem 0rem;
  float: right;
}

.news-container {
  clear: both;
  max-width: 74rem;
  margin-inline: auto;
}

.news-paging {
  margin-top: 1.875rem;
}
</style>
