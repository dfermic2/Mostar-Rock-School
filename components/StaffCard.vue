<template>
  <div>
    <div
      class="container"
      role="staff-container"
      @mouseover="hover(person.id)"
      @mouseleave="leave(person.id)"
    >
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
          class="staff-image"
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

let hover = (id) => {
  let allArray = []
  let all = document.querySelectorAll('.container[role="staff-container"]')
  allArray = Array.from(all)
  let specific = allArray.at(id - 1)

  let container = specific.querySelector('.container[role="staff-container"]')
  let staffInfoContainer = specific.querySelector('.staff-info-container')
  let shape = specific.querySelector('.shape')
  let img = specific.querySelector('.staff-image')

  img.style.transform = 'scale(1.05)'
  img.style.clipPath = 'rect(0% 100% 97.5% 0%)'
  img.style.transition = '500ms'
  //shape
  if (shape.classList.contains('circle')) {
    let circle = specific.querySelector('.circle')
    circle.style.background = '#ff0000'
    circle.style.transition = '500ms'
  } else if (shape.classList.contains('rectangle')) {
    let rectangle = specific.querySelector('.rectangle')
    rectangle.style.background = '#ff0000'
    rectangle.style.transition = '500ms'
  } else if (shape.classList.contains('triangle')) {
    let triangle = specific.querySelector('.triangle')
    triangle.style.borderTop = '280px solid #ff0000'
    triangle.style.transition = '500ms'
  } else if (shape.classList.contains('half-rectangle')) {
    let halfRectangle = specific.querySelector('.half-rectangle')
    halfRectangle.style.borderTop = '0px solid #ff0000'
    halfRectangle.style.borderBottom = '280px solid #ff0000'
    halfRectangle.style.transition = '500ms'
  } else if (shape.classList.contains('leaf')) {
    let leaf = specific.querySelector('.leaf')
    leaf.style.borderLeft = '280px solid #ff0000'
    leaf.style.transition = '500ms'
  }
  //staff-info-container
  staffInfoContainer.style.color = '#ff0000'
  staffInfoContainer.style.transition = '500ms'
}

let leave = (id) => {
  let allArray = []
  let all = document.querySelectorAll('.container[role="staff-container"]')
  allArray = Array.from(all)
  let specific = allArray.at(id - 1)
  console.log('Specific', specific)

  let container = specific.querySelector('.container[role="staff-container"]')
  let staffInfoContainer = specific.querySelector('.staff-info-container')
  let shape = specific.querySelector('.shape')
  let img = specific.querySelector('.staff-image')
  //image
  img.style.transform = 'scale(1)'
  img.style.clipPath = 'rect(0% 100% 100% 0%)'
  img.style.transition = '500ms'
  // shape
  if (shape.classList.contains('circle')) {
    let circle = specific.querySelector('.circle')
    circle.style.background = '#000'
    circle.style.transition = '500ms'
  } else if (shape.classList.contains('rectangle')) {
    let rectangle = specific.querySelector('.rectangle')
    rectangle.style.background = '#000'
    rectangle.style.transition = '500ms'
  } else if (shape.classList.contains('triangle')) {
    let triangle = specific.querySelector('.triangle')
    triangle.style.borderTop = '280px solid #000'
    triangle.style.transition = '500ms'
  } else if (shape.classList.contains('half-rectangle')) {
    let halfRectangle = specific.querySelector('.half-rectangle')
    halfRectangle.style.borderTop = '0px solid #000'
    halfRectangle.style.borderBottom = '280px solid #000'
    halfRectangle.style.transition = '500ms'
  } else if (shape.classList.contains('leaf')) {
    let leaf = specific.querySelector('.leaf')
    leaf.style.borderLeft = '280px solid #000'
    leaf.style.transition = '500ms'
  }
  //staff-info-container
  staffInfoContainer.style.color = '#000'
  staffInfoContainer.style.transition = '500ms'
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  border: 0;
}

div[role='staff-container'] {
  width: 17.5rem;
  height: 22.5rem;
  position: relative;
}

.staff-container {
  overflow: hidden;
}

.shape {
  position: absolute;
  top: 0;
  z-index: 0;
}

.circle {
  width: 17.5rem;
  height: 17.5rem;
  background: #000;
  border-radius: 50%;
  clip-path: rect(0% 100% 92.5% 0%);
}

.rectangle {
  width: 17.5rem;
  height: 17.5rem;
  background: #000;
  border-radius: 0;
  clip-path: rect(0% 100% 92.5% 0%);
}

.triangle {
  height: 17.5rem;
  border-left: 8.75rem solid transparent;
  border-right: 8.75rem solid transparent;
  border-top: 17.5rem solid #000;
  clip-path: rect(0% 100% 45.5% 0%);
}

.half-rectangle {
  width: 0;
  height: 0;
  border-left: 0px solid transparent;
  border-right: 17.5rem solid transparent;
  border-top: 0 solid #000;
  border-bottom: 17.5rem solid #000;
  clip-path: rect(0% 100% 92.5% 0%);
}

.leaf {
  height: 17.5rem;
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
