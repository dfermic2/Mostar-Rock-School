<template>
  <div>
    <div class="container">
      <div class="content">
        <div class="left">
          <div class="heading">
            <img src="../public/assets/doodle.png" alt="drum doodle" />
            <h1>Subscribe to our newsletter</h1>
          </div>
          <p>
            Stay connected and informed about the latest news, upcoming events,
            and success stories from Mostar Rock School. Sign up and receive
            regular updates directly to your inbox.
          </p>
        </div>
        <div class="right">
          <input type="email" class="email" placeholder="Email adress" />
          <div class="terms">
            <input type="checkbox" />
            <label>
              I agree to use of my data in line with the <u>Privacy Policy</u>
            </label>
          </div>
          <button>SIGN UP</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.container {
  display: flex;
  background: #b00;
  border-radius: 0.5rem;
  max-width: 73.75rem;
  min-height: 15.9rem;
  padding: 2.5rem 0;
  box-sizing: border-box;
  transition: background 0.3s ease-in-out;
}

.container:hover {
  background: red;
}

.container:hover button {
  background: #b00;
}

.content {
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-inline: auto;
  color: white;
  max-width: 66.75rem;
  font-weight: 600;
  line-height: 1.5rem;
  font-size: 0.9rem;
}

.heading {
  display: flex;
  align-items: baseline;
  padding: 0;
  margin: 0;
  gap: 1.25rem;
}

button {
  width: 18.75rem;
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

.left {
  display: flex;
  flex-direction: column;
  gap: 2.18rem;
  padding: 0.9rem 1.5rem;
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0rem 1.5rem;
  height: 10.94rem;
  width: 18.75rem;
}

.terms {
  display: flex;
  align-items: baseline;
  gap: 1.25rem;
}

.email {
  width: 18.75rem;
  height: 3.125rem;
  border-radius: 0.2rem;
  border: none;
  box-shadow: inset 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
  font-size: 0.9rem;
  line-height: 1.5rem;
  font-weight: normal;
  padding: 1.25rem;
  box-sizing: border-box;
}

.email:focus {
  outline: none;
}

.email::placeholder {
  opacity: 1;
  color: black;
}

input[type="checkbox"] {
  outline: 3px solid white;
  accent-color: red;
}

input[type="checkbox"]:hover {
  cursor: pointer;
}

h1 {
  font-family: "F37Hybrid-Bold";
  font-size: 2.5rem;
  line-height: 2.19rem;
  margin: 0;
}

img {
  height: 2.5rem;
}

p {
  max-width: 34rem;
  margin: 0;
}
</style>
