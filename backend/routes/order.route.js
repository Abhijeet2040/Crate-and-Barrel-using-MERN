import express from "express";
const orderRouter = express.Router();

import orderModel from "../models/order.model.js";
import auth from "../middleware/auth.middleware.js";
import jwt from "jsonwebtoken";

//Post products by user
orderRouter.post("/", auth, async (req, res) => {
  const payload = req.body;
  try {
    const data = new orderModel(payload);
    await data.save();
    res.send({ msg: "New order added" });
  } catch (err) {
    res.send({ msg: err.message });
  }
});

//Get order list of particular user only
orderRouter.get("/", async (req, res) => {
  const token = req.headers.authorization;
  if (token) {
    const decoded = jwt.verify(token, "stylefusion");
    if (decoded) {
      const orderData = await orderModel
        .find({ userID: decoded.userID })
        .sort({ date_of_purchase: -1 });
      res.send(orderData);
    } else {
      res.send({ msg: "Invalid Token !!" });
    }
  } else {
    res.send({ msg: "Authentication failed 2" });
  }
});

//Export router
export default orderRouter;
