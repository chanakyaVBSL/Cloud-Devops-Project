const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String,
    state: String,
    country: String,
    phone: String,
    message: String,
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Contact", contactSchema);
