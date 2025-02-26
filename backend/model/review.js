const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema({
    name: String, 
    review: String, 
    rating: { type: Number, min: 0, max: 5},
    time: String,    
  })
exports.Review = mongoose.model('Review', reviewSchema);