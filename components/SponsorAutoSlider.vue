<template>
  <div>
    <div class="container">
      <section id="sponsors-container">
        <article v-for="sponsor in sponsors" :key="sponsor.id" class="sponsors">
          <img
            class="sponsor-img"
            :src="sponsor.img"
            :title="sponsor.name"
            :alt="`${sponsor.name} logo`"
          />
        </article>
      </section>
    </div>
  </div>
</template>

<script setup>
import { sponsors } from '~/data'
</script>

<style scoped>
.container {
  height: 12.5rem;
  margin: 4rem;
}

@keyframes scroll {
  0% {
    transform: translateX(350px);
  }
  100% {
    transform: translateX(-3300px);
  }
}

#sponsors-container {
  display: flex;
  align-items: center;
  gap: 1.875rem;
  animation: 30s alternate 20s infinite scroll;
  animation-delay: 5ms;
}

.sponsors {
  display: flex;
  align-items: center;
  gap: 1.875rem;
  width: 15.625;
  height: 12.5rem;
}

.sponsor-img {
  margin-left: 1.25rem;
}
</style>
