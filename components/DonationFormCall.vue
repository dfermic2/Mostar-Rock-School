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
  line-height: 3.125rem;
  display: inline-block;
  letter-spacing: 0;
  font-size: 1.875rem;
  font-weight: 700;
  height: 6.25rem;
  text-size-adjust: 0%;
}

p {
  margin-block: 1.875rem;
  font-size: 0.9375rem;
  font-weight: 500;
}

.btn {
  /* width: 23.75rem; */
  height: 2.8125rem;
  line-height: 25px;
  box-sizing: border-box;
  background: #ff0000;
  font-size: 0.7875rem;
  color: #fff;
  text-align: center;
  padding: 0.875rem 3.875rem 0.8125rem 3.9375rem;
  border-radius: 0.1875rem;
  text-transform: uppercase;
}

.btn:hover {
  background: #bb0000;
  transition: 500ms;
}

.btn:not(hover) {
  background: #ff0000;
  transition: 500ms;
}
</style>
