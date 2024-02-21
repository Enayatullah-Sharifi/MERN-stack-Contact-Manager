import mongoose from "mongoose";

const ContactModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    minLength: [9, 'Should be at least 9 character'],
    maxLength: [15, 'Should not be more than 15 character']
  },
}, { timestamps: true});


const Contact = mongoose.model('Contact', ContactModel);
export default Contact