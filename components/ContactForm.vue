<template>
  <div class="form-container">
    <form @submit.prevent="sendEmail">
      <select v-model="subject">
        <option value="" disabled selected>
          {{ $t("contact_form_topic") }}
        </option>
        <option value="Temp 1">Temp 1</option>
        <option value="Temp 2">Temp 2</option>
      </select>

      <input
        v-model="from_name"
        type="text"
        placeholder="Your name*"
        required
      />

      <input
        v-model="from_email"
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
      ></textarea>

      <div class="checkbox-container">
        <input v-model="privacyPolicy" type="checkbox" required />
        <label
          >{{ $t("contact_form_privacy") }}
          <u>{{ $t("contact_form_privacy_u") }}</u></label
        >
      </div>

      <div class="checkbox-container">
        <input v-model="newsletter" type="checkbox" />
        <label>{{ $t("contact_form_newsletter") }}</label>
      </div>

      <button type="submit">{{ $t("send_msg_btn") }}</button>
    </form>
  </div>
</template>

<script setup>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

let subject = "";
let from_email;
let from_name;
let name = "";
let to_email = " info@mostarrockschool.org";
let phone = "";
let message = "";
let privacyPolicy = false;
let newsletter = false;

const sendEmail = async () => {
  let msg = {
    personalizations: [
      {
        to: [
          {
            email: to_email,
            name: name,
          },
        ],
      },
    ],
    from: {
      email: from_email,
      name: "MoRS Contact Form",
    },
    subject: subject,
    content: [
      {
        type: "text/html",
        value: `
        <p>${message}</p>
        <p>${from_name}</p>
        <p>${phone}</p>
        `,
      },
    ],
  };
  await useFetch("/api/sendgrid", {
    method: "POST",
    body: msg,
  }).then((response) => {
    toast.success("You've sent an email", {
      position: "bottom-right",
      autoClose: 3500,
    });
  });
};
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

@media (width < 600px) {
  form {
    font-size: 0.875rem;
  }
}
</style>
