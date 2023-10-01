const express = require("express");
const router = express();
const { authSignUp, authSignIn } = require("./controller");
const { authenticateUser } = require("../../../middlewares/auth");

router.post("/auth/register", authSignUp);
router.post("/auth/login", authSignIn);

module.exports = router;
