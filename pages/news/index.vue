<template>
  <div>
    <div class="container">
      <header>
        <Navbar @hovered="darkenPage" @mouseleave="removeDarken" />
        <div class="hero">
          <section class="header">
            <div class="info">
              <h1>News lorem ipsum dolor sit amet.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati eligendi laudantium ullam dolore itaque doloremque
                magnam enim, natus cum numquam quasi minus veritatis eius
                tempore rerum quibusdam tempora ducimus explicabo.
              </p>
            </div>
          </section>
          <section class="speakers">
            <img
              src="../../public/assets/images/news-images/speakers.png"
              alt="Speakers photo"
              title="Speakers photo"
            />
          </section>
        </div>
        <section class="media">
          <MediaLinks mediaPosition="side" />
        </section>
      </header>
    </div>
  </div>
</template>

<script setup>
import { news } from '~/data'

// import heroImage from '../public/assets/images/news-images/news-hero-image.png'

// let header = document.querySelector('header')
// header.style.background = 'url(' + heroImage + ') no-repeat'
// // header.style.margin = '0px 30px'
// header.style.width = '1920px'
// header.style.height = '960px'
// console.log(header)

let categories = [...new Set(news.map((c) => c.category))]
categories.splice(0, 0, 'All Categories')
</script>

<style scoped>
.container {
  position: relative;
  z-index: 3;
}

.media {
  position: sticky;
}

header {
  z-index: 5;
  background: yellow;
  position: relative;
  width: 74rem;
  height: 960px;
  background: url('../../public/assets/images/news-images/news-hero-image.png');
  background-size: cover;
}

.info {
  position: absolute;
}
</style>
