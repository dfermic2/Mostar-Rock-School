<template>
  <div id="media-links-main-container">
    <div
      class="container"
      :class="{
        'g-125 o-side': mediaPosition === 'side',
        'g-footer': mediaPosition === 'footer',
        'g-normal': mediaPosition === 'normal',
      }"
    >
      <div class="link-container">
        <Icon
          name="uil:instagram"
          :class="{
            side: mediaPosition === `side`,
            footer: mediaPosition === `footer`,
            normal: mediaPosition === 'normal',
          }"
          @click="
            navigateTo('https://www.instagram.com/mostar_rock_school/', {
              external: true,
              open: {
                target: '_blank',
              },
            })
          "
        />
      </div>
      <div class="link-container">
        <Icon
          name="uil:facebook"
          :class="{
            side: mediaPosition === `side`,
            footer: mediaPosition === `footer`,
            normal: mediaPosition === 'normal',
          }"
          @click="
            navigateTo('https://www.facebook.com/MostarRockSchool/', {
              external: true,
              open: {
                target: '_blank',
              },
            })
          "
        />
      </div>
      <div class="link-container">
        <Icon
          name="uil:youtube"
          :class="{
            side: mediaPosition === `side`,
            footer: mediaPosition === `footer`,
            normal: mediaPosition === 'normal',
          }"
          @click="
            navigateTo('https://www.youtube.com/@mostarrockschool', {
              external: true,
              open: { target: '_blank' },
            })
          "
        />
      </div>
      <div class="link-container">
        <Icon
          name="mdi:soundcloud"
          :class="{
            'sc-footer': mediaPosition === `footer`,
            'side side-soundclound': mediaPosition === `side`,
            'sc-normal': mediaPosition === 'normal',
          }"
          @click="
            navigateTo('https://soundcloud.com/mostarrockschool', {
              external: true,
              open: { target: '_blank' },
            })
          "
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
  border-radius: 5px 0 0 5px;
  margin: 0;
  display: flex;
  width: min-content;
  align-items: center;
}

.g-125 {
  gap: 1.25rem;
}

.g-footer {
  gap: 3rem;
}

.g-normal {
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

.link-container:not(hover) {
  color: #fff;
  transition: 300ms;
}

.normal {
  font-size: 2.15rem;
}

.sc-normal {
  font-size: 2.85rem;
}

.o-side {
  width: 3.125rem;
  height: 10.625rem;
  background-color: black;
  flex-direction: column;
  padding: 0.6rem;
  box-sizing: border-box;
}

.side {
  font-size: 1.25rem;
}

.side-soundclound {
  margin-top: -0.3125rem;
  font-size: 1.875rem;
}

.footer {
  font-size: 1.5rem;
}

.sc-footer {
  font-size: 2rem;
}

@media (width < 600px) {
  .g-normal {
    gap: 1rem;
    justify-content: space-between;
    width: 100%;
  }
  .o-side {
    display: none;
  }

  #media-links-main-container {
    width: 100%;
  }

  .g-footer {
    gap: 1rem;
    justify-content: space-between;
    width: 100%;
  }
}
</style>
