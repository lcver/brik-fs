const express = require("express");
const { index, create, update, destroy, find } = require("./controller");
const router = express();
const { authenticateUser } = require("../../../middlewares/auth");
const upload = require("../../../middlewares/multer");

router.use(authenticateUser);
router.get("/products", index);
router.get("/products/:id", find);
router.put("/products/:id", upload.single("image"), update);
router.delete("/products/:id", destroy);
router.post("/products", upload.single("image"), create);

module.exports = router;
