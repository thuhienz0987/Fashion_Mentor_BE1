import express from "express";
import User from "../models/User.js";
import crypto from "crypto";
import bcrypt from "bcrypt";

const signIn = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(422).json({ message: "Account does not exist" });
  }

  try {
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        res.status(200).json(user);
      }
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const signUp = async (req, res) => {
  const { userName, gender, email, password } = req.body;

  const emailExist = await User.findOne({ email });
  const userNameExist = await User.findOne({ userName });

  if (emailExist) {
    return res.status(422).json({ message: "Email already exists" });
  }

  if (userNameExist) {
    return res.status(422).json({ message: "Username already exists" });
  }

  try {
    const salt = crypto.randomBytes(16).toString("hex"); // Generate a new salt for each user
    const hashPassword = await bcrypt.hash(password, 10); // Use bcrypt for password hashing

    const userModel = new User({
      userName,
      gender,
      email,
      password: hashPassword,
    });

    const user = await userModel.save(); // Use `.save()` to create a new user

    if (user) {
      res.status(200).json(user);
    }
  } catch (error) {
    console.log(error.message);

    res.status(500).json(error);
  }
};

export { signIn, signUp };
