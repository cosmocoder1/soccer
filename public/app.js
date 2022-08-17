
const app = Vue.createApp({
  methods: {
    processMatchData() {
      let values = document.getElementById("match_values").value;
      let result = process(values);
      result.forEach((ranking, i) => {
        let point = ranking.rank === 1 ? "pt" : "pts";
        const textnode = `${i + 1}. ${ranking.team}, ${ranking.rank}${point}`
        let newElement = document.createElement('div');
        newElement.innerHTML = textnode;
        document.getElementById("output").appendChild(newElement);
      })
      document.getElementById("match_values").value = "";
    }
  }
})

const process = (data) => {
  let trimmed = data.split('').filter(val => val !== ",").join('').split(' ');

  let string = "";
  let newData = [];

  for (let i = 0; i < trimmed.length; i++) {
    if (isNaN(trimmed[i])) {
      string = string.concat(trimmed[i]);
    } else {
      newData.push(string);
      newData.push(trimmed[i]);
      string = "";
    }
  }

  let tallies = {};
  for (let i = 0; i < newData.length; i += 4) {

    let teamOne = newData[i];
    let teamTwo = newData[i + 2];
    let scoreOne = newData[i + 1];
    let scoreTwo = newData[i + 3];

    if (tallies[teamOne] === undefined) {
      tallies[teamOne] = 0;
    }

    if (tallies[teamTwo] === undefined) {
      tallies[teamTwo] = 0;
    }

    let tie = scoreOne === scoreTwo;
    let winningTeam = scoreOne > scoreTwo ? teamOne : teamTwo;

    if (tie) {
      tallies[teamOne]++;
      tallies[teamTwo]++;
    } else {
      tallies[winningTeam] += 3;
    }
  }

  let outputString = '';
  let collection = [];


  for (let key in tallies) {
    // outputString = outputString.concat(`${key}, ${tallies[key]}<br>`);
    collection.push({ team: key, rank: tallies[key] });
  }

  collection.sort((a, b) => {
    return b.rank - a.rank || a.team.localeCompare(b.team);
  })
  //.forEach((ranking, i) => {
  //   let point = ranking.rank === 1 ? "pt" : "pts";
  //   const textnode = `${i + 1}. ${ranking.team}, ${ranking.rank}${point}`
  //   let newElement = document.createElement('div');
  //   newElement.innerHTML = textnode;
  //   document.getElementById("output").appendChild(newElement);
  // })

  return collection;



}

app.mount('#app')