<template>
  <div>
    <div class="container">
      <div class="hero">
        <section class="content">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga quos
            culpa officiis blanditiis vel! Ipsa quaerat amet aut quasi velit
            odio possimus natus dolor molestiae itaque quos enim, ducimus quas
            veritatis consequuntur nobis mollitia, voluptatem nemo quidem quae.
            Ipsum, voluptates?
          </p>
        </section>
        <section class="media-links">
          <MediaLinks mediaPosition="side" />
        </section>
      </div>
      <section class="speakers-container">
        <img
          class="speakers-img"
          src="../public/assets/images/news-images/speakers.png"
          alt="Speakers image"
        />
      </section>
      <section class="news-container">
        <NewsCardList :articles="news" :categories="categories" />
      </section>
      <section class="paging">
        <NewsPaging />
      </section>
    </div>
  </div>
</template>

<script setup>
import { news } from '~/data'

import heroImage from '../public/assets/images/news-images/news-hero-image.png'

let header = document.querySelector('header')
header.style.background = 'url(' + heroImage + ') no-repeat'
// header.style.margin = '0px 30px'
header.style.width = '1920px'
header.style.height = '960px'
console.log(header)

let categories = [...new Set(news.map((c) => c.category))]
categories.splice(0, 0, 'All Categories')
</script>

<style scoped>
.container {
  position: relative;
  width: 1440px;
  /* border: 1px solid red; */
  margin: 0px 130px 0px 130px;
  box-sizing: border-box;
}

.hero {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: -750px;
  z-index: 1;
}

.content {
  width: 720px;
  /* height: 295px; */
}

.content > h1 {
  font-family: F37Hybrid-Bold;
  font-size: 75px;
  color: #fff;
}

.content > p {
  font-family: 'Inter';
  color: #fff;
  font-size: 16px;
}

.media-links {
  margin-right: 130px;
  /* margin-top: 100px; */
}

.speakers-container {
  position: absolute;
  top: -150px;
  right: 230px;
  margin: -190px auto;
  width: 480px;
  height: 350px;
}

.speakers-img {
  width: 100%;
  height: 100%;
}

.news-container {
  width: 1180px;
  clear: both;
  margin: 190px 0px 30px 0px;
}
</style>
