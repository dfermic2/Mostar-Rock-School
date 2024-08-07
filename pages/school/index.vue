<template>
  <div>
    <header>
      <Navbar />
      <div class="grid">
        <div class="text">
          <h1>We believe in <br />the transformative power of music</h1>
          <p>
            In August 2012 eight girls and eight boys from different sides of
            Mostar city joined a music camp in Skopje, North Macedonia.
            Alongside 40 young people from Kosovska Mitrovica, they created a
            diverse and harmonious community, free from political divisions.
            Guided by teachers and coaches from various countries, they formed
            four music bands, igniting the spirit of the Mostar Rock School
            adventure.
          </p>
          <button>VIEW OUR JOURNEY</button>
        </div>
        <div class="image">
          <img src="../../public/assets/images/black-guitar.png" alt="guitar" />
        </div>
      </div>
    </header>
    <br />
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
    url(../../public/assets/images/hero-images/school-index.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom 5rem center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  min-height: 58.125rem;
}

.image {
  grid-column: 5 / span 6;
  align-self: self-end;
  max-width: fit-content;
  overflow: hidden;
}

img {
  max-width: 52.1rem;
  height: auto;
  object-fit: contain;
  transform: rotate(333deg);
  filter: drop-shadow(0.8rem 2.3rem 0.6rem rgba(0, 0, 0, 0.25));
}

.grid {
  display: grid;
  margin-top: auto;
  grid-template-columns: repeat(auto-fit, minmax(4.93rem, 1fr));
  max-width: 74rem;
  min-height: 40rem;
  margin-inline: auto;
  color: white;
}

.text,
.image {
  grid-row: 1 / 2;
}

.text {
  display: flex;
  max-width: 43rem;
  flex-direction: column;
  grid-column: 1 / span 9;
  box-sizing: border-box;
}

.text h1 {
  font-family: "F37Hybrid-Bold";
  font-size: 4.7rem;
  line-height: 5.3rem;
  margin: 0;
  padding-bottom: 2.3rem;
}

.grid p {
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.44rem;
  margin: 0;
  padding-bottom: 2.5rem;
}

.text button {
  width: 13.75rem;
  height: 2.82rem;
  border-radius: 0.25rem;
  border: none;
  margin: 0;
  background: red;
  color: white;
  line-height: 1.56rem;
  letter-spacing: 0.02rem;
  font-weight: bold;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease-in-out;
}

.text button:hover {
  cursor: pointer;
}
</style>
