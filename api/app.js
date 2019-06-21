const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const postsRoutes = require("./routes/posts");
const comentRoutes = require("./routes/comentars");
const userRoutes = require("./routes/user");
require("dotenv").config();

// connect
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${
    process.env.DB_PWD
  }@cluster0-hs8ib.mongodb.net/${
    process.env.DB_NAME
  }?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true
  }
);

// Modelware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method == "OPTIONS") {
    return res.Status(200).json({});
  }
  next();
});

// 'morgan' გამოიყენება ტერმინალში/კონსოლში როუტების დასანახად.
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Routes
app.use("/posts", postsRoutes);
app.use("/coment", comentRoutes);
app.use("/user", userRoutes);
//
app.use(express.static(path.resolve(__dirname + "/../dist/fast")));

app.get("*", function(req, res) {
  console.log();
  res.sendFile(path.resolve(__dirname + "/../dist/fast/index.html"));
});

// Errors
app.use((req, res, next) => {
  const error = new Error("Page Not Found - Error 404");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
