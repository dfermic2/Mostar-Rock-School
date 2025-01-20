<template>
  <div class="statistics">
    <div class="content">
      <div class="left">
        <h1>A school that rocks!</h1>
        <p>
          {{ $t("statistics_p1") }}
        </p>
        <p>
          {{ $t("statistics_p2") }}
        </p>

        <StatisticsTable />

        <p>
          {{ $t("statistics_p3") }}
        </p>
      </div>
      <div class="right">
        <img src="../public/assets/images/drumsticks.png" alt="drumsticks" />
        <div class="left-text">
          <p>
            {{ $t("statistics_p4") }}
          </p>
          <p>
            {{ $t("statistics_p5") }}
          </p>
          <p>
            {{ $t("statistics_p6") }}
          </p>
        </div>
        <NuxtLink :to="localePath('/programme/regular-programme')">
          <button>{{ $t("view_programme_btn") }}</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const localePath = useLocalePath();
</script>

<style scoped>
.statistics {
  display: flex;
  justify-content: center;
  min-height: 70.625rem;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("../public/assets/images/schoolThatRocks.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  box-sizing: border-box;
}

.content {
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  margin-inline: auto;
  justify-content: space-between;
  max-width: 74rem;
  min-height: 58.125rem;
  align-self: center;
}

.left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 42.5rem;
}

.left p {
  max-width: 40rem;
}

.left-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 24.375rem;
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 27.5rem;
  padding-top: 0.3rem;
  padding-bottom: 2.2rem;
}

p {
  color: white;
  margin: 0;
  padding: 0;
}

h1 {
  margin: 0;
  color: white;
}

img {
  max-width: 100%;
  width: 27.5rem;
}

button {
  width: 15.625rem;
  height: 2.82rem;
  border-radius: 0.25rem;
  border: none;
  background: red;
  color: white;
  line-height: 1.56rem;
  letter-spacing: 0.02rem;
  font-weight: bold;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  cursor: pointer;
  background-color: #b00;
}
</style>
