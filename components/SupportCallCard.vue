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
            <h1>We need your support!</h1>
          </div>

          <div class="description-container">
            <p>
              Your monthly or one-time donation can make a significant impact on
              the school's mission to empower young musicians, promote music
              education, and foster cultural exchange.
            </p>
          </div>

          <div class="actions">
            <div class="donate-button">
              <Icon class="icon" name="mdi:heart" size="15" />
              <button type="button">Donate now!</button>
            </div>
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

<script setup></script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.with-animation {
  width: 30rem;
  height: 19.6875rem;
  border-radius: 0.1875rem;
}

.container {
  width: 30rem;
  height: 19.6875rem;
  padding: 2.5rem;
  box-sizing: border-box;
  background: #ff0000;
  color: #fff;
  border-radius: 0.1875rem;
}

.support-card {
  z-index: 1;
  width: 25rem;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
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

.header-container > h1 {
  font-size: 1.875rem;
  letter-spacing: 0.015625rem;
}

.description-container {
  margin-top: 1.0625rem;
}

.description-container > p {
  font-size: 0.9375rem;
  line-height: 1.5625rem;
  font-weight: 400;
}

.actions {
  width: 100%;
  position: absolute;
  bottom: 0;
}

.donate-button {
  background: #bb0000;
  padding: 0.71875rem 0px 0.65625rem 0px;
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
  width: 30rem;
  height: 19.6875rem;
}

.animation-container > img {
  height: 24.375rem;
  margin: 0.625rem auto auto 3.125rem;
  filter: invert();
  opacity: 0.2;
}

.with-animation:hover {
  pointer-events: none;
  box-shadow: 1.25rem 1.25rem 4.375rem #d3d3d3;

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
</style>
