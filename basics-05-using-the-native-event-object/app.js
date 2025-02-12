const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },

  watch: {
    counter(value) {
      if (value > 50) {
        return (this.counter = 0);
      }
    },
  },

  computed: {
    fullName() {
      if (this.name === "") {
        return " ";
      }
      return this.name + " " + "Talabi";
    },
  },

  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetCounter() {
      this.counter = 0;
    },

    resetName() {
      this.name = "";
    },
  },
});

app.mount("#events");
