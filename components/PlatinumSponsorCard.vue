<template>
  <div>
    <div class="container">
      <div class="left-side p-0625">
        <img
          class="image"
          :src="sponsor.img"
          :alt="`${sponsor.name} logo`"
          :title="`${sponsor.name}`"
        />
      </div>
      <div class="right-side">
        <h3 class="f-size-m">{{ sponsor.name }}</h3>
        <p class="f-size-s">{{ sponsor.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const { sponsor } = defineProps(["sponsor"]);
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.container {
  max-width: 36.25rem;
  min-height: 13.4375rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  box-shadow: 1px 1px 3px #d6d6d6;
  border-radius: 0.3125rem;
}

.p-0625 {
  padding-inline: 0.625rem;
}

.left-side {
  max-width: 13.4375rem;
  min-height: 13.4375rem;
  box-sizing: border-box;
  background: rgb(237, 243, 252);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.image {
  max-width: 100%;
  width: 12.1875rem;
}

.right-side {
  max-width: 21.9375rem;
  min-height: 13.4375rem;
  box-sizing: border-box;
  padding: 1.875rem 2.5rem;
}

.right-side p {
  margin-top: 1.0625rem;
  text-align: left;
  font-weight: normal;
}

.f-size-s {
  font-size: 0.875rem;
}

.f-size-m {
  font-size: 1.0625rem;
}

@media (width < 600px) {
  .left-side {
    width: 100%;
    max-width: 100%;
  }
  .right-side {
    width: 100%;
    max-width: 100%;
  }
}
</style>
