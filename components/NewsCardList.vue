<template>
  <div>
    <div class="container" role="news-card-list">
      <section class="filter-container">
        <div class="filter-by">
          <select
            class="filter sort-filter"
            name="sort"
            id="sort"
            @change="sortBy()"
          >
            <option value="0">Sort by</option>
            <option value="Latest first">Latest first</option>
            <option value="Earliest first">Earliest first</option>
          </select>
        </div>
        <div class="filter-by">
          <select
            class="filter select-filter"
            name="category"
            id="category"
            @change="filterByCategory()"
          >
            <option
              v-for="category in categories"
              :key="category"
              :value="category"
            >
              {{ category }}
            </option>
          </select>
        </div>
      </section>
      <section class="news-container">
        <article v-for="article in ref_articles" :key="article.id">
          <NewsCard :news="article" />
        </article>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let { articles, categories } = defineProps(['articles', 'categories'])
let ref_articles = ref(articles)

let sortBy = () => {
  let selectItem = document.querySelector('.sort-filter')
  let checkedSortingMethod = selectItem.options[selectItem.selectedIndex].value

  alert('Sorting in progress...')
}

let filterByCategory = () => {
  ref_articles.value = [...articles]
  let selectItem = document.querySelector('.select-filter')
  let checkedCategory = selectItem.options[selectItem.selectedIndex].value

  if (selectItem.selectedIndex === 0) {
    ref_articles.value = [...articles]
    return
  }

  ref_articles.value = ref_articles.value.filter(
    (a) => a.category === checkedCategory
  )
}
</script>

<style scoped>
.container[role='news-card-list'] {
  max-width: 73.75rem;
  min-height: 3.125rem;
  box-sizing: border-box;
}

.filter-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.filter-by {
  width: 36.25rem;
  max-width: 36.25rem;
}

.filter {
  -webkit-appearance: none;
  -moz-appearance: none;
  /* background: center/80% url('../public/assets/images/news-images/arrow.png'); */
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: #fff;
  box-shadow: 0rem 0.1875rem 0.3125rem #ddd;
  border-radius: 0.1875rem;
  border: none;
  outline: none;
  padding: 1.25rem 0rem 1.1875rem 0.9375rem;
}

.news-container {
  display: grid;
  grid-template-columns: auto auto;
  gap: 1.25rem;
  margin-top: 3.125rem;
}
</style>
