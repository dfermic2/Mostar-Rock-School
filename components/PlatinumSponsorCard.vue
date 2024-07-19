<template>
  <div>
    <div class="container">
      <div class="left-side p-0625">
        <img
          class="image"
          src="../assets/images/Norwegian Embassy Sarajevo.png"
          alt="Norway Embassy Sarajevo logo"
        />
      </div>
      <div class="right-side">
        <h3 class="f-size-m">Norwegian Embassy Sarajevo</h3>
        <p class="f-size-s">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum dicta
          illum consectetur facere deleniti quia temporibus saepe, cumque
          pariatur dolorum, sunt blanditiis vitae ab sed suscipit atque autem
          ipsa voluptatum?
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.container {
  width: 580px;
  height: 215px;
  display: flex;
  justify-content: space-around;
  box-shadow: 1px 1px 3px #d6d6d6;
  border-radius: 0.3125rem;
}

.p-0625 {
  padding-inline: 0.625rem;
}

.left-side {
  width: 215px;
  background: rgb(237, 243, 252);
  background: hsl(144, 171, 230);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.image {
  width: 195px;
}

.right-side {
  padding: 1.875rem 2.5rem;
}

.right-side p {
  margin-top: 1.0625rem;
  text-align: justify;
  font-size: 0.9rem;
}

.f-size-s {
  font-size: 0.875rem;
}

.f-size-m {
  font-size: 1.0625rem;
}
</style>
