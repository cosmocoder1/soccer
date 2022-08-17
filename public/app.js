const chant = new Audio('./assets/South_Africa_Vuvuzela_Chant_Holland_vs._Denmark.mp3');
const axios = require('axios');
const { process, append, appendPastSeasons, clear, clearPastSeasons, save } = require('../lib/helpers');

const app = Vue.createApp({
  methods: {
    processMatchData() {
      clear();
      document.getElementById("match_values").value = "";
      let values = document.getElementById("match_values").value;
      let results = process(values);
      append(results);
      save(results);
      chant.play();
    },
    displayPastSeasons() {
      clearPastSeasons();
      appendPastSeasons();
    }
  }
})

app.mount('#app')