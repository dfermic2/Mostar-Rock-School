<template>
  <nav>
    <div class="container align-center">
      <logo imgHeight="100" />
      <div class="align-center nav-links g-2">
        <ul class="align-center nav-links-list g-07">
          <li @mouseover="addOverlay" @mouseleave="removeOverlay">
            <NuxtLink to="/school">THE SCHOOL</NuxtLink>
            <div class="dropdown">
              <ul>
                <li @click="removeOverlay">
                  <NuxtLink to="/school/journey"> OUR JOURNEY </NuxtLink>
                </li>
                <li @click="removeOverlay">
                  <NuxtLink to="/school/people"> OUR PEOPLE </NuxtLink>
                </li>
                <li @click="removeOverlay">
                  <NuxtLink to="/school/schedule"> SCHEDULE </NuxtLink>
                </li>
              </ul>
            </div>
          </li>
          <li @mouseover="addOverlay" @mouseleave="removeOverlay">
            <NuxtLink to="/programme">PROGRAMME</NuxtLink>
            <div class="dropdown">
              <ul>
                <li @click="removeOverlay">
                  <NuxtLink to="/programme/dk-studio"> DK STUDIO </NuxtLink>
                </li>
                <li @click="removeOverlay">
                  <NuxtLink to="/programme/booking"> MORS BOOKING </NuxtLink>
                </li>
                <li @click="removeOverlay">
                  <NuxtLink to="/programme/summer-rock-school">
                    SUMMER ROCK SCHOOL
                  </NuxtLink>
                </li>
                <li @click="removeOverlay">
                  <NuxtLink to="/programme/mobile-rock-school">
                    MOBILE ROCK SCHOOL
                  </NuxtLink>
                </li>
                <li @click="removeOverlay">
                  <NuxtLink to="/programme/liron"> LIRON </NuxtLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NuxtLink to="/enroll">ENROLL</NuxtLink>
          </li>
          <li><NuxtLink to="/news">NEWS</NuxtLink></li>
          <li>
            <NuxtLink to="/contact">CONTACT</NuxtLink>
          </li>

          <li @mouseover="addOverlay" @mouseleave="removeOverlay">
            <NuxtLink to="/support">
              <button class="btn-red align-center g-07">
                <Icon name="ion:heart" size="1rem" />SUPPORT
              </button>
            </NuxtLink>
            <div class="dropdown pl-1">
              <ul>
                <li @click="removeOverlay">
                  <NuxtLink to="/support/donors"> OUR DONORS </NuxtLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div class="link-text align-center g-05">
          <Icon name="ion:earth" />EN
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
function addOverlay() {
  document.querySelector("#darkenOverlay").classList.add("darken");
  document.querySelector("#darkenOverlay").classList.remove("normal-overlay");
}

function removeOverlay() {
  document.querySelector("#darkenOverlay").classList.add("normal-overlay");
  document.querySelector("#darkenOverlay").classList.remove("darken");
}
</script>

<style scoped>
nav {
  font-size: 0.875rem;
  font-weight: bold;
  letter-spacing: 0.03rem;
  position: relative;
  z-index: 999;
}

.align-center {
  display: flex;
  align-items: center;
}

.container {
  justify-content: space-between;
  margin-inline: auto;
  max-width: 74rem;
  padding-top: 2rem;
}

.nav-links {
  flex-grow: 1;
  justify-content: right;
}

.nav-links-list {
  flex-grow: inherit;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 50rem;
}

ul {
  list-style-type: none;
  display: inline-block;
  position: relative;
  margin: 0;
  padding: 0 0 0 1rem;
}

a,
.link-text {
  text-decoration: none;
  color: white;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
}

button {
  font-size: 0.875rem;
  font-weight: bold;
}

.dropdown a {
  display: block;
  width: 100%;
  padding: 0.8rem 1.3rem;
  min-width: 7.5rem;
}

a:hover,
.link-text:hover,
.dropdown li:hover a {
  color: red;
}

li:hover,
button:hover,
.link-text:hover {
  cursor: pointer;
}

.router-link-exact-active {
  text-decoration: none;
  color: red;
}

.dropdown {
  position: absolute;
  text-align: left;
  display: none;
  padding-top: 0.7rem;
  margin-left: -2rem;
}

.dropdown li {
  display: block;
  color: white;
  background-color: rgba(0, 0, 0, 0.875);
  font-size: 0.85rem;
  margin-top: 0.1rem;
}

a:hover + .dropdown,
.dropdown:hover {
  display: block;
}
</style>
