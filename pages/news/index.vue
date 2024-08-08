<template>
  <div>
    <div class="container">
      <header>
        <Navbar />
        <div class="hero">
          <section class="header">
            <div class="info">
              <h1>What’s new in our world of music.</h1>
              <p>
                Join us as we share the remarkable journeys and creative
                achievements of our talented students, showcasing their
                dedication, collaboration, and artistic growth. Stay tuned for
                their inspiring stories and unforgettable music!
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
div {
  max-width: 100vw;
}

header {
  max-width: 100vw;
  height: 53.125rem;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(9, 9, 121, 0) 33%,
      rgba(7, 7, 97, 0) 67%,
      rgba(0, 0, 0, 1) 100%
    ),
    url('../../public/assets/images/news-images/news-hero-image.png');
  background-size: cover;
  margin-bottom: 3.125rem;
}

.hero {
  width: 100vw;
  margin: 13.125rem auto 3.125rem auto;
  margin-top: 13.125rem;
  height: 38.125rem;
}

.header {
  max-width: 74rem;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
}

.info {
  color: #fff;
  max-width: 48.75rem;
}

.info > h1 {
  font-size: 4.6875rem;
  line-height: 5.3125rem;
  font-family: 'F37Hybrid-Bold';
  margin-bottom: 2.1875rem;
}

.info > p {
  font-size: 1rem;
  line-height: 1.4375rem;
  font-family: 'Inter';
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
