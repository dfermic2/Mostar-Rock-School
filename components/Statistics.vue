<template>
  <div class="statistics">
    <div class="content">
      <div class="left">
        <h1>A school that rocks!</h1>
        <p>
          The Mostar Rock School found its first home at the iconic Pavarotti
          Music Centre in 1997. This creative hub, adorned with the presence of
          renowned artists like Brian Eno, Zukero, Bono Vox, and maestro Luciano
          Pavarotti himself, became the backdrop for our inaugural "rock" school
          year.
        </p>
        <p>
          With the support of the Norwegian Embassy in B&H, we quickly became a
          recognized force for community integration and reconciliation. Over
          the years, we have welcomed over 1,300 students into our classrooms,
          providing them with a comprehensive music education program.
        </p>

        <StatisticsTable />

        <p>
          Today, we proudly serve 250 regular students from 12 countries,
          ranging in age from 8 to 57. Our classrooms are buzzing with
          creativity, as we offer 350 hours of education and produce over 15,000
          hours of music annually.
        </p>
      </div>
      <div class="right">
        <img src="../public/assets/images/drumsticks.png" alt="drumsticks" />
        <div class="left-text">
          <p>
            Through our curriculum, we have formed 456 bands, offering students
            the opportunity to develop their musical skills and showcase their
            talents through over 100 concerts.
          </p>
          <p>
            These performances attract an audience of more than 5,000 each year,
            as we celebrate the incredible achievements of our students.
          </p>
          <p>
            Beyond our classrooms, the Mostar Rock School extends its reach
            through initiatives such as the Mobile Rock School, which conducts
            workshops in communities throughout B&H, reaching over 200 youth.
            Our Master Classes, Booking Department, and Production Department
            further enhance our students' musical journeys, providing valuable
            opportunities for growth and collaboration.
          </p>
        </div>
        <NuxtLink to="/programme">
          <button>VIEW OUR PROGRAMME</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.statistics {
  display: flex;
  justify-content: center;
  min-height: 70.625rem;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("../public/assets/images/schoolThatRocks.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
}

.content {
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  margin-inline: auto;
  justify-content: space-between;
  max-width: 74rem;
  min-height: 58.125rem;
  align-self: center;
}

.left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 42.5rem;
}

.left p {
  max-width: 40rem;
}

.left-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 24.375rem;
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 27.5rem;
  padding-top: 0.3rem;
  padding-bottom: 2.2rem;
}

p {
  color: white;
  font-size: 0.94rem;
  line-height: 1.7rem;
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 2.5rem;
  font-family: "F37Hybrid-Bold";
  margin: 0;
  color: white;
}

img {
  max-width: 100%;
  width: 27.5rem;
}

button {
  width: 15.625rem;
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

button:hover {
  cursor: pointer;
  background-color: #b00;
}
</style>
