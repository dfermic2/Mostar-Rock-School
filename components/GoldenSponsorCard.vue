<template>
  <div>
    <div class="container">
      <div class="image-container p-125">
        <img
          class="image"
          src="../assets/images/SWISS-AGENCY.png"
          alt="Swiss Agency logo"
        />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  width: 380px;
  height: 180px;
  background: rgb(237, 243, 252);
  background: hsl(144, 171, 230);
  box-shadow: 1px 1px 3px #d6d6d6;
  border-radius: 0.3125rem;
}

.image-container {
  display: flex;
  justify-content: center;
}

.p-125 {
  padding: 1.25rem;
}

.image {
  width: 340px;
  height: 140px;
}
</style>
