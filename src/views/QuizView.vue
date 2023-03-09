<script setup>
import QuizComp from "../components/QuizComp.vue";
</script>

<template>
  <div id="Quizdefault">
    <h2>Quiz</h2>
    <h3>
      Svara rätt på alla fem frågor och vinn 50kr rabatt på din beställning.
    </h3>
  </div>
  <div id="cardquiz">
    <QuizComp> </QuizComp>
  </div>
  <div class="container text-center">
    <div class="d-flex justify-content-center">
      <div class="d-flex align-items-center"></div>
    </div>
  </div>
</template>

<script></script>

<style>
body {
  background: url(../assets/pics/quiz_page.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
}

#card {
  background: #1c1c1c;
  width: 744px;
  height: 449px;
  border: 2px solid #6e6e6e;
  border-radius: 26px;
}

#cardquiz {
  margin-top: 20vh;
  margin-bottom: 10vh;
  display: grid;
}

#col {
  margin: auto;
}

#Quizdefault h2 {
  font-family: amiko;
  font-weight: 400;
  font-size: 35px;
  color: white;
  position: relative;
  text-align: center;
  top: 50px;
}
#Quizdefault h3 {
  font-family: amiko;
  font-weight: 400;
  font-size: 18px;
  color: white;
  position: relative;
  top: 50px;
  text-align: center;
}
</style>
