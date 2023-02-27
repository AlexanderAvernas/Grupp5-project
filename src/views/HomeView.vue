<script setup>
import FoodMenu from "../components/FoodMenu.vue";
</script>

<template>
  <div class="landing-page">
    <h1 class="landing-title">Lorem Ipsum</h1>
    <button class="landing-btn">BOKA BORD</button>
    <p class="landing-text">
      En kort beskrivning av konceptet. Att bordet bokas, maten bokas och allt
      är redo när kunden väl är framme bla bla bla och mer bla
    </p>
  </div>
  <FoodMenu />
</template>


<style scoped>
/* Fonts imports from google fonts */
@import url("https://fonts.googleapis.com/css2?family=Mrs+Sheppards&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Amiko&display=swap");

.landing-page {
  background-image: url("../assets/pics/landing_page.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 50vw;
  height: 100vh;
}

.landing-title {
  position: relative;
  width: 18vw;
  height: 8vh;
  left: 15vw;
  top: 3vh;
  font-family: "Mrs Sheppards";
  font-style: normal;
  font-weight: 400;
  font-size: 7.5rem;
  line-height: 9.3rem;
  text-align: center;
  color: #fff;
  text-shadow: -8px 7px 4px #000000;
}

.landing-btn {
  position: relative;
  width: 15rem;
  height: 5vh;
  left: 18vw;
  top: 35vh;
  color: #fff;
  background-color: #000;
  border: 2px solid #ad8e6d;
  border-radius: 30px;
}

.landing-text {
  position: relative;
  width: 28vw;
  height: 12vh;
  left: 11vw;
  top: 45vh;
  font-family: "Amiko", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 24px;
  text-align: center;
  color: #fff;
}

@media screen and (max-width: 440px) {
  .landing-page {
    width: 100vw;
  }
  .landing-title {
    width: 70vw;
    font-size: 6.5rem;
  }
  .landing-text {
    width: 80vw;
  }
}
</style>

