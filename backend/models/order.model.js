import { Schema, model } from "mongoose";

const orderSchema = Schema(
  {
    userID: String,
    products: Array, //[{prod_id: , quantity: }]
    date_of_purchase: String,
  },
  {
    versionKey: false,
  }
);

const orderModel = model("order", orderSchema);

export default orderModel;
