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
  imageUrls: {
    type: [String],
    validate: {
      validator: function (arr) {
        // Ensure the first (main) image URL is valid, others are optional
        if (!arr || arr.length === 0 || !arr[0]) {
          return false; // Main image is required
        }
        // Validate all provided URLs
        return arr.every(url => !url || /^https?:\/\/.*\.(?:png|jpg|jpeg|gif)$/i.test(url));
      },
      message: 'Main image URL is required and all URLs must be valid image URLs (png, jpg, jpeg, gif)',
    },
  },
  CandleCare: {
    type: String,
    trim: true,
  },
  type: {
    type: String,
    trim: true,
    default: 'candle',
  },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);