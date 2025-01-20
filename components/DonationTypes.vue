<template>
  <div>
    <div class="donation-types p-inline">
      <div class="donation-text">
        <h1>{{ $t("support_donation_h") }}</h1>
        <p>{{ $t("support_donation_p") }}</p>
      </div>
      <div class="types-container">
        <div v-for="donation in donationTypes" class="wrapper">
          <DonationType :donation-type="donation" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { donationTypes } = defineProps(["donationTypes"]);
</script>

<style scoped>
.donation-types {
  min-height: 54.375rem;
  align-content: center;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("../public/assets/images/howToDonate.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  box-sizing: border-box;
}

.donation-text {
  max-width: 73.75rem;
  margin-inline: auto;
  color: white;
  padding-bottom: 1.8rem;
}

.types-container {
  display: flex;
  justify-content: space-between;
  gap: 1.25rem;
  margin-inline: auto;
  flex-wrap: wrap;
  max-width: 73.75rem;
}

.wrapper {
  display: flex;
  flex-grow: 1;
  margin: 0;
  padding: 0;
}
</style>
