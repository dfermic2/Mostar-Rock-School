<template>
  <div class="invite-container">
    <div class="invite-content">
      <div class="left">
        <h1>Rock with us!</h1>
        <p>
          Two options to Rock with us! give you access and opportunities inside
          our musical community.
        </p>
        <p>
          Become a member or Enrol into our regular educational program as a
          student and start your journey in #theschoolthatrocks. Collaborate,
          create, connect, rehearse, learn, publish, perform, participate and
          share with us. Whether it's your hobby or a potential career, we'll
          make it happen together.
        </p>
      </div>
      <div class="smaller-wrapper">
        <div class="smaller">
          <h3>Enrol in the school</h3>
          <p>
            If you already play or sing, or if you want to learn to play and
            sing and participate actively in music creation, you have the
            opportunity to apply to our unique and original music education
            program that encompasses the music industry from start to finish.
          </p>
          <button>ENROLL NOW</button>
        </div>
      </div>
      <div class="smaller-wrapper">
        <div class="smaller">
          <h3>Become a member</h3>
          <p>
            As a member you'll gain exclusive access to a world of music,
            creativity and collaboration. Whether you're a musician, music
            enthusiast or you want to support our cause, joining our community
            means you can participate in workshops, jam sessions, concert and
            events, and you will help us nurture young talent, promote music and
            foster cultural exchange.
          </p>
          <button>BECOME A MEMBER</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

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
    max-width: 20.5rem;
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
