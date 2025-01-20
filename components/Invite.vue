<template>
  <div class="invite-container">
    <div class="invite-content">
      <div class="left">
        <h1>Rock with us!</h1>
        <p>
          {{ $t("home_invite_p1") }}
        </p>
        <p>
          {{ $t("home_invite_p2") }}
        </p>
      </div>
      <div class="smaller-wrapper">
        <div class="smaller">
          <h3>{{ $t("home_enroll_h") }}</h3>
          <p>{{ $t("home_enroll_p") }}</p>
          <NuxtLink :to="localePath('/enroll')">
            <button class="btn">{{ $t("enroll_btn") }}</button>
          </NuxtLink>
        </div>
      </div>
      <div class="smaller-wrapper">
        <div class="smaller">
          <h3>{{ $t("become_member") }}</h3>
          <p>
            {{ $t("home_become_member_p") }}
          </p>
          <NuxtLink :to="localePath('/enroll')">
            <button>{{ $t("become_member_btn") }}</button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const localePath = useLocalePath();
</script>

<style scoped>
.invite-container {
  display: flex;
  flex-grow: 1;
  background-color: black;
  min-height: 32.8rem;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  box-sizing: border-box;
}

h1 {
  margin: 0;
}

a {
  text-decoration: none;
  width: 100%;
}

.invite-content {
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  max-width: 74rem;
  margin-inline: auto;
  justify-content: space-between;
}

.left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  width: 23.5rem;
  margin-inline: auto;
  h1 {
    padding-bottom: 1rem;
    padding-top: 1.7rem;
  }
}

.smaller-wrapper {
  display: flex;
  justify-content: flex-end;
  width: 23.5rem;
  margin-inline: auto;
  border-left: 1px solid rgba(255, 0, 0, 0.4);
}

.smaller {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  width: 21.5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 2.5rem;
    width: 100%;
    border-radius: 0.25rem;
    border: 1px solid red;
    margin: 1rem 0 0 0;
    background: transparent;
    color: red;
    line-height: 1.56rem;
    letter-spacing: 0.02rem;
    font-weight: bold;
    box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
  }

  button:hover {
    cursor: pointer;
    color: white;
    background-color: red;
  }

  h3 {
    font-family: "F37Hybrid-Bold";
    font-size: 1.5625rem;
    letter-spacing: 0.25px;
    color: red;
    padding-bottom: 1rem;
  }
}

p {
  margin: 0;
  padding-bottom: 1rem;
}

@media (width < 600px) {
  .smaller-wrapper {
    border-left: none;
    border-top: 1px solid rgba(255, 0, 0, 0.4);
    padding-bottom: 2rem;
    width: 100%;
  }

  .smaller,
  .left {
    align-items: center;
    width: 100%;
  }

  .invite-content {
    width: 100%;
  }

  button {
    width: 100%;
  }
}
</style>
