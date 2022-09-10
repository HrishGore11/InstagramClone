const mongoose = require("mongoose");
const { ObjectID } = mongoose.Schema.Types;

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  Photo: {
    type: String,
    default: "no Photo",
  },
  PostedBy: {
    type: ObjectID,
    ref: "user",
  },
});

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
