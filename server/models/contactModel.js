import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    message: String,
});

const contactModel = mongoose.model("contact", contactSchema);

export default contactModel