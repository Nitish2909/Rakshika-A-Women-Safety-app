import mongoose from "mongoose";

const locationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    latitude: Number,

    longitude: Number,

    timestamp: {
      type: Date,
      default: Date.now,
    },
  }
);

export default mongoose.model(
  "LocationHistory",
  locationSchema
);