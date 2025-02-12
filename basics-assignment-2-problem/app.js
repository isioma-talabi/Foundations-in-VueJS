Vue.createApp({
  data() {
    return {
      valueOne: "",
      valueTwo: "",
      confirmedValueTwo: "",
    };
  },

  methods: {
    showAlert() {
      alert("I will be the Master of Vue!");
    },

    inputOne(event) {
      return (this.valueOne = event.target.value);
    },

    inputTwo(event) {
      this.valueTwo = event.target.value;
    },

    renderValueTwo() {
        this.confirmedValueTwo = this.valueTwo
    }
  },
}).mount("#assignment");
