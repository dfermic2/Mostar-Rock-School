import { news } from '~/data'
import { ref } from 'vue'
import { goToPreviousPage, goToNextPage } from '../utils/paging.js'

let numberOfArticles = news.length - 1
let currentArticle = 0
let nextArticle = currentArticle + 1

let ref_firstShownArticle = ref(news[currentArticle])
let ref_secondShownArticle = ref(news[nextArticle])

export const goToPreviousPage = (
  ref_secondShownArticle,
  ref_firstShownArticle,
  currentArticle,
  nextArticle,
  numberOfArticles
) => {
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

export const goToNextPage = (
  ref_firstShownArticle,
  ref_secondShownArticle,
  nextArticle,
  currentArticle,
  numberOfArticles,
  news
) => {
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
