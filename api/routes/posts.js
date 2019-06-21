const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Post = require("../models/posts");

//GET
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "GET Route To /Posts"
  });
});

// POST
router.post("/", (req, res, next) => {
  const addpost = new Post({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    body: req.body.body
  });
  addpost
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Post Successfully Added !",
        createdPost: {
          _id: result._id,
          title: result.title,
          body: result.body
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;
