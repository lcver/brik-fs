var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

var app = express();

//router
const usersRouter = require("./app/api/v1/users/router");
const categoriesRouter = require("./app/api/v1/categories/router");
const productsRouter = require("./app/api/v1/products/router");

const v1 = "/api/v1";

const notFoundMiddleware = require("./app/middlewares/not-found");
const handleErrorMiddleware = require("./app/middlewares/handle-error");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors({ origin: true }));

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hello world",
    });
});

app.use(v1, usersRouter);
app.use(v1, categoriesRouter);
app.use(v1, productsRouter);

app.use(notFoundMiddleware);
app.use(handleErrorMiddleware);

module.exports = app;
