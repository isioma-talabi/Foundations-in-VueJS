const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      paragraphIsVisible: true,
      userInputTwo: "",
    };
  },

  methods: {
    clickedButton() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
  },
  computed: {
    changeStyles() {
      if (this.userInput === "user1") {
        return { user1: true };
      } else if (this.userInput === "user2") {
        return { user2: true };
      }
      if (this.paragraphIsVisible === true) {
        return { visible: true };
      } else if (this.paragraphIsVisible === false) {
        return { hidden: true };
      }
    },
  },
});

app.mount("#assignment");
