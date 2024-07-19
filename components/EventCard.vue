<template>
  <div>
    <div class="container">
      <section class="header p-inline-25 f-size-s">
        <div class="location-time-info pt-05">
          <div class="date">
            <Icon name="mdi:calendar-check" size="17" />
            <p class="date-time pl-05">{{ event.date }}</p>
          </div>

          <div class="time">
            <Icon class="icon" name="uil:clock" size="17" />
            <p class="f-weight-500 pl-05">{{ event.time }}</p>
          </div>

          <div class="location">
            <Icon name="mdi:place" size="17" />
            <p class="f-weight-300 pl-05">{{ event.location }}</p>
          </div>
        </div>
      </section>

      <section class="event-description p-inline-25">
        <h2 class="f-size-l">{{ event.title }}</h2>
      </section>

      <section class="footer p-inline-25">
        <div class="fee-info">
          <Icon name="bi:ticket" size="17" />
          <p class="mr-05 f-weight-600 f-size-m">
            <span>{{ event.fee }}</span>
          </p>
        </div>

        <div class="actions">
          <button class="btn p-btn f-weight-600">Find out more</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const { event } = defineProps(['event'])
console.log(event)
</script>

<style scoped>
.container {
  width: 480px;
  height: 255px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  box-shadow: 2px 2px 2px #f1f2f3;
  box-sizing: border-box;
}

.header {
  width: 100%;
  height: 60px;
  background: #f1f5f9;
  box-sizing: border-box;
}

.location-time-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.date,
.time,
.location {
  display: flex;
  align-items: center;
  font-size: 0.85rem;
}

.footer {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f1f5f9;
}

.fee-info {
  width: 81px;
  display: flex;
  justify-content: space-around;
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

.p-btn {
  padding: 0.56rem 2rem 0.5rem 2.0625rem;
}

.p-inline-25 {
  padding-inline: 2.5rem;
}

.pt-05 {
  padding-top: 0.5rem;
}

.pl-05 {
  padding-left: 0.5rem;
}

.mr-05 {
  margin-right: 0.5rem;
}

.f-size-s {
  font-size: 0.9375rem;
}

.f-size-m {
  font-size: 1.25rem;
}

.f-size-l {
  font-size: 1.5625rem;
}

.f-weight-300 {
  font-weight: 300;
}

.f-weight-500 {
  font-weight: 500;
}

.f-weight-600 {
  font-weight: 600;
}
</style>
