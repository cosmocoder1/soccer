
const app = Vue.createApp({
  methods: {
    processMatchData() {
      let values = document.getElementById("match_values").value;
      let result = process(values);
      result.forEach((ranking, i) => {
        append(ranking, i);
      });
      document.getElementById("match_values").value = "";
    }
  }
})

const process = (data) => {

  // format input for processing (remove commas, account for team name spacing, etc.)
  let trimmed = data.split('').filter(val => val !== ",").join('').split(' ');
  let string = "";
  let newData = [];

  for (let i = 0; i < trimmed.length; i++) {
    if (isNaN(trimmed[i])) {
      string = string.concat(trimmed[i] + " ");
    } else {
      newData.push(string);
      newData.push(trimmed[i]);
      string = "";
    }
  }

  // analyze game outcomes and catalog team standings
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

  // sort team rankings in descending order, first by score - then alphabetically
  let collection = [];

  for (let key in tallies) {
    collection.push({ team: key, rank: tallies[key] });
  }

  collection.sort((a, b) => {
    return b.rank - a.rank || a.team.localeCompare(b.team);
  })
  return collection;
}

const append = (ranking, i) => {

  // format ranking for display
  const point = ranking.rank === 1 ? "pt" : "pts";
  const textnode = `${i + 1}. ${ranking.team}, ${ranking.rank}${point}`

  // append to DOM
  const newElement = document.createElement('div');
  newElement.innerHTML = textnode;
  document.getElementById("output").appendChild(newElement);

}

app.mount('#app')