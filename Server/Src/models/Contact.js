import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    relationship: {
        type: String,
        required: true,
    },

    isPrimary: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});

const Contact = mongoose.model("Contact", contactSchema)

export default Contact;