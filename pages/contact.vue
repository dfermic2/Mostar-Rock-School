<template>
  <div>
    <header>
      <Navbar />
      <div class="hero-container">
        <h1>With a little help from our friends...</h1>
        <div class="img-wrapper">
          <img src="../public/assets/images/amp.png" />
          <div class="ellipse"></div>
        </div>
      </div>
    </header>
    <div class="contact-content p-inline">
      <div class="contact-text">
        <div class="text">
          <h1>{{ $t("contact_h") }}</h1>
          <p>{{ $t("contact_p") }}</p>
          <ul class="g-06 pb-09 font-w-bold">
            <li>Maršala Tita 179 (MC Pavarotti)</li>
            <li>{{ $t("address") }}</li>
          </ul>

          <ul class="g-125 font-w-600">
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
        <img
          src="../public/assets/images/vinyl-player.png"
          alt="vinyl player"
        />
      </div>
      <div class="form-container">
        <ContactForm />
      </div>
    </div>
    <div class="bottom-container">
      <div class="bottom">
        <SpreadTheWord />
      </div>
    </div>
  </div>
</template>

<style scoped>
header {
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(9, 9, 121, 0) 33%,
      rgba(7, 7, 97, 0) 67%,
      rgba(0, 0, 0, 1) 100%
    ),
    url("../public/assets/images/hero-images/contact.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom 5rem center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 58.125rem;
}

.hero-container {
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  max-width: 74rem;
  min-height: 35.9rem;
  margin-inline: auto;

  h1 {
    max-width: 46.5rem;
    align-self: center;
  }
}

.img-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 35.9rem;
  align-items: center;
}

.img-wrapper img {
  max-width: 100%;
  width: 26.8rem;
  align-self: baseline;
}

.ellipse {
  position: absolute;
  z-index: -1;
  max-width: 100%;
  width: 30rem;
  height: 4rem;
  background: radial-gradient(
    ellipse,
    rgba(0, 0, 0, 0.728) 35%,
    rgba(255, 255, 255, 0) 60%
  );
}

.contact-content {
  display: flex;
  flex-wrap: wrap;
  max-width: 74rem;
  margin-inline: auto;
  justify-content: space-between;

  a,
  .link-text {
    text-decoration: none;
    white-space: nowrap;
    color: black;
    transition: all 0.2s ease-in-out;
  }

  ul a:hover,
  .link-text:hover {
    color: red;
  }
}

.contact-text {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  max-width: 31.25rem;
  min-height: 45.5rem;

  img {
    max-width: 12.5rem;
    max-height: 15.3rem;
  }
}

.form-container {
  max-width: 36.25rem;
  flex-grow: 1;
  align-self: self-end;
}

.bottom-container {
  display: flex;
  align-items: center;
  min-height: 32.5rem;
}

.bottom {
  max-width: 74rem;
  flex: 1;
  margin-inline: auto;
}

.text {
  display: flex;
  flex-direction: column;
  min-height: 22.5rem;
  justify-content: space-between;
}

ul {
  display: flex;
  list-style: none;
  flex-direction: column;
  font-size: 0.875rem;
  padding-left: 0;
}

.font-w-600 {
  font-weight: 600;
}

.font-w-bold {
  font-weight: bold;
}

.align-center {
  display: flex;
  align-items: center;
}
</style>
