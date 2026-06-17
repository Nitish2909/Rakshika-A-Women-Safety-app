import mongoose from "mongoose";

const safetyTipSchema = new mongoose.Schema(
  {
    title: String,

    description: String,

    category: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "SafetyTip",
  safetyTipSchema
);