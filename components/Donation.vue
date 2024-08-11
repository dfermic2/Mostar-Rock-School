<template>
  <div>
    <div class="donation-container">
      <div class="donation-content">
        <div class="donation">
          <DonationForm style="margin-inline: auto" />
          <DonationFormCall style="margin-inline: auto" />
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
  padding-inline: 1rem;
}

.donation-content {
  max-width: 74rem;
  margin-inline: auto;
}
.donation {
  display: flex;
  flex-grow: 1;
  gap: 1rem;
  max-width: 67.5rem;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  align-items: center;
}
</style>
