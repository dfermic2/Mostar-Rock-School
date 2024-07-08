<template>
  <div class="container p-1">
    <section class="header p-inline-1 m-minus-1">
      <div class="location-time-info ml-minus-05">
        <div class="date">
          <Icon name="mdi:calendar-check" size="17" />
          <p class="date-time pl-02">{{ event.date }}</p>
        </div>

        <div class="time">
          <Icon class="icon" name="uil:clock" size="17" />
          <p class="date-time pl-02">{{ event.time }}</p>
        </div>

        <div class="location">
          <Icon name="mdi:place" size="17" />
          <p class="location-place pl-02">{{ event.location }}</p>
        </div>
      </div>
    </section>

    <section class="event-description p-block-12 pl-02">
      <h2 class="font-weight-900">{{ event.title }}</h2>
    </section>

    <section class="footer p-inline-1 m-minus-1">
      <div class="fee-info pl-02">
        <Icon name="solar:ticker-star-bold" size="17" />
        <p>
          <span class="pl-02 font-weight-900">{{ event.fee }}</span>
        </p>
      </div>

      <div class="actions mr-05">
        <button class="btn pl-pr-2 p-block-045">Find out more</button>
      </div>
    </section>
  </div>
</template>

<script setup>
const { event } = defineProps(['event'])
console.log(event)
</script>

<style scoped>
.container {
  width: 330px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #fff;
  box-shadow: 2px 2px 2px #d6d6d6;
}

.header {
  width: 100%;
  background: #e3e3e3;
}

.p-inline-1 {
  padding-inline: 1rem;
}

.pl-pr-2 {
  padding-left: 2rem;
  padding-right: 2rem;
}

.p-1 {
  padding: 1rem;
}

.p-05 {
  padding: 0.5rem;
}

.p-block-12 {
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
}

.p-block-045 {
  padding-top: 0.45rem;
  padding-bottom: 0.45rem;
}

.pl-02 {
  padding-left: 0.2rem;
}

.m-minus-1 {
  margin: -1rem;
}

.ml-minus-05 {
  margin-left: -0.5rem;
}

.mr-05 {
  margin-right: 0.5rem;
}

.location-time-info {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.date,
.time,
.location {
  display: flex;
  align-items: center;
  font-size: 0.85rem;
}

.date-time {
  font-weight: 500;
}

.location-place {
  font-weight: 300;
}

.font-size-11 {
  font-size: 1.1rem;
}

.font-weight-900 {
  font-weight: 900;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #e3e3e3;
}

.fee-info {
  display: flex;
  align-items: center;
}

.btn {
  background: #ff0000;
  background: hsl(0, 240, 120);
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  outline: none;
  border: none;
  font-size: 0.65rem;
  font-weight: 500;
  border-radius: 0.2rem;
}
</style>
