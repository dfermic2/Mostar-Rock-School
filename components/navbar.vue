<template>
  <nav>
    <div class="container align-center p-inline">
      <div class="mobile">
        <Logo class="logo" />
        <Icon
          v-if="dropdownActive"
          @click="dropdownActive = false"
          name="ic:sharp-close"
          class="close-icon"
          size="2.5rem"
        />
        <Icon
          v-if="!dropdownActive"
          @click="dropdownActive = true"
          name="ci:hamburger-lg"
          class="hamburger-icon"
          size="2.5rem"
        />
      </div>

      <div class="align-center nav-links g-2">
        <Transition>
          <ul
            class="align-center nav-links-list g-07"
            v-if="viewport.isGreaterThan('mobileWide') || dropdownActive"
          >
            <li
              @mouseover="addOverlay"
              @mouseleave="removeOverlay"
              @click="removeOverlay"
            >
              <NuxtLink :to="localePath('/school')">{{
                $t("school")
              }}</NuxtLink>
              <div class="dropdown">
                <ul>
                  <li @click="removeOverlay">
                    <NuxtLink
                      class="min-w-75"
                      :to="localePath('/school/journey')"
                    >
                      {{ $t("journey") }}
                    </NuxtLink>
                  </li>
                  <li @click="removeOverlay">
                    <NuxtLink
                      class="min-w-75"
                      :to="localePath('/school/people')"
                    >
                      {{ $t("people") }}
                    </NuxtLink>
                  </li>
                  <li @click="removeOverlay">
                    <NuxtLink
                      class="min-w-75"
                      to="https://planer.mostarrockschool.org/"
                    >
                      {{ $t("schedule") }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </li>
            <li @mouseover="addOverlay" @mouseleave="removeOverlay">
              <span class="link-text">{{ $t("programme") }}</span>
              <div class="dropdown">
                <ul>
                  <li @click="removeOverlay">
                    <NuxtLink :to="localePath('/programme/regular-programme')">
                      {{ $t("regular_programme") }}
                    </NuxtLink>
                  </li>
                  <li @click="removeOverlay">
                    <NuxtLink
                      :to="localePath('/programme/additional-programme')"
                    >
                      {{ $t("additional_programme") }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NuxtLink :to="localePath('/enroll')">{{
                $t("enroll")
              }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/news')">{{ $t("news") }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/contact')">{{
                $t("contact")
              }}</NuxtLink>
            </li>

            <li
              @mouseover="addOverlay"
              @mouseleave="removeOverlay"
              @click="removeOverlay"
            >
              <NuxtLink :to="localePath('/support')">
                <button class="btn-red align-center g-07">
                  <Icon name="ion:heart" size="1rem" class="hearth-icon" />{{
                    $t("support")
                  }}
                </button>
              </NuxtLink>
              <div class="dropdown pl-1">
                <ul>
                  <li @click="removeOverlay">
                    <NuxtLink
                      class="min-w-75"
                      :to="localePath('/support/donors')"
                    >
                      {{ $t("donors") }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </li>
            <li
              @mouseover="addOverlay"
              @mouseleave="removeOverlay"
              @click="removeOverlay"
            >
              <NuxtLink
                class="align-center g-03"
                :to="switchLocalePath(`${currentLocale}`)"
              >
                <Icon name="ion:earth" /> {{ currentLocale }}
              </NuxtLink>
              <div class="dropdown">
                <ul>
                  <li @click="removeOverlay">
                    <NuxtLink :to="switchLocalePath(`${dropdownLocale}`)">
                      <div class="align-center g-03">
                        <Icon name="ion:earth" /> {{ dropdownLocale }}
                      </div>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();

const { locale, locales } = useI18n();

let currentLocale = locale;
let dropdownLocale = locales.value
  .filter((x) => {
    return x.code !== locale.value;
  })
  .at(0).code;

const viewport = useViewport();
let dropdownActive = ref(false);

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
  box-sizing: border-box;
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

.logo {
  width: 100px;
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
  text-transform: uppercase;
}

button {
  font-size: 0.875rem;
  font-weight: bold;
  text-transform: uppercase;
}

.dropdown a {
  display: block;
  width: 100%;
  padding: 0.8rem 1.3rem;
}

.min-w-75 {
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
  background-color: rgba(0, 0, 0, 0.9);
  font-size: 0.85rem;
  margin-top: 0.1rem;
}

a:hover + .dropdown,
.dropdown:hover {
  display: block;
}

span:hover + .dropdown,
.dropdown:hover {
  display: block;
}

.close-icon {
  display: none;
}

.hamburger-icon {
  display: none;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@media (width < 750px) {
  .nav-links-list {
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.9);
    width: 100%;
    gap: 2rem;
    justify-content: space-between;
    padding-top: 15rem;
    padding-bottom: 3rem;
    box-sizing: border-box;
    font-size: 2.1875rem;
    z-index: -1;
    transition: all 1s ease;
  }

  a,
  .link-text {
    font-family: "F37Hybrid-Bold";
    text-transform: capitalize;
    letter-spacing: 0.5px;
  }

  .localization {
    display: none;
  }

  button {
    font-family: "F37Hybrid-Bold";
    text-transform: capitalize;
    background-color: transparent;
    font-size: 2.1875rem;
  }

  .hearth-icon {
    display: none;
  }

  .logo {
    width: 53px;
  }

  .mobile {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .close-icon {
    display: block;
    color: red;
  }

  .hamburger-icon {
    display: block;
  }

  .btn-red:hover {
    background-color: transparent;
  }

  .btn-red:active {
    color: red;
  }
}
</style>
