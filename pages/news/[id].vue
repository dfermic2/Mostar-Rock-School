<template>
  <div>
    <div class="container">
      <section class="hero">
        <div class="article-info">
          <div class="header">
            <p>< News</p>
            <h1>{{ article.title }}</h1>
          </div>

          <div class="footer">
            <p>{{ article.date }}</p>
          </div>
        </div>

        <div class="media-links">
          <MediaLinks mediaPosition="side" />
        </div>
      </section>

      <article>
        <Article />
      </article>
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
}
</style>
