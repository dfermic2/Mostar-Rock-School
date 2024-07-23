<template>
  <div>
    <div class="container-newsletter">
      <div class="content">
        <div class="heading">
          <img src="../public/assets/doodle.png" alt="drum doodle" />
          <h1>Our newsletter</h1>
        </div>
        <p>
          Stay informed about the latest news, upcoming events, and success
          stories from the Mostar Rock School.
        </p>
        <input type="email" placeholder="Email adress" />
        <button>SIGN UP</button>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.container-newsletter {
  width: 23.75rem;
  height: 20.6rem;
  background: #b00;
  border-radius: 0.4rem;
  padding: 1.56rem 2rem 1.875rem 2rem;
  box-sizing: border-box;
  transition: background 0.3s ease-in-out;
}

.container-newsletter:hover {
  background: red;
}

.container-newsletter:hover button {
  background: #b00;
}

.content {
  display: flex;
  flex-direction: column;
  color: white;
}

img {
  height: 2.5rem;
}

.heading {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

h1 {
  font-family: "F37Hybrid-Bold";
  font-size: 1.875rem;
  margin: 0;
}

p {
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.5rem;
  margin: 1.875rem 0 0 0;
}

input {
  width: 20rem;
  height: 3.125rem;
  border-radius: 0.2rem;
  border: none;
  box-shadow: inset 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
  margin: 1.56rem 0 1.25rem 0;
  font-size: 0.9rem;
  line-height: 1.5rem;
  font-weight: normal;
  padding: 1.25rem;
  box-sizing: border-box;
}

input::placeholder {
  opacity: 1;
  color: black;
}

input:focus {
  outline: none;
}

button {
  width: 20rem;
  height: 3.125rem;
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
}
</style>
