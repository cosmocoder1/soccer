
const app = Vue.createApp({
  methods: {
    processMatchData() {
      let values = document.getElementById("match_values").value;
      let result = process(values);
      document.getElementById("output").innerHTML = result;
      document.getElementById("match_values").value = "";
    }
  }
})

const process = (data) => {
  return data;
}

app.mount('#app')