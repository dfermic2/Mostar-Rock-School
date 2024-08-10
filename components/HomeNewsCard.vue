<template>
  <div>
    <div class="container" role="home-news-card">
      <section class="video-container">
        <iframe
          id="video-clip"
          width="660"
          height="340"
          src="https://www.youtube.com/embed/3V33lgbQ-Js?si=XJppkZudGal6Zbqo"
          title="YouTube video player"
          frameborder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </section>

      <section class="news-information">
        <div class="details">
          <h2>Akademski band</h2>
          <p>
            Our Akademski band, led by Atila Aksoj with assistants Goran Rebac
            and Ivan zovko, consists of students attending an advanced level of
            classes gathered to explore.....
          </p>
          <button id="btn" class="btn" type="button">Find out more</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  console.log("Mounted");
  let container = document.querySelector('.container[role="home-news-card"]');
  let video = document.getElementById("video-clip");
  let btn = document.getElementById("btn");

  container.addEventListener("mouseover", () => {
    // iframe style
    video.style.transform = "scale(1.1)";
    video.style.transition = "500ms";
    // button style
    btn.style.background = "#b00000";
    btn.style.transition = "500ms";

    //container
    container.style.boxShadow = "0.0625rem 0.4375rem 1.25rem #e3e3e3";
    container.style.transition = "500ms";
  });

  container.addEventListener("mouseleave", () => {
    // iframe style
    video.style.transform = "scale(1)";
    video.style.transition = "500ms";
    // button style
    btn.style.background = "#ff0000";
    btn.style.transition = "500ms";
    //container
    container.style.boxShadow = "0.0625rem 0.25rem 0.5rem #ced0d4";
    container.style.transition = "500ms";
  });
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  border: 0;
}

.container[role="home-news-card"] {
  width: 41.25rem;
  height: 34.375rem;
  padding: 2.5rem 2.5rem 1.875rem 2.5rem;
  box-shadow: 0.0625rem 0.25rem 0.5rem #ced0d4;
  box-sizing: border-box;
  border-radius: 0.3125rem;
}

.video-container {
  margin: -2.5rem -2.5rem 1.875rem -2.5rem;
  border-radius: 0.3125rem;
  overflow: hidden;
}

iframe {
  border-radius: 0.3125rem;
}

.news-information {
  margin-top: 2.5rem;
  margin-bottom: 1.875rem;
  height: 8.75rem;
}
.details {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-items: normal;
  justify-content: space-between;
}

.details h2 {
  font-weight: 700;
  font-size: 1.5625rem;
}

.details p {
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5rem;
}

.btn {
  width: 11.25rem;
  height: 2.1875rem;
  background: #ff0000;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.875rem;
  box-shadow: 0.0625rem 0.0625rem 0.125rem #ff0000 inset;
  border-radius: 0.1875rem;
}
</style>
