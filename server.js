const express = require('express');
const app = express();
const port = 1234;

app.use(express.static('public'));

app.listen(port, () => {
  console.log('serving on 1234')
});
