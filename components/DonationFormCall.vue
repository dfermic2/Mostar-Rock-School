<template>
  <div>
    <div class="container">
      <h1>
        The Show Must go on.<br />
        There are two ways to do it.
      </h1>
      <p>
        Support Mostar Rock School and be a part of their musical journey! Your
        monthly or one-time donation can make a significant impact on the
        school's mission to empower young musicians, promote music education,
        and foster cultural exchange. <br />
        <br />

        Every donation, no matter the size, brings us one step closer to a
        harmonious future.
      </p>
      <button class="btn" type="button">Where does your donation go?</button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  margin-block: 0;
  padding-block: 0;
}

.container {
  max-width: 33.75rem;
  min-height: 25.3125rem;
}

h1 {
  display: inline-block;
  letter-spacing: 0;
  font-weight: 700;
  text-size-adjust: 0%;
}

p {
  margin-block: 1.875rem;
}

.btn {
  height: 2.82rem;
  max-width: 23.75rem;
  padding-inline: 1rem;
  border-radius: 0.25rem;
  border: none;
  margin: 0;
  background: red;
  color: white;
  line-height: 1.56rem;
  letter-spacing: 0.02rem;
  font-weight: bold;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  transition: background-color 0.3s ease-in-out;
}

.btn:hover {
  cursor: pointer;
  background-color: #b00;
}

@media (width < 600px) {
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
