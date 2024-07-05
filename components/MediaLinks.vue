<template>
  <div
    class="container"
    :class="{
      'g-05': mediaPosition === 'side',
      'g-3': mediaPosition === 'footer',
      'g-6': mediaPosition === 'normal',
      'flex-row': mediaOrientation === 'row',
      'flex-column': mediaOrientation === 'column',
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
          footer: mediaPosition === `footer`,
          normal: mediaPosition === 'normal',
        }"
      />
    </div>
  </div>
</template>

<script setup>
const { mediaPosition, mediaOrientation } = defineProps([
  'mediaPosition',
  'mediaOrientation',
])
</script>

<style scoped>
.container {
  padding: 10px 20px;
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

.flex-row {
  flex-direction: row;
}

.flex-column {
  flex-direction: column;
}

.link-container {
  color: #fff;
}

.normal {
  font-size: 3rem;
}

.footer {
  font-size: 1.5rem;
}
</style>
