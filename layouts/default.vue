<template>
  <div class="bg-margins">
    <div class="bg-grey">
      <header>
        <Navbar />
      </header>
    </div>
    <div>
      <slot />
    </div>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.bg-grey {
  background-color: grey;
}

.bg-margins {
  margin: 0rem 10.7rem;
}
</style>
