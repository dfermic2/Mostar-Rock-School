<template>
  <div>
    <div class="container" role="news-card">
      <div class="img">
        <img
          class="news-card-img"
          srcset="../public/assets/images/news-images/1.png"
          alt="News 1st img"
        />
      </div>

      <div class="news-footer">
        <div class="header">
          <h3>
            Come together: how music is rebuilding bridges in divided Balkans
          </h3>
        </div>
        <div class="footer">
          <div class="left-side">
            <img
              src="../public/assets/images/news-images/icon-video.png"
              alt="Video icon"
            />
            <span class="space">[date]</span>
          </div>
          <div class="right-side">
            <button class="btn" type="button">Read More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.container[role='news-card'] {
  width: 36.25rem;
  height: 21.875rem;
  margin: 0rem 2.5rem 1.875rem 2.5rem;
  position: relative;
  box-sizing: border-box;
  border-top-left-radius: 0.3125rem;
  border-top-right-radius: 0.3125rem;
  box-shadow: 0rem 0.125rem 0.25rem #9d9c9c;
}

.container[role='news-card']:hover {
  box-shadow: 0px 1.5625rem 2.1875rem #9d9c9c;
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

.container[role='news-card']:not(hover) {
  box-shadow: 0px 0.125rem 0.25rem #9d9c9c;

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
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-top-left-radius: 0.3125rem;
  border-top-right-radius: 0.3125rem;
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
  font-weight: 500;
  font-family: 'F37Hybrid-Bold';
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
  width: 11.25rem;
  height: 1.875rem;
  background: #ff0000;
  color: #fff;
  outline: 0;
  border: 0;
  padding: 0.375rem 2.90625rem 0.375rem 2.96875rem;
  border-radius: 0.1875rem;
  text-transform: uppercase;
}
</style>
