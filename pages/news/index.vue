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

            <div class="media">
              <MediaLinks mediaPosition="side" />
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
      </header>
      <div class="news-container">
        <NewsCardList :articles="news" :categories="categories" />
        <div class="news-paging">
          <NewsPaging />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { news } from '~/data'
let categories = [...new Set(news.map((c) => c.category))]
categories.splice(0, 0, 'All Categories')
</script>

<style scoped>
.container {
  position: relative;
  z-index: 3;
}

header {
  height: 850px;
  background: url('../../public/assets/images/news-images/news-hero-image.png');
  background-size: cover;
  margin-bottom: 50px;
}

.hero {
  margin: 210px auto 50px 130px;
  margin-top: 210px;
  height: 610px;
}

.header {
  display: flex;
  justify-content: space-between;
}

.info {
  color: #fff;
  max-width: 780px;
}

.info > h1 {
  font-size: 75px;
  line-height: 85px;
  font-family: 'F37Hybrid-Bold';
  margin-bottom: 35px;
}

.info > p {
  font-size: 16px;
  line-height: 23px;
  font-family: 'Inter';
}

.media {
  margin-top: -35px;
}

.speakers {
  width: 480px;
  height: 350px;
  margin: 0px 130px 0px 0px;
  float: right;
}

.news-container {
  clear: both;
  max-width: 74rem;
  margin-inline: auto;
}

.news-paging {
  margin-top: 30px;
}
</style>
