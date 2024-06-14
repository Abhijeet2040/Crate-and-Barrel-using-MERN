import express from "express";
import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { title, firstName, lastName, email, password, phone } = req.body;
  if (
    [title, firstName, lastName, email, password, phone].some(
      (field) => field?.trim() === ""
    )
  ) {
    res.send({ msg: "All fields are required", status: 400 });
  } else {
    try {
      bcrypt.hash(password, 5, async (err, hash) => {
        if (err) {
          res.send({ msg: "Something wnet wrong", error: err.message });
        } else {
          const user = new userModel({
            title,
            firstName,
            lastName,
            email,
            password: hash,
            phone,
          });
          await user.save();
        }
      });
      res.send({ msg: "User registration successful", status: 200 });
    } catch (error) {
      res.send({
        msg: "Error registering user",
        error: error.message,
        status: 400,
      });
    }
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          let token = jwt.sign({ userID: user._id }, "stylefusion");
          res.send({ msg: "Login Successful", token: token, status: 200 });
        } else {
          res.send({ msg: "Wrong Credentials", status: 401 });
        }
      });
    } else {
      res.send({ msg: "User Does'nt exist", status: 404 });
    }
  } catch (error) {
    res.send({ msg: "Error logging user", error: error.message, status: 500 });
  }
});

userRouter.get("/details", async (req, res) => {
  const token = req.headers.authorization;
  if (token) {
    try {
      const decoded = jwt.verify(token, "stylefusion");
      if (decoded) {
        const { userID } = decoded;
        const user = await userModel.findOne({ _id: userID }).exec();
        if (user) {
          res.send(user);
        } else {
          res.send({ msg: "User not found" });
        }
      } else {
        res.send({ msg: "Invalid Token !!" });
      }
    } catch (err) {
      res.send({ msg: err.message });
    }
  } else {
    res.send({ msg: "Authentication failed" });
  }
});

export default userRouter;
