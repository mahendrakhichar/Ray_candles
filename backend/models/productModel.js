const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
    maxlength: [100, 'Product name cannot exceed 100 characters'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative'],
  },
  stock: {
    type: Number,
    required: [true, 'Stock quantity is required'],
    min: [0, 'Stock cannot be negative'],
  },
  imageUrl: {
    type: String,
    trim: true,
    match: [/^https?:\/\/.*\.(?:png|jpg|jpeg|gif)$/i, 'Please provide a valid image URL'],
  },
  category: {
    type: String,
    enum: ['scented', 'unscented', 'decorative', 'other'],
    default: 'scented',
  },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);