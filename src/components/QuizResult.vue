

<script>
export default {
  data() {
    return {
      value: null,
      count: null,
      question: null,
    };
  },

  methods: {
    counted1(val) {
      this.value = val.value;
      this.question = val.question;
      console.log(this.value);
    },
  },
};
</script>
