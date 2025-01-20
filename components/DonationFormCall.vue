<template>
  <div>
    <div class="container">
      <h1>
        The Show Must go on.<br />
        {{ $t("donation_header") }}
      </h1>
      <p>
        {{ $t("donation_p1") }} <br />
        <br />

        {{ $t("donation_p2") }}
      </p>
      <NuxtLink to="/support">
        <button class="btn" type="button">{{ $t("donation_info_btn") }}</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  margin-block: 0;
  padding-block: 0;
}

.container {
  max-width: 33.75rem;
  min-height: 25.3125rem;
}

h1 {
  display: inline-block;
  letter-spacing: 0;
  font-weight: 700;
  text-size-adjust: 0%;
}

p {
  margin-block: 1.875rem;
}

.btn {
  height: 2.82rem;
  max-width: 23.75rem;
  padding-inline: 2rem;
  border-radius: 0.25rem;
  border: none;
  margin: 0;
  background: red;
  color: white;
  line-height: 1.56rem;
  letter-spacing: 0.02rem;
  font-weight: bold;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  transition: background-color 0.3s ease-in-out;
}

.btn:hover {
  cursor: pointer;
  background-color: #b00;
}

@media (width < 600px) {
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
