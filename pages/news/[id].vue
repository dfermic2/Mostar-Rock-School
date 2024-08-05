<template>
  <div>
    <div class="container">
      <section class="hero">
        <div class="article-info">
          <div class="header">
            <p @click="$router.back()">< News</p>
            <h1>{{ article.title }}</h1>
          </div>

          <div class="footer">
            <p>
              {{ article.date }} by <span class="author">Name and Surname</span>
            </p>
          </div>
        </div>

        <div class="media-links">
          <MediaLinks mediaPosition="side" />
        </div>
      </section>

      <article>
        <Article />
      </article>

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

import heroImage from '../../public/assets/images/news-images/Jazz masterclass - Cover-Photo1210x642.png'

let header = document.querySelector('header')
header.style.background = 'url(' + heroImage + ') no-repeat'
// header.style.margin = '0px 30px'
header.style.width = '1920px'
header.style.height = '960px'
</script>

<style scoped>
.container {
  margin: 0px 130px;
  position: relative;
}

.hero {
  color: #fff;
  /* margin: 0px 100px; */
  width: 1440px;
  height: 350px;
  position: absolute;
  top: -20%;
  left: 0;
  /* background: yellow; */
  display: flex;
  justify-content: space-between;
}

.article-info {
  width: 880px;
  line-height: 65px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.header > p {
  font-size: 30px;
  font-family: 'F37Hybrid-Bold';
  cursor: pointer;
}

.header > p:hover {
  color: #ff0000;
  transition: 500ms;
}

.header > p:not(hover) {
  color: #fff;
  transition: 500ms;
}

.header > h1 {
  font-size: 50px;
  font-family: 'F37Hybrid-Bold';
}

.author {
  color: #ff0000;
}

.footer {
  margin-bottom: 50px;
}

.media-links {
  margin-right: 130px;
}

article {
  margin-top: -30px;
}

.recommended-articles {
  width: 100%;
  margin: 0px -130px;
  background: #fafbfb;
}
</style>
