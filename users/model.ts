import mongoose from "npm:mongoose";

// user schema
const userSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
