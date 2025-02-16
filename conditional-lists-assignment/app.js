const app = Vue.createApp({
  data() {
    return {
      inputTasks: "",
      tasks: [],
      buttonLabel: "Hide List",
      toggleList: true,
    };
  },

  methods: {
    addTasks() {
      this.tasks.push(this.inputTasks);
    },
    buttonClicked() {
      this.toggleList = !this.toggleList;

      if (this.toggleList === true) {
        return (this.buttonLabel = "Hide List");
      } else if (this.toggleList === false) {
        return (this.buttonLabel = "Show List");
      }
    },
  },
});

app.mount("#assignment");
