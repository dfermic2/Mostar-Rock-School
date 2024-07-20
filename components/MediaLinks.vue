<template>
  <div id="media-links-main-container">
    <div
      class="container"
      :class="{
        'g-05 o-side': mediaPosition === 'side',
        'g-3': mediaPosition === 'footer',
        'g-6': mediaPosition === 'normal',
      }"
    >
      <div class="link-container">
        <Icon
          name="uil:instagram"
          :class="{
            footer: mediaPosition === `footer`,
            normal: mediaPosition === 'normal',
          }"
        />
      </div>
      <div class="link-container">
        <Icon
          name="uil:facebook"
          :class="{
            footer: mediaPosition === `footer`,
            normal: mediaPosition === 'normal',
          }"
        />
      </div>
      <div class="link-container">
        <Icon
          name="uil:youtube"
          :class="{
            footer: mediaPosition === `footer`,
            normal: mediaPosition === 'normal',
          }"
        />
      </div>
      <div class="link-container">
        <Icon
          name="mdi:soundcloud"
          :class="{
            'sc-footer': mediaPosition === `footer`,
            normal: mediaPosition === 'normal',
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { mediaPosition } = defineProps(["mediaPosition"]);
</script>

<style scoped>
#media-links-main-container {
  width: fit-content;
}

.container {
  padding: 10px 0px;
  border-radius: 5px;
  margin: 0;
  background: #000;
  display: flex;
  width: min-content;
  align-items: center;
}

.g-05 {
  gap: 0.5rem;
}

.g-3 {
  gap: 3rem;
}

.g-6 {
  gap: 6rem;
}

.link-container {
  color: #fff;
}

.link-container:hover {
  color: #ff0000;
  transition: 300ms;
  cursor: pointer;
}

.normal {
  font-size: 3rem;
}

.o-side {
  flex-direction: column;
  padding: 0.6rem;
}

.footer {
  font-size: 1.5rem;
}

.sc-footer {
  font-size: 2rem;
}
</style>
