const express = require("express");
const router = express.Router();
const Post = require("../Models/Posts");
const auth_user = require("../Middlewares/AuthUser");

router.get("/AllPosts", auth_user, async (req, res) => {
  try {
    let AllPosts = await Post.find().populate("PostedBy", "_id Name");
    if (AllPosts == "") {
      return res.json({
        message: "Posts not found",
        success: false,
        data: AllPosts,
      });
    } else {
      return res.json({
        message: "success",
        success: true,
        data: AllPosts,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

router.post("/createPost", auth_user, (req, res) => {
  const { title, body } = req.body;
  if (!title || !body) {
    return res.status(422).json({ error: "Please add all the Fields" });
  }
  const post = new Post({
    title,
    body,
    PostedBy: req.user,
  });
  post
    .save()
    .then((result) => {
      res.json({ Post: result });
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(req.user);
});

router.get("/MyPosts", auth_user, async (req, res) => {
  try {
    let MyPosts = await Post.find({ PostedBy: req.user._id }).populate(
      "PostedBy",
      "_id Name"
    );
    if (MyPosts == "") {
      return res.json({
        message: "Posts not found",
        success: false,
        MyPosts: MyPosts,
      });
    } else {
      return res.json({
        message: "success",
        success: true,
        MyPosts: MyPosts,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});
module.exports = router;
