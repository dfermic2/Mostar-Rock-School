<template>
  <div class="container">
    <UTabs
      :items="items"
      :ui="{
        list: {
          base: 'relative',
          background: 'bg-white-100 dark:bg-gray-800',
          rounded: 'rounded-sm',
          shadow: '',
          padding: 'p-0',
          height: 'h-14',
          width: 'w-full',
          marker: {
            wrapper:
              'absolute inset-x-0 inset-y-0 duration-200 ease-out focus:outline-none',
            base: 'w-full h-full',
            background: 'bg-blue-600 dark:bg-gray-900',
            rounded: 'rounded-sm',
            shadow: 'shadow-sm',
          },
          tab: {
            base: 'relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out',
            background: '',
            active: 'text-white dark:text-white',
            inactive: 'text-blue-600 dark:text-gray-400',
            height: 'h-12',
            padding: 'p-3',
            size: 'text-sm',
            font: 'font-medium',
            rounded: 'rounded-sm',
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
        <div v-if="item.key === 'monthlysupport'" class="space-y-3 px-5">
          <section class="donation-section support p-1">
            <p class="f-bold-size">Pick an amount</p>
            <div class="amount-donations">
              <span
                v-for="amount in possibleDonationAmounts"
                :key="amount"
                @click="handleValuePick(amount)"
              >
                <Icon name="healthicons:money-bag" size="20" />
                <span class="amount p-1" :value="amount">{{ amount }} KM</span>
              </span>
            </div>
          </section>

          <hr />

          <section class="donation-section p-1">
            <p class="f-bold-size">Other amount</p>
            <div class="custom-donation">
              <input class="p-1" type="number" placeholder="0" />
              <span class="p-1">KM</span>
            </div>
            <button class="btn p-1" type="submit">
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
const handleValuePick = (donation) => {
  alert(`You picked ${donation} KM`)
}
</script>

<style scoped>
.container {
  width: 400px;
  background: #fff;
  box-shadow: 1px 1px 3px #d6d6d6;
  padding-bottom: 2.5rem;
}

.donation-section {
  width: 100%;
}

.p-1 {
  padding: 0.5rem 0.5rem;
}

.f-bold-size {
  font-weight: 500;
  font-size: 0.85rem;
}

.amount-donations {
  display: grid;
  margin-top: 0.5rem;
  grid-template-columns: auto auto auto;
  column-gap: 0.5rem;
  row-gap: 0.8rem;
}

.amount-donations > span {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background: #f3f2f2;
  padding: 0.2rem 0.4rem;
  border-radius: 0.2rem;
  box-shadow: 1px 1px 3px #d6d6d6;
}

.amount-donations span:hover {
  background: #2563eb;
  color: #fff;
  cursor: pointer;
}

.amount {
  background: none;
  color: none;
  font-size: 0.8rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
}

.custom-donation {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 0.5rem;
}

.custom-donation > input {
  width: 100%;
  color: #939393;
  border: 1px solid #2563eb;
  border-radius: 0.2rem;
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
  border: 1px solid #2563eb;
  border-left: none;
  color: #2563eb;
  border-radius: 0.2rem;
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
  font-size: 0.65rem;
  font-weight: 600;
  border-radius: 0.25rem;
}

.btn:hover {
  background: #ff4343;
}

.btn > span {
  font-weight: 500;
}
</style>
