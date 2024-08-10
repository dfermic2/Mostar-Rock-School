<template>
  <div>
    <div class="container tailwind">
      <UTabs
        :items="items"
        :ui="{
          list: {
            base: 'relative -mt-1',
            background: 'bg-white-100 dark:bg-gray-800',
            rounded: 'rounded-tr',
            shadow: '',
            padding: 'p-0',
            height: 'h-14',
            width: 'w-full',
            marker: {
              wrapper:
                'absolute inset-x-0 inset-y-0 duration-200 ease-out focus:outline-none',
              base: 'w-full h-full',
              background: 'bg-donation dark:bg-gray-900',
              rounded: 'rounded-tr',
              shadow: 'shadow-sm',
            },
            tab: {
              base: 'relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out',
              background: '',
              active: 'text-white dark:text-white',
              inactive: 'text-blue-600 dark:text-gray-400',
              height: 'h-12',
              padding: 'p-3',
              size: 'text-l',
              font: 'font-medium',
              rounded: 'rounded-tr',
              shadow: '',
            },
          },
        }"
      >
        <template #item="{ item }">
          <!-- Single donation -->
          <div v-if="item.key === 'singledonation'" class="space-y-3 tabs">
            <p>Single donation</p>
          </div>

          <!-- Monthly support -->
          <div
            v-if="item.key === 'monthlysupport'"
            class="content space-y-3 pt-5 pl-10 pr-10 pb-10"
          >
            <section class="donation-section">
              <p class="f-bold-size mb-11875">Pick an amount</p>
              <div class="amount-donations">
                <span
                  class="donation"
                  @click="handleValuePick()"
                  v-for="amount in possibleDonationAmounts"
                  :key="amount"
                  :data-amount="amount"
                >
                  <Icon name="healthicons:money-bag" size="20" />
                  <span class="amount f-bold-size">{{ amount }} KM</span>
                </span>
              </div>
            </section>

            <hr class="separator mb-11875" />

            <section class="donation-section">
              <p class="f-bold-size mb-11875">Other amount</p>
              <div class="custom-donation mb-11875">
                <input class="p-07" type="number" placeholder="0" />
                <span class="p-07">KM</span>
              </div>
              <button class="btn p-07" type="submit">
                Proceed to next step
                <span>
                  <Icon name="basil:arrow-right-outline" size="25" />
                </span>
              </button>
            </section>
          </div>
        </template>
      </UTabs>
    </div>
  </div>
</template>

<script setup>
const possibleDonationAmounts = [10, 30, 50, 100, 500, 1000]
const items = [
  {
    key: 'singledonation',
    label: 'Single donation',
  },
  {
    key: 'monthlysupport',
    label: 'Montly support',
  },
]

const handleValuePick = () => {
  let amountDonations = document.querySelectorAll('.donation')
  let donationValue = null

  amountDonations.forEach((amount) => {
    amount.addEventListener('click', (e) => {
      amountDonations.forEach((amount) => {
        amount.classList.remove('active')
      })
      e.currentTarget.classList.add('active')
      donationValue = e.currentTarget.dataset.amount
    })
  })
}
</script>

<style scoped>
.container {
  width: 30rem;
  height: 30.3125rem;
  background: #fff;
  box-shadow: 1px 1px 3px #d6d6d6;
  border-radius: 0.4rem;
  box-sizing: border-box;
}

.content {
  box-sizing: border-box;
  height: 26.5625rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.donation-section {
  width: 100%;
}

.p-07 {
  padding: 0.7rem;
}

.f-bold-size {
  font-weight: 500;
  font-size: 1.0625rem;
}

.amount-donations {
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 1.25rem;
  row-gap: 1.25rem;
}

.donation {
  width: 7.5rem;
  height: 3.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafbfb;
  border-radius: 0.2rem;
  box-shadow: 1px 1px 3px #d6d6d6;
  transition: 600ms;
}

.active {
  background: #437fd9;
  color: #ffffff;
  font-weight: 600;
}

.amount-donations > span:hover {
  transition: 0ms;
  background: #437fd9;
  color: #fff;
  cursor: pointer;
  box-shadow: inset 1px 0px 3px gray;
}

.amount-donations > span > span {
  margin-left: 0.3165rem;
}

.amount {
  background: none;
  color: none;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
}

.separator {
  color: #edf3fc;
}

.custom-donation {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.custom-donation > input {
  width: 100%;
  color: #939393;
  border: 1px solid #437fd9;
  border-radius: 0.2rem 0 0.2rem 0.2rem;
}

.custom-donation > input:focus {
  outline: 1px solid #2563eb;
  border: none;
}

/*Hiding arrows in input type number */

/* Chrome, Safari, Edge, Opera */
.custom-donation > input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
.custom-donation > input {
  appearance: unset;
  -moz-appearance: textfield;
}

.custom-donation > input::placeholder {
  color: #939393;
}

.custom-donation > span {
  border: 1px solid #437fd9;
  border-left: none;
  color: #437fd9;
  border-radius: 0rem 0.2rem 0.2rem 0;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #ff0000;
  background: hsl(0, 240, 120);
  margin-top: 0.5rem;
  color: #fff;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.25rem;
  cursor: pointer;
}

.btn:hover {
  background: #ff4343;
}

.btn > span {
  font-weight: 500;
}

.mb-11875 {
  margin-bottom: 1.1875rem;
}

button {
  border: 0;
}
</style>
