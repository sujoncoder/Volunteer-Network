const mongoose = require("mongoose");

const addEvent = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    required: true,
  },
});

const EventUser = mongoose.model("EventUser", addEvent);

module.exports = EventUser;
