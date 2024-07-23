<template>
  <footer>
    <div class="container align-center">
      <div class="content">
        <div class="first-column font-weight-600">
          <div>
            <ul class="g-06 m-0 line-height-15">
              <li class="pb-09"><logo imgHeight="70" /></li>
              <li>Maršala Tita 179 (MC Pavarotti)</li>
              <li>88000, Mostar, Bosna i Hercegovina</li>
            </ul>
          </div>
          <div>
            <ul class="g-125 line-height-2 m-0">
              <li class="align-center g-05 link-text">
                <Icon name="material-symbols:call" /> +387 (0) 36 550 444
              </li>
              <li class="align-center g-05 link-text">
                <Icon name="material-symbols:call" /> +387 (0) 36 550 750
              </li>
              <li>
                <a class="align-center g-05" href="mailto:someone@example.com">
                  <Icon name="ph:envelope" size="18" />
                  info@mostarrockschool.org
                </a>
              </li>
            </ul>
          </div>
          <div data-v-45a0dde9>
            <MediaLinks :mediaPosition="'footer'" />
          </div>
        </div>
        <div class="second-column">
          <ul class="g-15 m-0 font-weight-bold">
            <li>
              <NuxtLink to="/school">OUR SCHOOL</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/programme">PROGRAMME</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/enroll">ENROLL</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/support">SUPPORT</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/news">NEWS</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact">CONTACT</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/privacy">PRIVACY POLICY</NuxtLink>
            </li>
          </ul>
        </div>
        <Newsletter />
      </div>
    </div>
    <div class="copyright-container align-center g-03">
      <Icon name="ph:copyright" />
      <span>2024 Mostar Rock School. The school that rocks.</span>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: black;
}
.container {
  font-size: 0.875rem;
  margin-inline: auto;
}

.content {
  color: white;
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 74rem;
  min-height: 20.625px;
  margin: 6.25rem auto;
  box-sizing: border-box;
}

.first-column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.second-column {
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.copyright-container {
  background: white;
  justify-content: center;
  padding: 1.2rem 0;
}

.copyright-container span {
  font-weight: normal;
  line-height: 2rem;
  font-size: 1rem;
}

ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
}

.align-center {
  display: flex;
  align-items: center;
}

ul a,
.link-text {
  text-decoration: none;
  color: white;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
}

ul a:hover,
.link-text:hover {
  color: red;
}

.router-link-exact-active {
  text-decoration: none;
  color: red;
}
</style>
