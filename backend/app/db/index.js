const mongoose = require("mongoose");

// const { urlDb } = require("../config");

mongoose.connect("mongodb://127.0.0.1:27017/db_brik_test_fs");

const db = mongoose.connection;

module.exports = db;
