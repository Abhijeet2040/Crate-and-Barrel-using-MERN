import { Schema, model } from "mongoose";

const productSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const productModel = model("product", productSchema);

export default productModel;
