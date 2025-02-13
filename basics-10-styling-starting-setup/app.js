const app = Vue.createApp({
     data() {
         return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
         }
     },

     computed: {
        boxAClasses() {
            return {active: this.boxASelected};
            // computed can also be used to handle dynamic styling
        }
     },


     methods: {
        boxSelected(box) {
            if (box === "A") {
                this.boxASelected = !this.boxASelected; 
                // This makes the box toggleable. Ironic but interesting!
            } else if (box === "B") {
                this.boxBSelected = true;
            } else if (box === "C") {
                this.boxCSelected = true;
            }
        }
     }
})

app.mount("#styling")