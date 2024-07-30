<template>
  <div>
    <div class="container" role="event-card">
      <section class="header p-inline-25 f-size-s font-weight-600">
        <div class="location-time-info pt-125">
          <div class="date">
            <Icon name="mdi:calendar-check" size="17" />
            <p class="date-time pl-05">{{ event.date }}</p>
          </div>

          <div class="time">
            <Icon class="icon" name="uil:clock" size="17" />
            <p class="pl-05">{{ event.time }}</p>
          </div>

          <div class="location">
            <Icon name="mdi:place" size="17" />
            <p class="pl-05">{{ event.location }}</p>
          </div>
        </div>
      </section>

      <section class="event-description p-inline-25">
        <h2 class="f-size-l font-hybrid line-heigt-219">{{ event.title }}</h2>
      </section>

      <section class="footer p-inline-25">
        <div class="fee-info">
          <img src="../assets/images/Ticket.png" alt="Ticket icon" />
          <p class="mr-05 f-size-m">
            <span>{{ event.fee }}</span>
          </p>
        </div>

        <div class="actions">
          <button class="btn p-btn font-weight-bold">Find out more</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const { event } = defineProps(["event"]);
</script>

<style scoped>
.container {
  width: 30.3125rem;
  height: 15.9375rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  box-shadow: 2px 2px 2px #f1f2f3;
  box-sizing: border-box;
}

.container[role="event-card"]:hover {
  box-shadow: 5px 9px 9px #e4e4e4;

  .header {
    background: #e3ecfa;
    transition: 500ms;
  }

  .footer {
    background: #e3ecfa;

    transition: 500ms;
  }

  .btn {
    background: #bb0000;
    transition: 500ms;
    cursor: pointer;
  }
}

.container[role="event-card"]:not(hover) {
  .header {
    background: #f1f5f9;
    transition: 500ms;
  }

  .footer {
    background: #f1f5f9;
    transition: 500ms;
  }

  .btn {
    background: #ff0000;
    transition: 500ms;
  }
}

.header {
  width: 100%;
  height: 3.75rem;
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
  height: 4.375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f1f5f9;
}

.fee-info {
  width: 5.0625rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.btn {
  width: 11.25rem;
  height: 2.1875rem;
  background: #ff0000;
  background: hsl(0, 240, 120);
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  outline: none;
  border: none;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}

.p-btn {
  padding: 0.56rem 2rem 0.5rem 2.0625rem;
}

.p-inline-25 {
  padding-inline: 2.5rem;
}

.pt-125 {
  padding-top: 1.25rem;
}

.pl-05 {
  padding-left: 0.5rem;
}

.ml-05 {
  margin-left: 0.5rem;
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
</style>
