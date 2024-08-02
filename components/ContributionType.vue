<template>
  <div>
    <div class="container">
      <div class="contribution-type-container">
        <section class="header">
          <img
            :src="contribution.icon"
            :alt="`${contribution.iconName} icon`"
          />
          <h3>{{ contribution.type }}</h3>
        </section>
        <section class="content">
          <p>{{ contribution.content }}</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
let { contribution } = defineProps(['contribution'])
</script>

<style scoped>
.container {
  max-width: 36.25rem;
  min-height: 13.4375rem;
  box-sizing: border-box;
  background: rgb(250, 251, 251);
  box-shadow: 0.125rem 0.125rem 0.125rem #f2f3f4;
  border-radius: 0.3125rem;
}

.contribution-type-container {
  box-sizing: border-box;
  margin: 1.25rem 2.5rem 2.5rem 2.5rem;
}

.header {
  display: flex;
  align-items: center;
}

img {
  width: 2.901875rem;
  height: 3.125rem;
}

h3 {
  margin-left: 1.25rem;
}

.content {
  max-width: 31.25rem;
  min-height: 5.625rem;
  padding-top: 0.9375rem;
}

p {
  font-size: 0.9375rem;
  font-weight: 500;
}
</style>
