const { userLogin, registerUser } = require("../controllers/users.controller");

const router = require("express").Router();

router.post("/login", userLogin);
router.post("/register", registerUser);

module.exports = router;
