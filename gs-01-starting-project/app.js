Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue)
        }
    }
}).mount('#app');


/* const inputGoal = document.getElementById("goal");
const addButton = document.getElementById("add-button");
const listGoal = document.querySelector("ul");

function addGoal() {
    const enteredValue = inputGoal.value;
    const listItemEl = document.createElement("li");
    listItemEl.textContent = enteredValue;
    listGoal.appendChild(listItemEl);
    inputEl.value = ""
}

addButton.addEventListener("click", addGoal); */