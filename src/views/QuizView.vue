<script setup>
import QuizComp from "../components/QuizComp.vue";
</script>

<template>
  <div id="cardquiz">
    <QuizComp> </QuizComp>
    <QuizResult></QuizResult>
  </div>
  <div class="container text-center">
    <div class="d-flex justify-content-center">
      <div class="d-flex align-items-center"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null,
      count: null,
    };
  },

  methods: {
    counted1(value, count) {
      this.value = value;
      this.count = count;
    },
  },
};
</script>

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
</style>
