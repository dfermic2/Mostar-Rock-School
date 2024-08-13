<template>
  <div>
    <div class="donation-container p-inline">
      <div class="donation-content">
        <div class="donation">
          <div class="donation-form">
            <DonationForm style="margin-inline: auto" />
          </div>
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

.donation-form {
  width: 30rem;
}

@media (width < 600px) {
  .donation-form {
    width: 100%;
    max-width: 30rem;
  }
}
</style>
