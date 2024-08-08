<template>
  <div>
    <div class="donation-container">
      <div class="donation-content">
        <div class="donation">
          <DonationForm />
          <DonationFormCall />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.donation-container {
  background-color: #ecf2fb;
  min-height: 42.8rem;
  align-content: center;
}

.donation-content {
  max-width: 74rem;
  margin-inline: auto;
}
.donation {
  display: flex;
  flex-grow: 1;
  max-width: 67.5rem;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  align-items: center;
}
</style>
