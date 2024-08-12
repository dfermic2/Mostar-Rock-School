<template>
  <div class="popup-container">
    <div class="popup-content">
      <div class="shape-img">
        <div
          class="shape"
          :class="{
            circle: person.shape === 'circle',
            rectangle: person.shape === 'rectangle',
            triangle: person.shape === 'triangle',
            'half-rectangle': person.shape === 'half-rectangle',
            leaf: person.shape === 'leaf',
          }"
        ></div>

        <img
          class="staff-image"
          :src="person.img"
          type="image/webp"
          :alt="`${person.name} photo`"
        />
      </div>
      <Icon
        @click="navigateTo('/school/people')"
        class="x-icon"
        name="mdi:close-box"
        size="3.125rem"
      />
      <div class="staff-info">
        <h3>{{ person.name }}</h3>
        <p>{{ person.department }}</p>
        <p>{{ person.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { staff } from "~/data";
let route = useRoute();
let id = route.query.id;

var merged = [].concat(
  staff.managementAndAdministration,
  staff.programme,
  staff.lecturers
);

let person = merged.find((p) => p.id == id);
</script>

<style scoped>
.popup-container {
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
}

.popup-content {
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  background-color: white;
  max-width: 61.25rem;
  min-height: 25rem;
  border-radius: 5px;
  position: relative;
  margin-inline: auto;
  overflow: hidden;
}

.staff-info {
  max-width: 31.25rem;
  align-content: center;
  margin-inline: auto;
}

h3 {
  margin: 0;
}

.staff-info p:nth-child(2) {
  font-size: 0.875rem;
  font-weight: 600;
  padding-bottom: 1rem;
}

.staff-info p:nth-child(3) {
  font-size: 0.8125rem;
  line-height: 1.4375rem;
}

.x-icon {
  color: red;
  position: absolute;
  right: -7px;
  top: -7px;
  transition: color linear 0.5s;
}

.x-icon:hover {
  cursor: pointer;
  color: #b00;
}

.shape-img {
  max-width: 25rem;
  max-height: 25rem;
}
.shape {
  position: absolute;
  z-index: 0;
}

.circle {
  width: 25rem;
  height: 25rem;
  background: #000;
  border-radius: 50%;
}

.rectangle {
  width: 25rem;
  height: 25rem;
  background: #000;
  border-radius: 0;
}

.triangle {
  height: 25rem;
  border-left: 12.5rem solid transparent;
  border-right: 12.5rem solid transparent;
  border-top: 25rem solid #000;
}

.half-rectangle {
  width: 0;
  height: 0;
  border-left: 0px solid transparent;
  border-right: 25rem solid transparent;
  border-top: 0 solid #000;
  border-bottom: 25rem solid #000;
}

.leaf {
  height: 25rem;
  border-top-left-radius: 12.5rem;
  border-bottom-right-radius: 12.5rem;
  border-left: 25rem solid #000;
  border-bottom: 0px solid transparent;
}

img {
  position: relative;
  z-index: 1;
  width: 25rem;
  height: 25rem;
}
</style>
