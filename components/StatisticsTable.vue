<template>
  <div>
    <div class="container">
      <div class="pair">
        <div class="cell bb-1 br-1 bt-1">
          <h1>465</h1>
          <span>{{ $t("statistics_table_cell1") }}</span>
        </div>
        <div class="cell bb-1 bt-1">
          <h1>100+</h1>
          <span>{{ $t("statistics_table_cell2") }}</span>
        </div>
      </div>

      <div class="pair">
        <div class="cell bb-1 br-1">
          <h1>200+</h1>
          <span>{{ $t("statistics_table_cell3") }}</span>
        </div>
        <div class="cell bb-1">
          <h1>8-57</h1>
          <span>{{ $t("statistics_table_cell4") }}</span>
        </div>
      </div>

      <div class="pair">
        <div class="cell br-1 bb-1">
          <h1>8900+</h1>
          <span>{{ $t("statistics_table_cell5") }}</span>
        </div>
        <div class="cell bb-1">
          <h1>3000+</h1>
          <span>{{ $t("statistics_table_cell6") }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

.pair {
  display: flex;
  flex-wrap: wrap;
}
.cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-inline: auto;
  width: 20rem;
  height: 9.4rem;
  gap: 1.5rem;
  padding-top: 0.5rem;
  box-sizing: border-box;
}

.bt-1 {
  border-top: 1px solid red;
}

.br-1 {
  border-right: 1px solid red;
}

.bb-1 {
  border-bottom: 1px solid red;
}

h1 {
  font-size: 5.3rem;
  letter-spacing: 0.015rem;
  margin: 0;
  color: red;
}

span {
  font-family: "F37Hybrid-Bold";
  font-size: 1rem;
  letter-spacing: 0.015rem;
  margin: 0;
  color: white;
}

@media (width < 640px) {
  .br-1 {
    border-right: none;
  }
}
</style>
