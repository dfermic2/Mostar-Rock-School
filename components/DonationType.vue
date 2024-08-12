<template>
  <div class="donation-type">
    <div class="container">
      <div class="content">
        <h1>{{ donationType.title }}</h1>
        <p>{{ donationType.description }}</p>
        <button>
          <Icon
            v-if="`${donationType.btnIcn}`"
            :name="`${donationType.btnIcn}`"
            size="1rem"
          />
          {{ donationType.btnText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { donationType } = defineProps(["donationType"]);
</script>

<style scoped>
.donation-type {
  width: 100%;
}
.container {
  display: block;
  max-width: 36.25rem;
  min-height: 16.25rem;
  border: 1px solid rgba(255, 0, 0, 0.398);
  border-radius: 0.4rem;
  padding: 1.875rem 1.375rem;
  box-sizing: border-box;
}
.content {
  color: white;
  max-width: 31.25rem;
  min-height: 12.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-inline: auto;
  margin-top: 0.625rem;
  box-sizing: border-box;
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  max-width: 18.75rem;
  height: 2.8rem;
  border-radius: 0.25rem;
  border: none;
  background: red;
  color: white;
  font-size: 0.9rem;
  letter-spacing: 0.02rem;
  font-weight: bold;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.2);
  transition: background 0.2s ease-in-out;
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
