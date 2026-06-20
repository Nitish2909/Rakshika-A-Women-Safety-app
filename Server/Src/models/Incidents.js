import mongoose from "mongoose";

const IncidentSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: [true, "User ID is required to log an incident"],
    },
    userName: {
      type: String,
      required: [true, "User Name is required for alerts"],
    },
    coordinates: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
    },
    status: {
      type: String,
      enum: ["active", "resolved", "false-alarm"],
      default: "active",
    },
  },
  {
    timestamps: true, // Automatically creates createdAt and updatedAt fields
  }
);

const Incident = mongoose.model("Incident", IncidentSchema);

export default Incident;