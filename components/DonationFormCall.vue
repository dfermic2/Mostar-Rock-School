<template>
  <div>
    <div class="container">
      <h2>
        The Show Must go on.<br />
        There are two ways to do it.
      </h2>
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
  width: 33.75rem;
  height: 25.3125rem;
}

h2 {
  font-family: "F37Hybrid-Bold";
  line-height: 3.125rem;
  display: inline-block;
  letter-spacing: 0;
  font-size: 2.5rem;
  font-weight: 700;
  height: 6.25rem;
  text-size-adjust: 0%;
}

p {
  margin-block: 1.875rem;
  font-size: 0.9375rem;
}

.btn {
  height: 2.82rem;
  width: 23.75rem;
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
</style>
