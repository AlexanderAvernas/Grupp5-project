<script setup>
import QuizComp from "../components/QuizComp.vue";
</script>

<template>
  <QuizComp
    v-for="quiz in quizes"
    :key="quiz.id"
    :quiz="quiz"
    @counted="counted1"
  >
  </QuizComp>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      count: 1,
      quizes: [],
    };
  },

  mounted() {
    this.fetchData();
    console.log(this.filterQuiz);
  },

  methods: {
    async fetchData() {
      const response = await axios.get("frågesport.json");
      const result = await response.data;
      this.quizes = result;
    },

    counted1() {
      this.count += 1;
    },
  },

  computed: {
    filterQuiz() {
      return this.quizes.filter((quiz) => quiz.id === this.count);
    },
  },
};
</script>
