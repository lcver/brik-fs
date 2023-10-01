const express = require("express");
const router = express();
const { create, index, destroy } = require("./controller");
const { authenticateUser } = require("../../../middlewares/auth");

router.use(authenticateUser);
router.get("/categories", index);
router.post("/categories", create);
router.delete("/categories/:id", destroy);

module.exports = router;
