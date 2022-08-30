import { PostModel } from "../models/PostModel.js";
import mongoose from "mongoose";
// import { post } from "moongose/routes/users.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    // console.log(posts);
    res.status(200).json(posts); 
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createPost = async (req, res) => {
  try {
    const newPost = req.body;
    const filter = {name:newPost.name};
    const update = {score:newPost.score};
    let check = await PostModel.findOneAndUpdate(filter, update);
    if (check == null) {
      const post = new PostModel({
        _id: new mongoose.Types.ObjectId().toHexString(),
        name: newPost.name,
        score: newPost.score,
      });
      await post.save();
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// export const updatePost = async (req, res) => {
//   try {
//     const updatePost = req.body;

//     const post = await PostModel.findOneAndUpdate(
//       { _id: updatePost._id },
//       updatePost,
//       { new: true }
//     );

//     res.status(200).json(post);
//   } catch (err) {
//     res.status(500).json({ error: err });
//   }
// };
