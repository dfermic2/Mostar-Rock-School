<template>
  <div>
    <div class="container">
      <section class="header">
        <h2>You may also like...</h2>
      </section>

      <section class="recommended-articles">
        <div class="article">
          <NewsCard :news="ref_firstShownArticle" />
        </div>
        <div class="article">
          <NewsCard :news="ref_secondShownArticle" />
        </div>
      </section>

      <section class="paging">
        <BasicPaging
          @go-to-previous-page="goToPreviousPage"
          @go-to-next-page="goToNextPage"
        />
      </section>
    </div>
  </div>
</template>

<script setup>
import { news } from '~/data'
import { ref } from 'vue'

let numberOfArticles = news.length - 1
let currentArticle = 0
let nextArticle = currentArticle + 1

let ref_firstShownArticle = ref(news[currentArticle])
let ref_secondShownArticle = ref(news[nextArticle])

let goToPreviousPage = () => {
  ref_secondShownArticle.value = ref_firstShownArticle.value
  --currentArticle
  --nextArticle
  if (currentArticle < 0) {
    currentArticle = numberOfArticles
  }
  if (nextArticle < 0) {
    nextArticle = numberOfArticles
  }

  ref_firstShownArticle.value = news[currentArticle]
}

let goToNextPage = () => {
  ref_firstShownArticle.value = ref_secondShownArticle.value
  ++nextArticle
  ++currentArticle
  if (nextArticle > numberOfArticles) {
    nextArticle = 0
  }
  if (currentArticle > numberOfArticles) {
    currentArticle = 0
  }

  ref_secondShownArticle.value = news[nextArticle]
}
</script>

<style scoped>
.container {
  max-width: 73.75rem;
  display: flex;
  flex-direction: column;
  margin-inline: auto;
}

.header {
  margin-bottom: 0.625rem;
  margin-top: 5rem;
}

.header h2 {
  font-size: 2.1875rem;
  font-family: 'F37Hybrid-Bold';
}

.recommended-articles {
  z-index: 1;
  display: flex;
  gap: 1.25rem;
  margin-bottom: 1.875rem;
}

.article {
  max-width: 100%;
  width: 36.25rem;
}

.paging {
  margin-bottom: 6.25rem;
}

@media (width < 700px) {
  .recommended-articles {
    flex-direction: column;
  }

  .article:nth-child(2) {
    display: none;
  }
}
</style>
