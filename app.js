require("dotenv").config();

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

require("./models/connection");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var recipesRouter = require("./routes/recipes");
var CreaterecipesRouter = require("./routes/createrecipes");

var app = express();

const cors = require("cors");

const fileUpload = require("express-fileupload");
app.use(cors());
app.use(fileUpload());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
//je définis un params à ma route
app.use("/recipes", recipesRouter);
app.use("/createrecipes", CreaterecipesRouter);

module.exports = app;
