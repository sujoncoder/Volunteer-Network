const mongoose = require("mongoose");

const createRegister = new mongoose.Schema({
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
  password: {
    type: String,
    required: true,
  },
});

const CreateUser = mongoose.model("CreateUser", createRegister);

module.exports = CreateUser;
