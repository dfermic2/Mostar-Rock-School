<template>
  <div>
    <header>
      <Navbar />
      <div class="hero-container">
        <div class="left">
          <div class="text">
            <h1>We believe in the transformative power of music</h1>
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
            <img
              src="../../public/assets/images/black-guitar.png"
              alt="guitar"
            />
          </div>
        </div>
      </div>
    </header>
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
  background-position: bottom;
  min-height: 53.125rem;
}

.hero-container {
  display: flex;
  flex-grow: 1;
}
img {
  width: 10rem;
  transform: rotate(333deg);
  filter: drop-shadow(0.8rem 2.3rem 0.6rem rgba(0, 0, 0, 0.25));
}

.left {
  display: flex;
  flex-wrap: wrap;
  max-width: 74rem;
  justify-content: space-between;
  margin-inline: auto;
  color: white;
}

.text h1 {
  font-family: "F37Hybrid-Bold";
  font-size: 4.7rem;
  line-height: 5.3rem;
  margin: 0;
}

.text p {
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.44rem;
}

.text button {
  width: 13.75rem;
  height: 2.82rem;
  border-radius: 0.25rem;
  border: none;
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
