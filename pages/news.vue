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
        <div class="media-links">
          <MediaLinks mediaPosition="side" />
        </div>
      </div>
      <div class="speakers-container">
        <img
          class="speakers-img"
          src="../public/assets/images/news-images/speakers.png"
          alt="Speakers image"
        />
      </div>
      <div class="news-container">
        <NewsCardList :articles="news" :categories="categories" />
      </div>
    </div>
  </div>
</template>

<script setup>
import heroImage from '../public/assets/images/news-images/news-hero-image.png'

let header = document.querySelector('header')
header.style.background = 'url(' + heroImage + ') no-repeat'
// header.style.margin = '0px 30px'
header.style.width = '1920px'
header.style.height = '960px'
console.log(header)

import videoType from '../public/assets/images/news-images/icon-video.png'
import textType from '../public/assets/images/news-images/icon-text.png'
import quoteType from '../public/assets/images/news-images/icon-quote.png'

import firstArticlePhoto from '../public/assets/images/news-images/firstArticlePhoto.png'
import secondArticlePhoto from '../public/assets/images/news-images/secondArticlePhoto.png'
import thirdArticlePhoto from '../public/assets/images/news-images/thirdArticlePhoto.png'
import fourthArticlePhoto from '../public/assets/images/news-images/fourthArticlePhoto.png'
import fifthArticlePhoto from '../public/assets/images/news-images/fifthArticlePhoto.png'
import sixthArticlePhoto from '../public/assets/images/news-images/sixthArticlePhoto.png'
import seventhArticlePhoto from '../public/assets/images/news-images/seventhArticlePhoto.png'
import eightArticlePhoto from '../public/assets/images/news-images/eightArticlePhoto.png'

const news = [
  {
    id: 1,
    title: 'Come together: how music is rebuilding bridges in divided Balkans',
    date: '1 August 2024',
    newsTypeIcon: videoType,
    newsTypeIconName: 'Video icon',
    coverPhoto: firstArticlePhoto,
    category: 'Video',
  },
  {
    id: 2,
    title: 'Jazz masterclass with Francisco Angel Blanco "Latino"',
    date: '31 July 2024',
    newsTypeIcon: textType,
    newsTypeIconName: 'Text icon',
    coverPhoto: secondArticlePhoto,
    category: 'Article',
  },
  {
    id: 3,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ab.',
    date: '30 July 2024',
    newsTypeIcon: quoteType,
    newsTypeIconName: 'Quote icon',
    coverPhoto: thirdArticlePhoto,
    category: 'Interview',
  },
  {
    id: 4,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ab.',
    date: '29 July 2024',
    newsTypeIcon: textType,
    newsTypeIconName: 'Text icon',
    coverPhoto: fourthArticlePhoto,
    category: 'Article',
  },
  {
    id: 5,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ab.',
    date: '28 July 2024',
    newsTypeIcon: videoType,
    newsTypeIconName: 'Video icon',
    coverPhoto: fifthArticlePhoto,
    category: 'Video',
  },
  {
    id: 6,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ab.',
    date: '27 July 2024',
    newsTypeIcon: textType,
    newsTypeIconName: 'Text icon',
    coverPhoto: sixthArticlePhoto,
    category: 'Article',
  },
  {
    id: 7,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ab.',
    date: '26 July 2024',
    newsTypeIcon: textType,
    newsTypeIconName: 'Text icon',
    coverPhoto: seventhArticlePhoto,
    category: 'Article',
  },
  {
    id: 8,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ab.',
    date: '25 July 2024',
    newsTypeIcon: textType,
    newsTypeIconName: 'Text icon',
    coverPhoto: eightArticlePhoto,
    category: 'Article',
  },
]

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
