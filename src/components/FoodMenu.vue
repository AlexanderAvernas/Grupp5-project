<script></script>
<template>
  <div class="food-menu">
    <h2 class="menu-title">Meny</h2>
    <div class="food-category">
      <h4 class="menu-header">Förrätter</h4>
      <p class="menu-item">Lorem 100kr</p>
      <p class="menu-item">Lorem 100kr</p>
      <p class="menu-item">Lorem 100kr</p>
    </div>
    <div class="food-category">
      <h4 class="menu-header">Varmrätter</h4>
      <p class="menu-item">Lorem 100kr</p>
      <p class="menu-item">Lorem 100kr</p>
      <p class="menu-item">Lorem 100kr</p>
    </div>
    <div class="food-category">
      <h4 class="menu-header">Deserter</h4>
      <p class="menu-item">Lorem 100kr</p>
      <p class="menu-item">Lorem 100kr</p>
      <p class="menu-item">Lorem 100kr</p>
    </div>
    <div class="food-category">
      <h4 class="menu-header">Drycker</h4>
      <p class="menu-item">Lorem 100kr</p>
      <p class="menu-item">Lorem 100kr</p>
      <p class="menu-item">Lorem 100kr</p>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap");
.food-menu {
  width: 50%;
  height: 100vh;
  position: absolute;
  overflow: scroll;
  top: 0;
  right: 0;
  font-family: "Cutive Mono", monospace;
  background-color: #1c1c1c;
  color: #fff;
}

.menu-title {
  margin-top: 3rem;
  margin-bottom: 3rem;
  text-align: center;
}

.food-category {
  margin-top: 3rem;
}

.menu-header {
  text-align: center;
}

.menu-item {
  text-align: center;
}
</style>
