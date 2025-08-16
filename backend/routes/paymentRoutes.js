// const express = require('express');
// const Razorpay = require('razorpay');
// const crypto = require('crypto');
// const Order = require('../models/orderModel');
// const authMiddleware = require('../middleware/auth');
// const router = express.Router();

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

// // Create Razorpay order
// router.post('/create-order', authMiddleware, async (req, res, next) => {
//   try {
//     const { orderId } = req.body;

//     // Validate order
//     const order = await Order.findById(orderId).populate('products.productId');
//     if (!order) {
//       return res.status(404).json({ message: 'Order not found' });
//     }
//     if (order.userId.toString() !== req.user.userId) {
//       return res.status(403).json({ message: 'Unauthorized' });
//     }

//     // Create Razorpay order
//     const razorpayOrder = await razorpay.orders.create({
//       amount: Math.round(order.total * 100), // In paise
//       currency: 'INR',
//       receipt: order._id.toString(),
//     });

//     // Save Razorpay order ID
//     order.razorpayOrderId = razorpayOrder.id;
//     await order.save();

//     res.json({
//       message: 'Razorpay order created successfully',
//       orderId: razorpayOrder.id,
//       key: process.env.RAZORPAY_KEY_ID,
//     });
//   } catch (error) {
//     next(error);
//   }
// });

// // Webhook for payment confirmation
// router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res, next) => {
//   try {
//     const signature = req.headers['x-razorpay-signature'];
//     const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
//     const shasum = crypto.createHmac('sha256', webhookSecret).update(req.body).digest('hex');

//     if (signature === shasum) {
//       const event = JSON.parse(req.body.toString());
//       if (event.event === 'payment.captured') {
//         const orderId = event.payload.payment.entity.order_id;
//         const order = await Order.findOne({ razorpayOrderId: orderId });
//         if (order) {
//           order.status = 'processing';
//           await order.save();
//         }
//       }
//       res.json({ status: 'ok' });
//     } else {
//       res.status(400).json({ message: 'Invalid signature' });
//     }
//   } catch (error) {
//     next(error);
//   }
// });

// module.exports = router;