const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  photo: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const Item = mongoose.model('Item', itemSchema, 'items');

module.exports = Item;
