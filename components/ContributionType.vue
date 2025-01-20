<template>
  <div>
    <div class="container">
      <div class="contribution-type-container">
        <section class="header">
          <img
            :src="contribution.icon"
            :alt="`${contribution.iconName} icon`"
          />
          <h3>{{ $t(contribution.type) }}</h3>
        </section>
        <section class="content">
          <p>{{ $t(contribution.content) }}</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
let { contribution } = defineProps(["contribution"]);
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
  padding: 1.25rem 2.5rem 2.5rem 2.5rem;
}

.header {
  display: flex;
  align-items: center;
}

img {
  max-width: 100%;
  width: 2.901875rem;
  max-height: 100%;
  height: 3.125rem;
  object-fit: contain;
}

h3 {
  margin-left: 1.25rem;
}

.content {
  max-width: 31.25rem;
  min-height: 5.625rem;
}
</style>
