const mongoose = require("mongoose");

const volunteerRegister = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },

  orgTitle: {
    type: String,
    required: true,
  },
});

const VolunteerUser = mongoose.model("VolunteerUser", volunteerRegister);

module.exports = VolunteerUser;
