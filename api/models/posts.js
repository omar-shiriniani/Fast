const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, require: true },
  body: { type: String, require: true }
});

module.exports = mongoose.model("posts", postSchema);
