const mongoose = require('mongoose');
const newsletterSchema= new mongoose.Schema({
  email:{
    type: String,
    unique: true,
    required: true,
  }
},{ timestamps: true })
exports.Newsletter = mongoose.model("Newsletter",newsletterSchema);