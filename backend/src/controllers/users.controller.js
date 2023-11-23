const CreateUser = require("../models/registerUsers.model");
const users = require("../views/users");

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  res.status(200).json({
    data: email,
    password,
  });
};

const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  const newUser = {
    name,
    email,
    password,
  };

  users.push(newUser);
  res.status(201).json({
    data: users,
  });
};

module.exports = {
  userLogin,
  registerUser,
};
