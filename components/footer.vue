<template>
  <footer>
    <div class="container-footer align-center">
      <div class="content-footer p-inline">
        <div class="first-column font-weight-600">
          <div>
            <ul class="g-06 m-0 line-height-15">
              <li class="pb-09"><logo class="logo" /></li>
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
          <div>
            <MediaLinks
              :mediaPosition="'footer'"
              v-if="viewport.isGreaterThan('mobileWide')"
            />
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
        <Newsletter class="newsletter" />
      </div>
    </div>
    <div class="media-links p-inline">
      <MediaLinks
        :mediaPosition="'footer'"
        v-if="viewport.isLessThan('tablet')"
      />
    </div>
    <div class="copyright-container align-center g-03">
      <Icon name="ph:copyright" />
      <span>2024 Mostar Rock School. The school that rocks.</span>
    </div>
  </footer>
</template>

<script setup>
const viewport = useViewport();
</script>

<style scoped>
footer {
  margin-top: 4rem;
  background: black;
}
.container-footer {
  font-size: 0.875rem;
  margin-inline: auto;
}

.content-footer {
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
  padding: 1.1rem 0;
}

.copyright-container span {
  font-size: 0.75rem;
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

.logo {
  width: 70px;
}

@media (width < 700px) {
  .content-footer {
    flex-direction: column;
    margin-top: -3rem;
    margin-bottom: 4rem;
    gap: 2.5rem;
  }
  .first-column {
    order: 2;
    margin-inline: auto;
    gap: 2rem;
    align-items: center;

    ul {
      align-items: center;
    }
  }

  .second-column {
    order: 3;
    margin-inline: auto;

    ul {
      align-items: center;
    }
  }
  .newsletter {
    order: 1;
    margin-inline: auto;
  }

  .media-links {
    width: 100%;
    max-width: 20rem;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-bottom: 2rem;
    box-sizing: border-box;
  }
}
</style>
