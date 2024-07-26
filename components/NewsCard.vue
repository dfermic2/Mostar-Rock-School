<template>
  <div>
    <div class="container" role="news-card">
      <section class="video-container">
        <iframe
          id="video-clip"
          width="660"
          height="340"
          src="https://www.youtube.com/embed/iIpfWORQWhU?si=baGQfwA-T06i9B2P"
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
  console.log('Mounted')
  let container = document.querySelector('.container[role="news-card"]')
  let video = document.getElementById('video-clip')
  let btn = document.getElementById('btn')

  container.addEventListener('mouseover', () => {
    // iframe style
    video.style.transform = 'scale(1.1)'
    video.style.transition = '500ms'
    // button style
    btn.style.background = '#b00000'
    btn.style.transition = '500ms'

    //container
    container.style.boxShadow = '1px 7px 20px #e3e3e3'
    container.style.transition = '500ms'
  })

  container.addEventListener('mouseleave', () => {
    // iframe style
    video.style.transform = 'scale(1)'
    video.style.transition = '500ms'
    // button style
    btn.style.background = '#ff0000'
    btn.style.transition = '500ms'
    //container
    container.style.boxShadow = '1px 4px 8px #ced0d4'
    container.style.transition = '500ms'
  })
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.container[role='news-card'] {
  width: 660px;
  height: 550px;
  padding: 40px 40px 30px 40px;
  box-shadow: 1px 4px 8px #ced0d4;
  box-sizing: border-box;
  border-radius: 5px;
}

.video-container {
  margin: -40px -40px 30px -40px;
  border-radius: 5px;
  overflow: hidden;
}

iframe {
  border-radius: 5px;
}

.news-information {
  margin-top: 40px;
  margin-bottom: 30px;
  height: 140px;
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
  font-size: 25px;
}

.details p {
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
}

.btn {
  width: 180px;
  height: 35px;
  background: #ff0000;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 1px 1px 2px #ff0000 inset;
  border-radius: 3px;
}
</style>
