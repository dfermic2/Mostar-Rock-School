<template>
  <div>
    <div class="container" role="staff-container">
      <section class="staff-container">
        <div
          class="shape"
          :class="{
            circle: person.shape === 'circle',
            rectangle: person.shape === 'rectangle',
            triangle: person.shape === 'triangle',
            'half-rectangle': person.shape === 'half-rectangle',
            leaf: person.shape === 'leaf',
          }"
        ></div>
        <img
          :src="person.img"
          type="image/webp"
          :alt="`${person.name} photo`"
        />
        <div class="staff-info-container">
          <p>{{ person.name }}</p>
          <p>{{ person.department }}</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
let { person } = defineProps(['person'])
console.log('Person -> ', person)

onMounted(() => {
  let container = document.querySelector('.container[role="staff-container"]')
  let staffInfoContainer = document.querySelector('.staff-info-container')
  let shape = document.querySelector('.shape')
  let img = document.querySelector('img')

  container.addEventListener('mouseover', () => {
    //image
    img.style.transform = 'scale(1.05)'
    img.style.clipPath = 'rect(0% 100% 97.5% 0%)'
    img.style.transition = '500ms'
    //shape
    if (shape.classList.contains('circle')) {
      let circle = document.querySelector('.circle')
      circle.style.background = '#ff0000'
      circle.style.transition = '500ms'
    } else if (shape.classList.contains('rectangle')) {
      let rectangle = document.querySelector('.rectangle')
      rectangle.style.background = '#ff0000'
      rectangle.style.transition = '500ms'
    } else if (shape.classList.contains('triangle')) {
      let triangle = document.querySelector('.triangle')
      triangle.style.borderTop = '280px solid #ff0000'
      triangle.style.transition = '500ms'
    } else if (shape.classList.contains('half-rectangle')) {
      let halfRectangle = document.querySelector('.half-rectangle')
      halfRectangle.style.borderTop = '0px solid #ff0000'
      halfRectangle.style.borderBottom = '280px solid #ff0000'
      halfRectangle.style.transition = '500ms'
    } else if (shape.classList.contains('leaf')) {
      let leaf = document.querySelector('.leaf')
      leaf.style.borderLeft = '280px solid #ff0000'
      leaf.style.transition = '500ms'
    }
    //staff-info-container
    staffInfoContainer.style.color = '#ff0000'
    staffInfoContainer.style.transition = '500ms'
  })

  container.addEventListener('mouseleave', () => {
    //image
    img.style.transform = 'scale(1)'
    img.style.clipPath = 'rect(0% 100% 100% 0%)'
    img.style.transition = '500ms'
    // shape
    if (shape.classList.contains('circle')) {
      let circle = document.querySelector('.circle')
      circle.style.background = '#000'
      circle.style.transition = '500ms'
    } else if (shape.classList.contains('rectangle')) {
      let rectangle = document.querySelector('.rectangle')
      rectangle.style.background = '#000'
      rectangle.style.transition = '500ms'
    } else if (shape.classList.contains('triangle')) {
      let triangle = document.querySelector('.triangle')
      triangle.style.borderTop = '280px solid #000'
      triangle.style.transition = '500ms'
    } else if (shape.classList.contains('half-rectangle')) {
      let halfRectangle = document.querySelector('.half-rectangle')
      halfRectangle.style.borderTop = '0px solid #000'
      halfRectangle.style.borderBottom = '280px solid #000'
      halfRectangle.style.transition = '500ms'
    } else if (shape.classList.contains('leaf')) {
      let leaf = document.querySelector('.leaf')
      leaf.style.borderLeft = '280px solid #000'
      leaf.style.transition = '500ms'
    }
    //staff-info-container
    staffInfoContainer.style.color = '#000'
    staffInfoContainer.style.transition = '500ms'
  })
})
</script>

<style scoped>
.container {
  width: 17.5rem;
  height: 22.5rem;
  position: relative;
}

.staff-container {
  overflow: hidden;
}

.shape {
  width: 17.5rem;
  height: 17.5rem;
  position: absolute;
  top: 0;
  z-index: 0;
}

.circle {
  background: #000;
  border-radius: 50%;
  clip-path: rect(0% 100% 92.5% 0%);
}

.rectangle {
  background: #000;
  border-radius: 0;
  clip-path: rect(0% 100% 92.5% 0%);
}

.triangle {
  border-left: 8.75rem solid transparent;
  border-right: 8.75rem solid transparent;
  border-top: 17.5rem solid #000;
  clip-path: rect(0% 100% 92.5% 0%);
}

.half-rectangle {
  border-left: 0px solid transparent;
  border-right: 17.5rem solid transparent;
  border-top: 0px solid #000;
  border-bottom: 17.5rem solid #000;
  clip-path: rect(0% 100% 92.5% 0%);
}

.leaf {
  border-top-left-radius: 8.75rem;
  border-bottom-right-radius: 8.75rem;
  border-left: 17.5rem solid #000;
  border-bottom: 0px solid transparent;
  clip-path: rect(0% 100% 92.5% 0%);
}

.staff-info-container {
  margin-top: -0.625rem;
  text-align: center;
}

.staff-info-container p:first-child {
  font-size: 1.1875rem;
  margin-top: 0.625rem;
}

.staff-info-container p:nth-child(2) {
  font-size: 0.875rem;
}

img {
  position: relative;
  top: -1.25rem;
  z-index: 1;
  width: 17.5rem;
  height: 17.5rem;
}
</style>
