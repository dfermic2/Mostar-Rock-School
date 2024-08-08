<template>
  <div>
    <div id="darkenOverlay" class="normal"></div>
    <div class="media">
      <MediaLinks mediaPosition="side" />
    </div>
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.media {
  position: absolute;
  top: 21.25rem;
  right: 0;
  z-index: 2;
}
</style>
