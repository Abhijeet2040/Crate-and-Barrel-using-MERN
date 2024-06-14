import express from "express";
import productModel from "../models/product.model.js";
const productRouter = express.Router();

// get products
productRouter.get("/:category", async (req, res) => {
  const category = req.params.category;
  try {
    const data = await productModel.find({ category: category });
    if (data.length === 0) {
      return res.send({ msg: "No products found for this category." });
    }
    res.send({ data: data });
  } catch (error) {
    res.send({
      msg: "Something went wrong, can't get all the products",
      error: error.message,
    });
  }
});

// get single product
productRouter.get("/:category/:id", async (req, res) => {
  const { id, category } = req.params;
  try {
    let data = await productModel.findOne({ _id: id, category: category });
    if (!data) {
      res.send({ msg: "product not found" });
    }
    res.send({ data: data });
  } catch (error) {
    res.send({ msg: err.message });
  }
});

// add a product
productRouter.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    const product = new productModel(payload);
    await product.save();
    res.send({ msg: "Product Added" });
  } catch (error) {
    res.send({
      msg: "Something went wrong, can't add a product",
      error: error.message,
    });
  }
});

export default productRouter;
