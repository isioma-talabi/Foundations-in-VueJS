Vue.createApp({
  data: function () {
    return {
      myName: "Isioma Pamela Talabi",
      myAge: 34,
      myAgeInFiveYears: 34 + 5,
      favouriteImage:
        "https://upload.wikimedia.org/wikipedia/commons/2/2c/Virgen_de_guadalupe1.jpg",
      inputValue: "Our Lady of Guadalupe",
    };
  },
  methods: {
    randomNumber() {
      return Math.random();
    },
  },
}).mount("#assignment");
