<template>
  <nav>
    <div class="container align-center">
      <logo imgHeight="110" />
      <div class="align-center nav-links">
        <ul class="align-center g-3">
          <li>
            <NuxtLink class="link-text" to="/school">THE SCHOOL</NuxtLink>
            <div class="dropdown">
              <ul>
                <li>
                  <NuxtLink class="link-text" to="/school/journey">
                    OUR JOURNEY
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="link-text" to="/school/people">
                    OUR PEOPLE
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="link-text" to="/school/schedule">
                    SCHEDULE
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NuxtLink class="link-text" to="/programme">PROGRAMME</NuxtLink>
            <div class="dropdown">
              <ul>
                <li>
                  <NuxtLink class="link-text" to="/programme/dk-studio">
                    DK STUDIO
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="link-text" to="/programme/booking">
                    MORS BOOKING
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="link-text"
                    to="/programme/summer-rock-school"
                  >
                    SUMMER ROCK SCHOOL
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="link-text"
                    to="/programme/mobile-rock-school"
                  >
                    MOBILE ROCK SCHOOL
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="link-text" to="/programme/liron">
                    LIRON
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NuxtLink class="link-text" to="/enroll">ENROLL</NuxtLink>
          </li>
          <li><NuxtLink class="link-text" to="/news">NEWS</NuxtLink></li>
          <li>
            <NuxtLink class="link-text" to="/contact">CONTACT</NuxtLink>
          </li>

          <li>
            <NuxtLink class="link-text" to="/support">
              <button class="btn-red align-center g-07">
                <Icon class="iconHeight" name="ion:heart"></Icon>SUPPORT
              </button>
            </NuxtLink>
            <div class="dropdown">
              <ul>
                <li>
                  <NuxtLink class="link-text" to="/support/donors">
                    OUR DONORS
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <div class="link-text align-center g-05">
              <Icon name="ion:earth"></Icon>EN
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
nav {
  font-size: 1rem;
}
.container {
  justify-content: space-between;
  margin-top: 2rem;
}

.align-center {
  display: flex;
  align-items: center;
}

ul {
  list-style-type: none;
  display: inline-block;
  position: relative;
  margin: 0;
  padding: 0 0 0 1rem;
}

.link-text {
  text-decoration: none;
  color: white;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
}

.link-text:hover {
  color: red;
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
  padding: 0.8rem 1.3rem;
}

.link-text:hover + .dropdown,
.dropdown:hover {
  display: block;
}
</style>
