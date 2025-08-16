const express = require('express');
const Order = require('../models/orderModel');
const Product = require('../models/productModel');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

// Create order
router.post('/', authMiddleware, async (req, res, next) => {
  try {
    const { products, shippingAddress } = req.body;

    // Validate input
    if (!products || !Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ message: 'Products array is required and cannot be empty' });
    }
    if (!shippingAddress) {
      return res.status(400).json({ message: 'Shipping address is required' });
    }

    // Validate products and calculate total
    let total = 0;
    for (const item of products) {
      if (!item.productId || !item.quantity || item.quantity < 1) {
        return res.status(400).json({ message: 'Each product must have a valid productId and quantity' });
      }
      const product = await Product.findById(item.productId);
      if (!product) {
        return res.status(404).json({ message: `Product ${item.productId} not found` });
      }
      if (product.stock < item.quantity) {
        return res.status(400).json({ message: `Insufficient stock for ${product.name}` });
      }
      total += product.price * item.quantity;
    }

    // Create order
    const order = new Order({
      userId: req.user.userId,
      products,
      total,
      shippingAddress,
    });
    await order.save();

    // Update product stock
    for (const item of products) {
      await Product.findByIdAndUpdate(item.productId, {
        $inc: { stock: -item.quantity },
      });
    }

    res.status(201).json({
      message: 'Order created successfully',
      order,
    });
  } catch (error) {
    next(error);
  }
});

// Get user orders
router.get('/', authMiddleware, async (req, res, next) => {
  try {
    const orders = await Order.find({ userId: req.user.userId })
      .populate('products.productId', 'name price imageUrl')
      .sort({ createdAt: -1 });
    res.json({
      message: 'Orders retrieved successfully',
      orders,
    });
  } catch (error) {
    next(error);
  }
});

// Get all orders (admin only)
router.get('/all', authMiddleware, async (req, res, next) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Admin access required' });
    }
    const orders = await Order.find()
      .populate('products.productId', 'name price imageUrl')
      .populate('userId', 'email name')
      .sort({ createdAt: -1 });
    res.json({
      message: 'All orders retrieved successfully',
      orders,
    });
  } catch (error) {
    next(error);
  }
});

// Update order status after payment
router.put('/:id/status', authMiddleware, async (req, res, next) => {
  try {
    const { status } = req.body;
    if (!['pending', 'processing', 'shipped', 'delivered', 'cancelled'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    if (order.userId.toString() !== req.user.userId && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    order.status = status;
    await order.save();
    res.json({
      message: 'Order status updated successfully',
      order,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;