<template>
  <div class="container">
    <div class="left-side p-inline-1">
      <img
        class="image"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F015%2F309%2F575%2Fnon_2x%2Fnorway-waving-flag-realistic-transparent-background-free-png.png&f=1&nofb=1&ipt=194377af285d70a77f2125a5cb1ad2faf538ee47e318e3cfb8c585151e5e799a&ipo=images"
        alt="Norway Embassy Sarajevo logo"
      />
    </div>
    <div class="right-side p-1">
      <h3>Norwegian Embassy Sarajevo</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum dicta
        illum consectetur facere deleniti quia temporibus saepe, cumque pariatur
        dolorum, sunt blanditiis vitae ab sed suscipit atque autem ipsa
        voluptatum?
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  width: 550px;
  height: 200px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-around;
  box-shadow: 1px 1px 3px #d6d6d6;
  border-radius: 0.2rem;
}

.p-1 {
  padding: 1rem;
}

.p-inline-1 {
  padding-inline: 1rem;
}

.left-side {
  width: 150px;
  background: rgb(237, 243, 252);
  background: hsl(144, 171, 230);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.image {
  width: 200px;
}
</style>
