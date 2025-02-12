Vue.createApp({
  data: function () {
    return {
      courseGoalA: "Complete this Vue.js course",
      courseGoalB: "<h3>Master Vue JS</h3>",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB
      }
    }
  }
}).mount("#user-goal");
