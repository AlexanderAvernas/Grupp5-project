<script setup>
import FoodMenu from "../components/FoodMenu.vue";
</script>

<template>
  <main class="landing-page">
    <h1>Lorem Ipsum</h1>
    <button>BOKA BORD</button>
    <p>
      En kort beskrivning av konceptet. Att bordet bokas, maten bokas och allt
      är redo när kunden väl är framme bla bla bla och mer bla
    </p>
  </main>
  <FoodMenu />
</template>
<style scoped>
/* Fonts imports from google fonts */
@import url("https://fonts.googleapis.com/css2?family=Mrs+Sheppards&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Amiko&display=swap");

h1 {
  position: absolute;
  width: 18rem;
  height: 8rem;
  left: 10rem;
  top: 8rem;
  font-family: "Mrs Sheppards";
  font-style: normal;
  font-weight: 400;
  font-size: 120px;
  line-height: 150px;
  text-align: center;
  color: #fff;
  text-shadow: -8px 7px 4px #000000;
}

button {
  position: absolute;
  width: 14rem;
  height: 3rem;
  left: 12.5rem;
  top: 30rem;
  color: #fff;
  background-color: #000;
  border: 2px solid #ad8e6d;
  border-radius: 30px;
}

p {
  position: absolute;
  width: 29rem;
  height: 12rem;
  left: 6rem;
  top: 36rem;
  font-family: "Amiko", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #000;
}
</style>
