<template>
  <div class="slot-class">
    <Transition>
      <div id="darkenOverlay" class="normal-overlay"></div>
    </Transition>
    <div class="right-menu">
      <MediaLinks :media-position="'side'" />
    </div>
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.right-menu {
  position: absolute;
  top: 21.25rem;
  right: 0;
  z-index: 998;
}
</style>
