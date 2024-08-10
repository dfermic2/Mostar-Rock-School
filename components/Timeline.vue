<template>
  <div>
    <section class="timeline">
      <section class="music-lines">
        <div class="images">
          <img
            src="../public/assets/images/journey/end.png"
            alt="End lines photo"
            title="End lines"
          />
          <img
            src="../public/assets/images/journey/violin-key.png"
            alt="Violin key photo"
            title="Violin key"
          />
          <img
            class="music-lines-photo"
            src="../public/assets/images/journey/lines.png"
            alt="Music line photo"
            title="Music lines"
          />
        </div>
      </section>
      <div class="timeline-years">
        <div class="year" v-for="timeline in years" :key="timeline.id">
          <TimelineYear :timeline="timeline" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { years } from '~/data'
onMounted(() => {
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  let timeline = document.querySelectorAll('.year .container')
  timeline.forEach((element) => {
    let marginRandom = getRndInteger(-50, 100)
    element.style.marginTop = `${marginRandom}px`
  })

  let timelineDrag = document.querySelector('.timeline')
  let mouseDown = false
  let startX, scrollLeft

  const startDragging = (e) => {
    mouseDown = true
    startX = e.pageX - timelineDrag.offsetLeft
    scrollLeft = timelineDrag.scrollLeft
  }

  const stopDragging = (e) => {
    mouseDown = false
  }

  const move = (e) => {
    e.preventDefault()
    if (!mouseDown) {
      return
    }
    const x = e.pageX - timelineDrag.offsetLeft
    const scroll = x - startX
    timelineDrag.scrollLeft = scrollLeft - scroll
  }

  // Add the event listeners
  timelineDrag.addEventListener('mousemove', move, false)
  timelineDrag.addEventListener('mousedown', startDragging, false)
  timelineDrag.addEventListener('mouseup', stopDragging, false)
  timelineDrag.addEventListener('mouseleave', stopDragging, false)
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.timeline {
  height: 37.5rem;
  max-width: 74rem;
  margin-inline: auto;
  overflow-x: scroll;
  position: relative;
  margin-bottom: 6.25rem;
  cursor: pointer;
  scroll-behavior: smooth;
  /* Highlighting the element disabled */

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

.music-lines {
  position: absolute;
  top: 5rem;
}

.music-lines .images {
  display: flex;
}

.music-lines-photo {
  transform: scaleX(3.2);
}

.timeline-years {
  display: flex;
  position: absolute;
  top: 0;
  left: 2.5rem;
}

.year {
  margin-left: -1.875rem;
  width: 26.8125rem;
}

.year:first-child {
  margin-left: 3.125rem;
}

/* Scrollbar */
::-webkit-scrollbar {
  height: 0.375rem;
  border-radius: 0.625rem;
}

::-webkit-scrollbar-thumb {
  background: red;
  border-radius: 0.625rem;
}
</style>
