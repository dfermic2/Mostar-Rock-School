<template>
  <div>
    <div class="container">
      <div class="content">
        <h1>Spread the word!</h1>
        <p>
          Help us amplify our message by sharing our mission and impact with
          your friends, family, and colleagues. Together, we can reach more
          individuals and organizations who believe in the power of music to
          change lives.
        </p>
        <MediaLinks :media-position="'normal'" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  background: black;
  border-radius: 0.5rem;
  max-width: 73.75rem;
  min-height: 20rem;
  padding: 3.125rem 5rem;
  background-image: url("../public/assets/images/spreadTheWordWoman.png");
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: right;
  box-sizing: border-box;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
}

.container:hover {
  background-size: 77%;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  font-weight: 600;
  line-height: 1.5rem;
  font-size: 0.9rem;
  max-width: 35rem;
}

h1 {
  font-family: "F37Hybrid-Bold";
  font-size: 2.5rem;
  line-height: 2.19rem;
  margin: 0;
}
</style>
