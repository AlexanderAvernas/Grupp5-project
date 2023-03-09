<script></script>

<template>
  <div class="order-container">
    <h2>BESTÄLLNING</h2>
    <ul id="order-list">
      <li id="order-item">
        {{ $store.state.food.product.toString().split(",").join("\n") }}
      </li>
      <li id="order-item">
        {{ $store.state.food.price.toString().split(",").join("\n") }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Amiko:wght@400;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Grape+Nuts&f&display=swap");

.order-container {
  background-color: #d9d9d9;
  color: #1c1c1c;
  width: 28rem;
  height: 31.4rem;
  margin: 1.5rem;
}

.order-container > h2 {
  display: flex;
  justify-content: center;
  font-family: "Amiko", sans-serif;
  font-size: 30px;
  margin-top: 5vh;
}

#order-list {
  display: flex;
  justify-content: center;
  list-style: none;
  font-family: "Grape Nuts", cursive;
  font-size: 30px;
  margin-top: 1.5rem;
  padding: 0;
}

#order-item {
  padding: 1rem;
  max-width: 100%;
  white-space: pre-wrap;
}

@media only screen and (max-width: 446px) {
  .order-container {
    width: 100%;
  }
}
</style>
