<template>
  <div>
    <NuxtLink>
      <div
        class="container"
        role="news-card"
        @click="navigateTo(`/news/${news.id}`)"
      >
        <div class="img">
          <img
            class="news-card-img"
            :src="news.coverPhoto"
            alt="News photo"
            :title="news.title"
          />
        </div>

        <div class="news-footer">
          <div class="header">
            <h3>
              {{ news.title }}
            </h3>
          </div>
          <div class="footer">
            <div class="left-side">
              <img
                :src="news.newsTypeIcon"
                :alt="news.newsTypeIconName"
                :title="news.newsTypeIconName"
              />
              <span class="space">{{ news.date }}</span>
            </div>
            <div class="right-side">
              <button class="btn" type="button">
                {{ $t("read_more_btn") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
let { news } = defineProps(["news"]);
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.container[role="news-card"] {
  max-width: 36.25rem;
  min-height: 21.875rem;
  position: relative;
  box-sizing: border-box;
  border-top-left-radius: 0.3125rem;
  border-top-right-radius: 0.3125rem;
  box-shadow: 0rem 0.125rem 0.25rem #000066;
  cursor: pointer;
}

.container[role="news-card"]:hover {
  box-shadow: 0rem 1.5625rem 2.1875rem #00000066;
  transition: 500ms;

  .img {
    overflow: hidden;
  }

  .news-card-img {
    transform: scale(1.1);
    transition: 500ms;
  }

  .btn {
    background: #bb0000;
    transition: 500ms;
  }
}

.container[role="news-card"]:not(hover) {
  box-shadow: 0rem 0.125rem 0.25rem #9d9c9c;

  transition: 500ms;

  .img {
    overflow: hidden;
  }

  .news-card-img {
    transform: scale(1);
    transition: 500ms;
  }

  .btn {
    background: #ff0000;
    transition: 500ms;
  }
}

.img {
  max-width: 100%;
  width: 580px;
  max-height: 100%;
  height: 380px;
  position: absolute;
  top: 0;
  left: 0;
  border-top-left-radius: 0.3125rem;
  border-top-right-radius: 0.3125rem;
  background: linear-gradient(to top, #000 1%, transparent);
}

.news-card-img {
  max-width: 100%;
  width: 580px;
  max-height: 100%;
  height: 350px;
  max-width: 36.25rem;
  max-height: 21.875rem;
  position: relative;
  z-index: -1;
}

.news-footer {
  margin: 0rem 2.5rem 1.875rem 2.5rem;
  position: absolute;
  bottom: 0;
}

.header {
  margin-bottom: 1.25rem;
}

.header h3 {
  color: #fff;
  font-size: 1.25rem;
  font-family: "F37Hybrid-Bold";
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}

.left-side {
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.625rem;
}

.space {
  font-size: 0.8125rem;
}

.btn {
  min-height: 1.875rem;
  background: #ff0000;
  color: #fff;
  outline: 0;
  border: 0;
  padding: 0.375rem 2.90625rem 0.375rem 2.96875rem;
  border-radius: 0.1875rem;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
}
</style>
