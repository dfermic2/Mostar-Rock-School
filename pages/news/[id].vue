<template>
  <div>
    <div class="container">
      <header>
        <Navbar />
        <div class="hero">
          <div class="info">
            <p @click="navigateTo(`/news/`)">< News</p>
            <h1>{{ article.title }}</h1>
            <p class="created-and-creator">
              {{ article.date }} by <span class="author"> Name Surname</span>
            </p>
          </div>
          <div class="media">
            <MediaLinks mediaPosition="side" />
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
}

header {
  height: 700px;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(9, 9, 121, 0) 33%,
      rgba(7, 7, 97, 0) 67%,
      rgba(0, 0, 0, 1) 100%
    ),
    url('../../public/assets/images/news-images/news-article-jazz-masterclass-cover-photo.png');
  background-size: cover;
  margin-bottom: 100px;
}

.hero {
  position: relative;
  min-height: 361px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 172px auto 0px 130px;
}

.info {
  width: 880px;
  min-height: 361px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  color: #fff;
}

.info > p:first-child {
  width: fit-content;
  font-size: 30px;
  font-family: 'F37Hybrid-Bold';
  letter-spacing: 0%;
  cursor: pointer;
}

.info > p:first-child:hover {
  color: #ff0000;
  transition: 500ms;
}

.info > p:first-child:not(hover) {
  color: #fff;
  transition: 500ms;
}

.info > h1 {
  margin-top: 35px;
  margin-bottom: 140px;
  font-size: 50px;
  font-family: 'F37Hybrid-Bold';
  letter-spacing: 0%;
  line-height: 65px;
}

.created-and-creator {
  margin-top: -15px;
}

.author {
  color: #ff0000;
  font-weight: 700;
}

.media {
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 38px;
}

.articles {
  max-width: 74rem;
  margin-inline: auto;
}

.recommended-articles {
  background: #fafbfb;
}
</style>
