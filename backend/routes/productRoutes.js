const express = require('express');
const Product = require('../models/productModel');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

// Get all products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.find();

    res.json({
      message: 'Products retrieved successfully',
      products,
    });
  } catch (error) {
    next(error); // Pass to error middleware
  }
});

// Get single product
router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).select('name description price imageUrls type CandleCare');
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({
      message: 'Product retrieved successfully',
      product,
    });
  } catch (error) {
    next(error); // Pass to error middleware
  }
});

// Create product (admin only)
router.post('/', authMiddleware, async (req, res, next) => {
  try {
    // Only allow admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Admins only.' });
    }

    const { name, price, imageUrls, type, description, CandleCare } = req.body;

    // Validate input
    if (!name || price == null || !imageUrls || !imageUrls[0]) {
      return res.status(400).json({ message: 'Name, price, and main image URL are required' });
    }

    const product = new Product({
      name,
      description: description || '',
      price,
      imageUrls: imageUrls.filter(url => url.trim() !== ''), // Remove empty URLs
      type: type || 'candle',
      CandleCare: CandleCare || '',
    });

    await product.save();

    res.status(201).json({
      message: 'Product created successfully',
      product,
    });
  } catch (error) {
    next(error); // Pass to error middleware
  }
});

// Update product (admin only)
router.put('/:id', authMiddleware, async (req, res, next) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Admin access required' });
    }
    const { name, description, price, imageUrls, type, CandleCare } = req.body;

    // Validate input
    if (!name || price == null || !imageUrls || !imageUrls[0]) {
      return res.status(400).json({ message: 'Name, price, and main image URL are required' });
    }

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description: description || '',
        price,
        imageUrls: imageUrls.filter(url => url.trim() !== ''),
        type: type || 'candle',
        CandleCare: CandleCare || '',
      },
      {
        new: true,
        runValidators: true,
        select: 'name description price imageUrls type CandleCare',
      }
    );
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({
      message: 'Product updated successfully',
      product,
    });
  } catch (error) {
    next(error); // Pass to error middleware
  }
});

// Delete product (admin only)
router.delete('/:id', authMiddleware, async (req, res, next) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Admin access required' });
    }
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    next(error); // Pass to error middleware
  }
});

module.exports = router;