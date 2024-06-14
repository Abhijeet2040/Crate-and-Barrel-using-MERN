import { Schema, model } from "mongoose";

const heroSchema = Schema(
  {
    category: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
    details: {
      type: String,
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

const heroModel = model("hero", heroSchema);

export default heroModel;
