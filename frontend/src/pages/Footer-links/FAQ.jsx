import React from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl font-playfair font-bold text-center text-gray-800 mb-6 sm:mb-8 tracking-wide">
          Frequently Asked Questions
        </h1>

        {/* Main Content */}
        <div className="flex flex-col gap-8 sm:gap-12">
          {/* FAQ List */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-amber-700 mb-3 sm:mb-4">Your Questions, Answered</h2>
            <div className="space-y-6 sm:space-y-8">
              <div>
                <strong className="text-sm sm:text-base text-gray-800">Are your candles handmade?</strong>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-1">
                  Yes! Every Ray Candle is handcrafted with love in small batches, using premium natural soy wax and pure essential oils to ensure quality and care in every glow.
                </p>
              </div>
              <div>
                <strong className="text-sm sm:text-base text-gray-800">Do you offer custom or bulk orders?</strong>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-1">
                  Absolutely! We offer personalized and bulk orders for events, gifts, or decor. Contact our team at <a href="mailto:raycandless@gmail.com" className="text-amber-600 hover:text-amber-700 transition-colors">raycandless@gmail.com</a> to discuss your needs.
                </p>
              </div>
              <div>
                <strong className="text-sm sm:text-base text-gray-800">How can I track my order?</strong>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-1">
                  Once your order is shipped, you’ll receive a tracking link via email or SMS. You can also track your order directly on our <Link to="/track" className="text-amber-600 hover:text-amber-700 transition-colors">Track Order</Link> page.
                </p>
              </div>
              <div>
                <strong className="text-sm sm:text-base text-gray-800">What should I do if my candle arrives damaged?</strong>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-1">
                  If your candle arrives damaged, please email us at <a href="mailto:raycandless@gmail.com" className="text-amber-600 hover:text-amber-700 transition-colors">raycandless@gmail.com</a> with photos within 7 days of delivery. We’ll arrange a replacement or refund promptly.
                </p>
              </div>
              <div>
                <strong className="text-sm sm:text-base text-gray-800">What are your shipping options?</strong>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-1">
                  We offer fast and reliable shipping across India with free shipping on orders above ₹499.  Visit our <Link to="/shipping" className="text-amber-600 hover:text-amber-700 transition-colors">Shipping</Link> page for details.
                </p>
              </div>
              <div>
                <strong className="text-sm sm:text-base text-gray-800">Can I return or exchange my candle?</strong>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-1">
                  Yes, we offer hassle-free returns within 7 days for unused candles in original packaging. Check our <Link to="/returns" className="text-amber-600 hover:text-amber-700 transition-colors">Returns</Link> page for the full policy.
                </p>
              </div>
              <div>
                <strong className="text-sm sm:text-base text-gray-800">Are your candles eco-friendly?</strong>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-1">
                  Absolutely! Our candles are made with 100% natural soy wax, lead-free cotton wicks, and eco-friendly essential oils to ensure a sustainable and clean burn.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-lg sm:text-xl font-semibold text-amber-700 mb-3 sm:mb-4">Still Have Questions?</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Our team is here to help! Reach out to us for any inquiries or personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-4 sm:mt-6">
              <a
                href="mailto:raycandless@gmail.com"
                className="inline-block px-6 py-2 sm:px-8 sm:py-3 bg-amber-600 text-white rounded-full text-sm sm:text-base font-raleway tracking-wide transition-all hover:bg-amber-700 hover:shadow-lg"
              >
                Contact Support
              </a>
              <Link
                to="/Contactus"
                className="inline-block px-6 py-2 sm:px-8 sm:py-3 border border-amber-600 text-amber-600 rounded-full text-sm sm:text-base font-raleway tracking-wide transition-all hover:bg-amber-600 hover:text-white hover:shadow-lg"
              >
                Visit Contact Page
              </Link>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-lg sm:text-xl font-semibold text-amber-700 mb-3 sm:mb-4">Explore Our Collection</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Discover the perfect candle to light up your space and create lasting moments.
            </p>
            <Link
              to="/candles"
              className="inline-block mt-4 sm:mt-6 px-6 py-2 sm:px-8 sm:py-3 bg-amber-600 text-white rounded-full text-sm sm:text-base font-raleway tracking-wide transition-all hover:bg-amber-700 hover:shadow-lg"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;