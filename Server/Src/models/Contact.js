import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, 'Contact name is required'],
        trim: true 
    },
    phone: { 
        type: String, 
        required: [true, 'Phone number is required'] 
    },
    relation: { 
        type: String, 
        required: [true, 'Relationship context is required'],
        enum: ['Primary Support', 'Secondary Support', 'Family', 'Friend / Neighbor']
    }
}, { timestamps: true });

 const Contact = mongoose.model('Contact', contactSchema);

 export default Contact;