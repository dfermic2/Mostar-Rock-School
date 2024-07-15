<template>
  <div class="container">
    <div class="image-container">
      <img
        class="image"
        src="../assets/images/SWISS-AGENCY.png"
        alt="Germany logo "
      />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  width: 310px;
  background: rgb(237, 243, 252);
  background: hsl(144, 171, 230);
  box-shadow: 1px 1px 3px #d6d6d6;
  border-radius: 0.3rem;
}

.image-container {
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.image {
  width: 200px;
}
</style>
