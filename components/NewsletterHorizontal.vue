<template>
  <div>
    <div class="container">
      <div class="content">
        <div class="left">
          <div class="heading">
            <img src="../public/assets/doodle.png" alt="drum doodle" />
            <h1>{{ $t("newsletter_horizonatal_h") }}</h1>
          </div>
          <p>{{ $t("newsletter_p") }} {{ $t("newsletter_horizonatal_p") }}</p>
        </div>
        <div class="right">
          <input type="email" class="email" placeholder="Email adress" />
          <div class="terms">
            <input type="checkbox" />
            <label>
              {{ $t("newsletter_horizonatal_privacy_policy") }}
              <u>{{ $t("privacy_policy_nh") }}</u>
            </label>
          </div>
          <button>{{ $t("sign_up_btn") }}</button>
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
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
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
