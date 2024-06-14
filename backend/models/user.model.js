import { Schema, model } from "mongoose";

const userSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  shippingAddresses: [
    {
      address: String,
      city: String,
      pincode: Number,
    },
  ],
});

const userModel = model("user", userSchema);

export default userModel;
