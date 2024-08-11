<template>
  <div>
    <div class="container">
      <div class="page-number-container">
        <section class="page-number disabled"><</section>
        <section class="page-number active">1</section>
        <section class="page-number">2</section>
        <section class="page-number">3</section>
        <section class="page-number">4</section>
        <section class="page-number">></section>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  display: flex;
  flex-grow: 1;
  flex-direction: row-reverse;
  max-width: 1180px;
  height: 40px;
  margin-bottom: 100px;
  box-sizing: border-box;
}

.page-number-container {
  box-sizing: border-box;

  max-width: 490px;
  height: 40px;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
}

.page-number {
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  background: #fff;
  border: 2px solid #ff0000;
  color: #ff0000;
  width: 40px;
  height: 40px;
  padding: 5px 16px;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
}

.page-number:hover {
  background: #ff0000;
  color: #fff;
  transition: 200ms;
}

.page-number:nth-child(1) {
  background: #fff;
  color: #ff0000;
  cursor: not-allowed;
}

.page-number:nth-child(2) {
  background: #ff0000;
  color: #fff;
}

.page-number:not(hover) {
  background: #fff;
  color: #ff0000;
  transition: 200ms;
}

.disabled {
  border: 2px solid #facccc;
  color: #facccc;
}

.active {
  background: #ff0000;
  color: #fff;
}
</style>
