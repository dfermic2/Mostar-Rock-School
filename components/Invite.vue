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
          <h1>Enrol in the school</h1>
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
          <h1>Become a member</h1>
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
}

h1 {
  font-family: "F37Hybrid-Bold";
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

  h1 {
    font-size: 2.5rem;
    padding-bottom: 1rem;
  }
}

.smaller-wrapper {
  display: flex;
  justify-content: flex-end;
  width: 23.5rem;
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
    width: 20.5rem;
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

  h1 {
    font-size: 1.56rem;
    letter-spacing: 0.25px;
    color: red;
    padding-bottom: 1rem;
  }
}

p {
  font-size: 1.0625rem;
  line-height: 1.6875rem;
  margin: 0;
  padding-bottom: 1rem;
}
</style>
