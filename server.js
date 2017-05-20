// require the express package for our app
const express = require('express');

// instantiate our express app
const app = express();

app.get('/', (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`);
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`listening on port ${process.env.PORT || 8080}`);
});