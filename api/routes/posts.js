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

// GET ID Info
router.get("/:postId", async (req, res, next) => {
  // throw new Error('error');
  const id = req.params.postId;
  let post;
  try {
    post = await Post.findById(id).exec();
    console.log(post);
    res.status(200).json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

// UPDATE
router.patch("/:postId", (req, res, next) => {
  const id = req.params.postId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Post.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json({
        updateMessage: "Successfully Updated !"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

// DELETE
router.delete("/:postId", (req, res, next) => {
  const id = req.params.postId;
  Post.remove({ _id: id })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json({
        deleteMessage: "Post Successfully Deleted !"
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
