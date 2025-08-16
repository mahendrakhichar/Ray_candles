const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required'],
  },
  products: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: [true, 'Product ID is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [1, 'Quantity must be at least 1'],
    },
  }],
  total: {
    type: Number,
    required: [true, 'Total is required'],
    min: [0, 'Total cannot be negative'],
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending',
  },
  shippingAddress: {
    type: String,
    required: [true, 'Shipping address is required'],
    trim: true,
  },
  razorpayOrderId: {
    type: String,
    trim: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);