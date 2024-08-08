<template>
  <div>
    <div class="container">
      <header>
        <Navbar />
        <div class="hero">
          <div class="info">
            <div class="info-details">
              <p @click="navigateTo(`/news/`)">< News</p>
              <h1>{{ article.title }}</h1>
              <p class="created-and-creator">
                {{ article.date }} by <span class="author"> Name Surname</span>
              </p>
            </div>
          </div>
        </div>
      </header>

      <section class="articles">
        <Article />
      </section>

      <section class="recommended-articles">
        <RecommendationArticles />
      </section>
    </div>
  </div>
</template>

<script setup>
import { news } from '~/data'

const route = useRoute()
let { id } = route.params
id = parseInt(id)
let article = news.find((t) => t.id === id)
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  max-width: 100vw;
}

header {
  height: 43.75rem;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(9, 9, 121, 0) 33%,
      rgba(7, 7, 97, 0) 67%,
      rgba(0, 0, 0, 1) 100%
    ),
    url('../../public/assets/images/news-images/news-article-jazz-masterclass-cover-photo.png');
  background-size: cover;
  margin-bottom: 6.25rem;
}

.hero {
  margin-inline: auto;
  position: relative;
  min-height: 22.5625rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10.625rem;
}

.info {
  width: 74rem;
  margin-inline: auto;
}

.info-details {
  width: 55rem;
  color: #fff;
}

.info-details > p:first-child {
  width: fit-content;
  font-size: 1.875rem;
  font-family: 'F37Hybrid-Bold';
  letter-spacing: 0%;
  cursor: pointer;
}

.info-details > p:first-child:hover {
  color: #ff0000;
  transition: 500ms;
}

.info-details > p:first-child:not(hover) {
  color: #fff;
  transition: 500ms;
}

.info-details > h1 {
  margin-top: 2.1875rem;
  margin-bottom: 8.75rem;
  font-size: 3.125rem;
  font-family: 'F37Hybrid-Bold';
  letter-spacing: 0%;
  line-height: 4.0625rem;
}

.created-and-creator {
  margin-top: -0.9375rem;
}

.author {
  color: #ff0000;
  font-weight: 700;
}

.media {
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 2.375rem;
}

.articles {
  max-width: 74rem;
  margin-inline: auto;
}

.recommended-articles {
  max-width: 100vw;
  background: #fafbfb;
}
</style>
