<template>
  <div>
    <div class="container">
      <div class="content">
        <h1>{{ $t("spread_the_word_h") }}</h1>
        <p>
          {{ $t("spread_the_word_p") }}
        </p>
        <MediaLinks :media-position="'normal'" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  background: black;
  border-radius: 0.5rem;
  max-width: 73.75rem;
  min-height: 20rem;
  padding-inline: 2rem;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(9, 9, 121, 0) 33%,
      rgba(7, 7, 97, 0) 67%,
      rgba(0, 0, 0, 1) 100%
    ),
    url("../public/assets/images/spreadTheWordWoman.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom right;
  box-sizing: border-box;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
}

/* TO-DO
.container:hover {
} */

.content {
  display: flex;
  flex-grow: 1;
  max-width: 63.75rem;
  min-height: 13.75rem;
  flex-direction: column;
  justify-content: space-between;
  color: white;

  p {
    font-weight: 600;
    max-width: 35rem;
  }
}

h1 {
  margin: 0;
}

@media (width < 600px) {
  .container {
    background-size: cover;
  }
}
</style>
