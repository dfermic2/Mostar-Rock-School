<template>
  <div class="donation-type">
    <div class="container">
      <div class="content">
        <h1>{{ $t(donationType.title) }}</h1>
        <p>{{ $t(donationType.description) }}</p>
        <NuxtLink
          :to="localePath(`${donationType.path}`)"
          @click.native="scrollToTop"
        >
          <button>
            <Icon
              v-if="`${donationType.btnIcn}`"
              :name="`${donationType.btnIcn}`"
              size="1rem"
            />
            {{ $t(donationType.btnText) }}
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { donationType } = defineProps(["donationType"]);
const localePath = useLocalePath();

function scrollToTop() {
  if (donationType.btnText === "donate_now_btn") {
    window.scrollTo(0, 0);
  }
}
</script>

<style scoped>
.donation-type {
  width: 100%;
  display: flex;
}
.container {
  display: flex;
  flex-grow: 1;
  max-width: 36.25rem;
  min-height: 16.25rem;
  border: 1px solid rgba(255, 0, 0, 0.398);
  border-radius: 0.4rem;
  padding: 1.875rem 1.375rem;
  box-sizing: border-box;
}
.content {
  color: white;
  flex-grow: 1;
  max-width: 31.25rem;
  min-height: 12.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-inline: auto;
  margin-top: 0.625rem;
  box-sizing: border-box;
}
a {
  max-width: 18.75rem;
  height: 2.8rem;
  text-decoration: none;
}
button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;
  border: none;
  background: red;
  color: white;
  font-size: 0.9rem;
  letter-spacing: 0.02rem;
  font-weight: bold;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.2);
  transition: background 0.2s ease-in-out;
  text-transform: uppercase;
}

button:hover {
  cursor: pointer;
  background: #b00;
}

h1 {
  padding: 0;
  margin: 0;
  font-family: "F37Hybrid-Bold";
  font-size: 1.25rem;
}

p {
  line-height: 1.45rem;
}
</style>
