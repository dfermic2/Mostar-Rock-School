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
  width: 1180px;
  display: flex;
  flex-direction: column;
  margin: 0px 130px;
}

.header {
  margin-bottom: 10px;
  margin-top: 80px;
}

.header h2 {
  font-size: 35px;
  font-family: 'F37Hybrid-Bold';
}

.recommended-articles {
  z-index: 1;
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.article {
  width: 580px;
}

.paging {
  margin-bottom: 100px;
}
</style>
