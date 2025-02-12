Vue.createApp({
  data() {
    return {
      counter: 0,
      result: "",
    };
  },

  watch: {
    displayResult() {
      console.log("Watcher executing...");
      setTimeout(() => {
        this.result = "";
        this.counter = 0;
      }, 5000);
    },
  },

  computed: {
    displayResult() {
      if (this.counter < 37) {
        return (this.result = "Not there yet!");
      } else if (this.counter > 37) {
        return (this.result = "Too much!");
      } else if (this.counter === 37) {
        return (this.result = 37);
      }
    },
  },

  methods: {
    add5() {
      this.counter = this.counter + 5;
    },

    add1() {
      this.counter = this.counter + 1;
    },
  },
}).mount("#assignment");
