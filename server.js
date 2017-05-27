// require the express package for our app
const express = require('express');

const { shoppingList } = require('./models/shoppingList.js');

// instantiate our express app
const app = express();

app.get('/', (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`);
});

app.get('/shoppingList', (request, response) => {
  const items = shoppingList.get(); // returns shopping list
  response.json({items: items});
});

// adds new item taking in name from query string
app.post('/shoppingList', (request, response) => {
  const newItem = shoppingList.create(request.query.name, false);
  response.json({newItem: newItem});
});

app.put('/shoppingList/:id', (request, response) => {
  const id = request.params.id;
  const name = request.query.name;
  const checked = request.query.checked;
  const updatedItem = shoppingList.update(id, name, checked);
  response.json({updatedItem: updatedItem});
});

app.delete('/shoppingList/:id', (request, response) => {
  const deletedItem = shoppingList.delete(request.params.id);
  response.json({deletedItem: deletedItem});
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`listening on port ${process.env.PORT || 8080}`);
});