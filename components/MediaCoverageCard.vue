<template>
  <div>
    <div class="container" role="media-coverage">
      <section class="left-side">
        <img src="../assets/images/Al-Jazeera.png" alt="Al-Jazeera logo" />
      </section>
      <section class="right-side">
        <div class="details">
          <p>16 March 2018</p>
          <p>Come together: music is rebuilding bridges in divided Balkans</p>
          <button class="btn" type="btn">Read more</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  let container = document.querySelector('div[role="media-coverage"]')
  let rightSide = document.querySelector('.right-side')
  let img = document.querySelector('img')
  let button = document.querySelector('.btn')

  container.addEventListener('mouseover', () => {
    //container
    container.style.boxShadow = '2px 15px 10px rgb(221,221,221)'
    container.style.transition = '500ms'

    //image
    img.style.transform = 'scale(1.1)'
    img.style.transition = '500ms'

    //rightside
    rightSide.style.background = 'rgb(232,239,248)'
    rightSide.style.transition = '500ms'

    //button
    button.style.background = 'rgb(187,0,0)'
    button.style.transition = '500ms'
  })

  container.addEventListener('mouseleave', () => {
    //container
    container.style.boxShadow = '2px 2px 4px rgb(217, 219, 222)'
    container.style.transition = '500ms'

    //image
    img.style.transform = 'scale(1)'
    img.style.transition = '500ms'

    //rightside
    rightSide.style.background = 'rgb(250, 251, 251)'
    rightSide.style.transition = '500ms'

    //button
    button.style.background = 'rgb(255,0,0)'
    button.style.transition = '500ms'
  })
})
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-block: 0;
  padding-inline: 0;
}

div[role='media-coverage'] {
  width: 580px;
  height: 235px;
  display: flex;
  align-content: baseline;
  box-sizing: border-box;
  box-shadow: 2px 3px 4px rgb(217, 219, 222);
  /* border: 1px solid red; */
}

.left-side {
  box-sizing: border-box;
  width: 250px;
  padding: 18px 25px 17px 25px;
  margin-top: -2px;
  overflow: hidden;
  /* border: 1px solid red; */
}

img {
  /* border: 1px solid red; */
  width: 200px;
  height: 200px;
}

.right-side {
  background: #fafbfb;
  width: 330px;
  height: 235px;
  margin-top: -1px;
  /* border: 1px solid red; */
  box-sizing: border-box;
}

.details {
  height: 100%;
  padding: 30px 40px;
  box-sizing: border-box;
  /* background: yellow; */
  /* box-sizing: border-box; */
  /* border: 1px solid red; */
}

.details p:first-child {
  /* DISCUSS THIS APPROACH */
  height: 9px; /* ? */
  margin-bottom: 21px;
  /* border: 1px solid red; */
  font-size: 13px;
}

.details p:nth-child(2) {
  /* DISCUSS THIS APPROACH */
  height: 76px; /* ? */
  /* border: 1px solid red; */
  margin-bottom: 39px;
  font-size: 20px;
  font-weight: 600;
}

.btn {
  width: 150px;
  height: 30px;
  background: #ff0000;
  color: #fff;
  text-transform: uppercase;
  font-weight: 400;
  padding: 6px 31.5px 6px 32.5px;
  box-sizing: border-box;
  font-size: 14px;
  letter-spacing: 0.25px;
  border-radius: 3px;
  /* border: 1px solid red; */
}
</style>
