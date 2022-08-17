const chant = new Audio('./assets/South_Africa_Vuvuzela_Chant_Holland_vs._Denmark.mp3');
const axios = require('axios');
const { process, append, clear, save } = require('../lib/helpers');

const app = Vue.createApp({
  methods: {
    processMatchData() {
      clear();

      let values = document.getElementById("match_values").value;
      let result = process(values);

      result.forEach((ranking, i) => {
        append(ranking, i);
      });

      document.getElementById("match_values").value = "";
      chant.play();
      save(result);
    },
    displayPastSeasons() {
      // retrieve and display persisted season data from db
    }
  }
})

app.mount('#app')