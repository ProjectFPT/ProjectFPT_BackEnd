import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required:true,
    },
    name: {
      type: String,
      required: true,
    },
    score:{
      "RF Capability": {
        type: Number,
        required: true,
      },
      "Baseline Performance": {
        type: Number,
        required: true,
      },
      "Coverage": {
        type: Number,
        required: true,
      },
      "Multiple STA Performance": {
        type: Number,
        required: true,
      },
      "Stability & Robustness": {
        type: Number,
        required: true,
      },
  }},
  { timestamps: true }
);  

export const PostModel = mongoose.model('posts', schema);
