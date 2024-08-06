<template>
  <div>
    <div id="overlay" class="normal"></div>
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup>
function darkenPage() {
  document.getElementById('overlay').classList.add('darken')
  document.getElementById('overlay').classList.remove('normal')
}

function removeDarken() {
  document.getElementById('overlay').classList.add('normal')
  document.getElementById('overlay').classList.remove('darken')
}
</script>

<style scoped>
.darken {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  transition: all 0.2s linear;
}

.normal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: -100;
  transition: all 0.2s linear;
}
</style>
