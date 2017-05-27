const uuidV4 = require('uuid/v4');

const shoppingList = {
  items: {},
  create: function(name, checked) {
    console.log('creating new item:', name);
    const item = {
      name: name,
      id: uuidV4(),
      checked: checked
    };
    this.items[item.id] = item;
    return item;
  },

  get: function() {
    console.log('returning list of items');
    return this.items;
  },

  delete: function(id) {
    console.log('deleting item with id:', id);
    const item = this.items[id];
    delete this.items[id];
    return item;
  },

  update: function(id, name, checked) {
    if (checked === 'true') checked = true;
    else checked = false;

    this.items[id] = {
      name: name || this.items[id].name,
      id: id,
      checked: checked || this.items[id].checked
    }
    return this.items[id];
  }
};

module.exports = { shoppingList };
