const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    link: {
      type: String, 
      required: true,
    },
  });

const Event = mongoose.model('Event', eventSchema , 'events');

module.exports = Event;
