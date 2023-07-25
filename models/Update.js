const mongoose = require('mongoose');

const updateSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const Update = mongoose.model('Update', updateSchema, 'updates');

module.exports = Update;
