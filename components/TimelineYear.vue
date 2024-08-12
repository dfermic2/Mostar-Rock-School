<template>
  <div>
    <div class="container" role="time-line-year">
      <div class="timeline-info">
        <h1>{{ timeline.year }}</h1>
        <img
          src="../public/assets/images/journey/marker.png"
          alt="Marker icon"
        />
        <div class="history-text">
          <h4>{{ timeline.title }}</h4>
          <p>
            {{ timeline.about }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { timeline } = defineProps(["timeline"]);
</script>

<style scoped>
.container[role="time-line-year"] {
  max-width: 26.8125rem;
  min-height: 24.375rem;
  box-sizing: border-box;
}

.timeline-info {
  box-sizing: border-box;
  padding: 0rem 1.875rem;
}

.timeline-info > h1 {
  margin-left: 1.5625rem;
  color: #ff0000;
  margin-bottom: 1.875rem;
}

.timeline-info > img {
  margin-top: -1.25rem;
  margin-left: 1.25rem;
}

.history-text {
  margin-top: -2.5rem;
  padding-inline: 1.875rem;
  padding-top: 0.9375rem;
  padding-bottom: 2.5rem;
  background: #fff;
  border-radius: 0.1875rem;
  box-shadow: 0.625rem 2.8125rem 6.25rem #c8c8c8;
}

.history-text > h4 {
  font-size: 1.1875rem;
  font-family: "F37Hybrid-Bold";
}

.history-text > p {
  line-height: 1.25rem;
  text-align: justify;
}
</style>
