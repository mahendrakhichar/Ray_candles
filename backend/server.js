const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const errorMiddleware = require('./middleware/error');

// Load environment variables
dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Security Middleware
app.use(helmet()); // Set security headers
const allowedOrigins = [
  'http://localhost:5173',        // dev
  'https://www.rayofcandles.in', // prod
  'https://rayofcandles.in'      // Vercel sometimes strips www
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true); // allow tools like Postman
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

// Handle preflight OPTIONS requests
app.options('*', cors());

// Raw body parsing for webhooks
app.use('/api/payments/webhook', express.raw({ type: 'application/json' }));
app.use(express.json());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
});
app.use(limiter);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
// app.use('/api/payments', paymentRoutes);

// Error Handling Middleware
app.use(errorMiddleware);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode`);
});