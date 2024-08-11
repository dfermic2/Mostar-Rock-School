<template>
  <div class="form-container">
    <form @submit.prevent="sendEmail">
      <select v-model="subject">
        <option value="" disabled selected>I'm writing about...</option>
        <option value="temp1">Temp1</option>
        <option value="temp2">Temp2</option>
      </select>

      <input v-model="name" type="text" placeholder="Your name*" required />
      <input
        v-model="email"
        type="email"
        placeholder="Email address*"
        required
      />
      <input v-model="phone" type="tel" placeholder="Phone number" />
      <textarea
        v-model="message"
        type="text"
        placeholder="Your message..."
        required
      />
      <div class="checkbox-container">
        <input v-model="privacyPolicy" type="checkbox" required />
        <label>I agree to <u>Privacy Policy</u></label>
      </div>
      <div class="checkbox-container">
        <input v-model="newsletter" type="checkbox" />
        <label>I want to sign up for the Newsletter</label>
      </div>
      <button type="submit">SEND MESSAGE</button>
    </form>
  </div>
</template>

<script setup>
import { Email } from "smtpjs";

let subject = "";
let name = "";
let email = "";
let phone = "";
let message = "";
let privacyPolicy = false;
let newsletter = false;

function sendEmail() {
  Email.send({
    SecureToken: "43420e72-ca5e-49fc-aa26-abaea90efdb9",
    To: "dfermic@gmail.com",
    From: "you@isp.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
</script>

<style scoped>
.form-container {
  display: flex;
  flex-grow: 1;
  align-items: center;
  max-width: 36.25rem;
  min-height: 40.94rem;
  padding: 1.56rem;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #fafbfb;
  box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.2);
}
form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-grow: 1;
  max-width: 31.25rem;
  min-height: 35.94rem;
  margin-inline: auto;
  font-size: 0.9375rem;
}

select,
input,
textarea {
  border: none;
  border-radius: 3px;
  padding: 1rem;
  box-sizing: border-box;
}
input,
textarea {
  box-shadow: inset 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
}

input {
  height: 3.125rem;
}

input::placeholder {
  color: black;
}

select,
textarea,
input:focus {
  outline: none;
}

textarea {
  min-height: 9.375rem;
  resize: none;
}

select {
  appearance: none;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  background-image: url("../public/assets/arrow.png");
  background-position: center right 1rem;
  background-size: 0.8rem 0.5rem;
  background-repeat: no-repeat;
}

option {
  padding: 1rem;
  font-size: 0.9375rem;
}

input[type="checkbox"] {
  height: auto;
  cursor: pointer;
  accent-color: red;
}

.checkbox-container {
  display: flex;
  gap: 0.6rem;
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  width: 15rem;
  height: 2.8rem;
  border-radius: 0.25rem;
  border: none;
  background: red;
  color: white;
  font-size: 0.9rem;
  letter-spacing: 0.02rem;
  font-weight: bold;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.2);
  transition: background 0.2s ease-in-out;
  align-self: flex-end;
}

button:hover {
  cursor: pointer;
  background: #b00;
}
</style>
