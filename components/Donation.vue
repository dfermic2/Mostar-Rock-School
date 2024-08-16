<template>
  <div>
    <div class="donation-container p-inline">
      <div class="donation-content">
        <div class="donation">
          <div class="donation-form">
            <DonationForm />
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
  margin: 3rem auto;
}
.donation {
  display: flex;
  gap: 1rem;
  max-width: 67.5rem;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  align-items: center;
}

.donation-form {
  margin-inline: auto;
}

@media (width < 600px) {
  .donation-form {
    margin-top: 2rem;
  }
}
</style>
