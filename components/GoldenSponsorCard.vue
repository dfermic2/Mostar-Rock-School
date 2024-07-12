<template>
  <div class="container">
    <div class="image-container">
      <img
        class="image"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8d%2FGerman_Flag_Wavy.svg%2F1280px-German_Flag_Wavy.svg.png&f=1&nofb=1&ipt=3f599b53f16ad838ca50f0c0ec0d5cdb1b563d3bce8f8bf3f59e9e9a16a0b896&ipo=images"
        alt="Germany logo "
      />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  width: 350px;
  background: rgb(237, 243, 252);
  background: hsl(144, 171, 230);
  box-shadow: 1px 1px 3px #d6d6d6;
  border-radius: 0.3rem;
}

.image-container {
  display: flex;
  justify-content: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.image {
  width: 200px;
}
</style>
