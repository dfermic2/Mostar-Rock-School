<template>
  <div>
    <div class="with-animation">
      <div class="container" role="support-call-card" id="support-call-card">
        <section class="support-card">
          <div div class="header-container">
            <img
              src="../public/assets/images/hand.svg"
              alt="Hand icon"
              title="Hand icon"
            />
            <h2>{{ $t("support_call_card_h") }}</h2>
          </div>

          <div class="description-container">
            <p>
              {{ $t("support_call_card_p") }}
            </p>
          </div>

          <div class="actions">
            <NuxtLink :to="localePath('/support')">
              <div class="donate-button">
                <Icon class="icon" name="mdi:heart" size="15" />
                <button type="button">{{ $t("donate_now_btn") }}</button>
              </div>
            </NuxtLink>
          </div>
        </section>
      </div>
      <div id="animation" class="animation-container">
        <img
          src="../public/assets/images/hand.svg"
          alt="Hand icon"
          title="Hand icon"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const localePath = useLocalePath();
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.with-animation {
  max-width: 30rem;
  height: 19.6875rem;
  border-radius: 0.1875rem;
  overflow: hidden;
}

.container[role="support-call-card"] {
  max-width: 30rem;
  height: 100%;
  padding: 2.5rem;
  box-sizing: border-box;
  background: #ff0000;
  color: #fff;
  border-radius: 0.1875rem;
}

.support-card {
  z-index: 1;
  max-width: 25rem;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 1.1rem;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-container > img {
  height: 3.125rem;
  margin-left: -0.625rem;
  filter: invert();
}

.header-container > h2 {
  letter-spacing: 0.015625rem;
}

.description-container {
  margin-top: 1.0625rem;
}

.description-container > p {
  font-weight: 600;
}

.actions {
  width: 100%;
  position: absolute;
  bottom: 0;
  a {
    text-decoration: none;
    color: white;
  }
}

.donate-button {
  background: #bb0000;
  padding: 0.71875rem 0px 0.65625rem 0px;
  margin-top: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.1875rem;
  cursor: pointer;
}

button {
  padding-left: 0.9375rem;
  letter-spacing: 0.015625rem;
  font-size: 0.875rem;
  text-transform: uppercase;
  line-height: 1.5625rem;
  background: none;
  outline: none;
  border: none;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}

.animation-container {
  max-width: 30rem;
  height: 19.6875rem;
}

.animation-container > img {
  max-width: 24.375rem;
  width: 100%;
  margin: 0.625rem auto auto 3.125rem;
  margin-inline: auto;
  filter: invert();
  opacity: 0.2;
}

.with-animation:hover {
  pointer-events: none;
  box-shadow: 0.25rem 1.25rem 2.375rem #0000004f;

  .container {
    background: #bb0000;
    transition: 500ms;
  }

  .donate-button {
    background: #ff0000;
    transition: 500ms;
    box-shadow: 0.0625rem 0.3125rem 0.125rem #b50000;
  }

  .container:has(div) + .animation-container {
    transform: translateY(-100%);
    visibility: visible;
    transition: 500ms;
    position: relative;
  }
}

.container:not(hover) {
  pointer-events: all;
  .container {
    background: #ff0000;
    transition: 200ms;
  }

  .donate-button {
    background: #bb0000;
    transition: 500ms;
  }

  .container:has(div) + .animation-container {
    transform: translateY(0);
    visibility: hidden;
    transition: 500ms;
  }
}

@media (width<600px) {
  .with-animation {
    max-width: 374px;
    min-height: 260px;
  }

  .with-animation > .container[role="support-call-card"] {
    padding: 1rem;
    max-width: 374px;
    min-height: 260px;
  }

  .with-animation > .animation-container {
    max-width: 374px;
    min-height: 260px;
  }

  .support-card {
    min-height: 14rem;
    justify-content: space-evenly;
  }

  .support-card > .header-container > h2 {
    font-size: 1.5625rem;
  }

  .actions {
    position: static;
  }
}
</style>
