<template>
  <div class="card" style="width: 18rem">
    <img src="" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ quiz.fråga }}</h5>
      <a @click="count()" class="btn">{{ quiz.svar }}</a>
      <a @click="count()" class="btn">{{ quiz.felsvar1 }}</a>
      <a @click="count()" class="btn">{{ quiz.felsvar2 }}</a>
      <a @click="count()" class="btn">{{ quiz.felsvar3 }}</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    quiz: {
      required: true,
      type: Object,
    },
  },

  count() {
    this.$emit("counted");
  },
};
</script>
