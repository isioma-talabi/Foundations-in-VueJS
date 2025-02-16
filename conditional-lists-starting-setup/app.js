const app = Vue.createApp({
  data() {
    return {
      enteredGoalsValue: "",
      goals: [],
    };
  },

  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalsValue);
    },

    removeGoal(idx) {
      this.goals.splice(idx, 1)
    }
  },
});

app.mount("#user-goals");
