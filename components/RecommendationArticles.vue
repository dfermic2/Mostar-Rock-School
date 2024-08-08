<template>
  <div>
    <div class="container">
      <section class="header">
        <h2>You may also like...</h2>
      </section>

      <section class="recommended-articles">
        <div class="article">
          <NewsCard :news="news[2]" />
        </div>
        <div class="article">
          <NewsCard :news="news[3]" />
        </div>
      </section>

      <section class="paging">
        <BasicPaging />
      </section>
    </div>
  </div>
</template>

<script setup>
import { news } from '~/data'
</script>

<style scoped>
.container {
  width: 73.75rem;
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
  width: 36.25rem;
}

.paging {
  margin-bottom: 6.25rem;
}
</style>
