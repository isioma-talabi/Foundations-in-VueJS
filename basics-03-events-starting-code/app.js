const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },

  methods: {
    add(num) {
      return (this.counter = this.counter + num);
    },

    minus(num) {
      return (this.counter = this.counter - num);
    },

    setName(event, lastname) {
      this.name = event.target.value + ' ' + lastname;
      
    },

    confirmInput() {
      this.confirmedName = this.name;
    }
  },
});

app.mount("#events");
