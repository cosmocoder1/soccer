const axios = require('axios');

const append = (ranking, i) => {

  // format ranking for display
  const point = ranking.rank === 1 ? "pt" : "pts";
  const textnode = `${i + 1}. ${ranking.team}, ${ranking.rank}${point}`

  // append to DOM
  const newElement = document.createElement('div');
  const classes = newElement.classList;
  classes.add('ranking');
  newElement.innerHTML = textnode;
  document.getElementById("output").appendChild(newElement);

}

const clear = () => {
  let parent = document.getElementById("output");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
