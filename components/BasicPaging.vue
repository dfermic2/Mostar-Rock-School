<template>
  <div>
    <div class="container">
      <div class="arrow">
        <img
          src="../public/assets/images/news-images/basic-paging-left-arrow.png"
          alt="Left arrow"
        />
      </div>
      <div class="dots">
        <div class="dot">
          <img
            src="../public/assets/images/news-images/basic-paging-dot.png"
            alt="Dot icon"
          />
        </div>
        <div class="dot">
          <img
            src="../public/assets/images/news-images/basic-paging-dot.png"
            alt="Dot icon"
          />
        </div>
        <div class="dot">
          <img
            src="../public/assets/images/news-images/basic-paging-dot.png"
            alt="Dot icon"
          />
        </div>
        <div class="dot">
          <img
            src="../public/assets/images/news-images/basic-paging-dot.png"
            alt="Dot icon"
          />
        </div>
      </div>
      <div class="arrow">
        <img
          src="../public/assets/images/news-images/basic-paging-right-arrow.png"
          alt="Right arrow"
        />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.arrow > img:hover {
  cursor: pointer;
  filter: grayscale(100%);
}

.dots {
  display: flex;
  gap: 80px;
}

.dot {
  cursor: pointer;
}
</style>
