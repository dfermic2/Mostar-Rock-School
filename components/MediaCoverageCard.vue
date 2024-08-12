<template>
  <div>
    <div class="container" role="media-coverage">
      <section class="left-side">
        <img
          class="media-coverage-img"
          :src="mediaCoverage.img"
          :alt="`${mediaCoverage.imgName} logo`"
        />
      </section>
      <section class="right-side">
        <div class="details">
          <p>{{ mediaCoverage.date }}</p>
          <p>{{ mediaCoverage.content }}</p>
          <button class="btn" type="button">Read more</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
let { mediaCoverage } = defineProps(["mediaCoverage"]);
onMounted(() => {
  let container = document.querySelector('div[role="media-coverage"]');
  let rightSide = document.querySelector(".right-side");
  let img = document.querySelector(".media-coverage-img");
  let button = document.querySelector(".btn");

  container.addEventListener("mouseover", () => {
    //container
    container.style.boxShadow = "0.125rem 0.9375rem 0.625rem #ddddd";
    container.style.transition = "500ms";

    //image
    img.style.transform = "scale(1.1)";
    img.style.transition = "500ms";

    //rightside
    rightSide.style.background = "#E8EFF8";
    rightSide.style.transition = "500ms";

    //button
    button.style.background = "#b00";
    button.style.transition = "500ms";
  });

  container.addEventListener("mouseleave", () => {
    //container
    container.style.boxShadow = "0.125rem 0.1875rem 0.25rem #d9dbde";
    container.style.transition = "500ms";

    //image
    img.style.transform = "scale(1)";
    img.style.transition = "500ms";

    //rightside
    rightSide.style.background = "#fafbfb";
    rightSide.style.transition = "500ms";

    //button
    button.style.background = "#ff0000";
    button.style.transition = "500ms";
  });
});
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

div[role="media-coverage"] {
  max-width: 36.25rem;
  min-height: 14.6875rem;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  box-shadow: 0.125rem 0.1875rem 0.25rem #d9dbde;
}

.left-side {
  display: flex;
  flex-grow: 1;
  align-items: center;
  box-sizing: border-box;
  max-width: 15.625rem;
  padding: 1.125rem 1.5625rem 1.0625rem 1.5625rem;
  margin-inline: auto;
  margin-top: -0.125rem;
  overflow: hidden;

  img {
    max-width: 100%;
    width: 15.625rem;
  }
}

.media-coverage-img {
  justify-self: center;
  max-width: 100%;
  width: 12.5rem;
}

.right-side {
  display: flex;
  flex-grow: 1;
  margin-inline: auto;
  align-items: center;
  background: #fafbfb;
  max-width: 20.625rem;
  min-height: 14.6875rem;
  padding: 1.875rem 2.5rem;
  box-sizing: border-box;
}

.details {
  margin-inline: auto;
  max-width: 15.625rem;
  height: 100%;
  box-sizing: border-box;
}

.details p:first-child {
  margin-bottom: 0.625rem;
  font-size: 0.8125rem;
}

.details p:nth-child(2) {
  margin-bottom: 1.5625rem;
  font-family: "F37Hybrid-Bold";
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.875rem;
}

.btn {
  width: 9.375rem;
  border: none;
  cursor: pointer;
  outline: none;
  height: 1.875rem;
  background: #ff0000;
  color: #fff;
  text-transform: uppercase;
  font-weight: 400;
  padding: 0.375rem 1.96875rem 0.375rem 2.03125rem;
  box-sizing: border-box;
  font-size: 0.875rem;
  letter-spacing: 0.015625rem;
  border-radius: 0.1875rem;
}
</style>
