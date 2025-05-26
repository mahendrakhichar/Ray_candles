import React from 'react';

const Returns = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-center text-gray-800 mb-6 sm:mb-8 tracking-wide">
          Returns & Exchanges
        </h2>

        {/* Main Content */}
        <div className="flex flex-col gap-8 sm:gap-12">
          {/* Return Policy Overview */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-amber-700 mb-3 sm:mb-4">Our Commitment to Your Satisfaction</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              We want you to love your Ray Candles! If you’re not completely satisfied with your purchase, we offer a hassle-free return process to ensure your peace of mind.
            </p>
          </div>

          {/* Return Conditions */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-amber-700 mb-3 sm:mb-4">Return Policy</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              You may return unused products within <strong>7 days</strong> of delivery for a refund or exchange, subject to the following conditions:
            </p>
            <ul className="list-disc pl-5 mt-3 sm:mt-4 space-y-2 text-sm sm:text-base text-gray-600">
              <li>Items must be in their original packaging, unused, and in resalable condition.</li>
              <li>Return shipping charges are the responsibility of the customer, unless the item is defective or incorrect.</li>
              <li>Refunds will be processed within 5-7 business days after we receive the returned item.</li>
              <li>Custom or personalized orders are non-returnable unless defective.</li>
            </ul>
          </div>

          {/* How to Initiate a Return */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-amber-700 mb-3 sm:mb-4">How to Initiate a Return</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              To start the return process, please follow these steps:
            </p>
            <ol className="list-decimal pl-5 mt-3 sm:mt-4 space-y-2 text-sm sm:text-base text-gray-600">
              <li>Contact our customer support team at <a href="mailto:raycandless@gmail.com" className="text-amber-600 hover:text-amber-700 transition-colors">raycandless@gmail.com</a> with your order number and reason for return.</li>
              <li>Receive a return authorization and shipping instructions from our team.</li>
              <li>Pack the item securely in its original packaging and ship it back to us.</li>
              <li>Once received, we’ll process your refund or exchange promptly.</li>
            </ol>
            <a
              href="mailto:raycandless@gmail.com"
              className="inline-block mt-3 sm:mt-4 px-6 py-2 sm:px-8 sm:py-3 bg-amber-600 text-white rounded-full text-sm sm:text-base font-raleway tracking-wide transition-all hover:bg-amber-700 hover:shadow-lg"
            >
              Contact Support
            </a>
          </div>

          {/* Defective or Incorrect Items */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-amber-700 mb-3 sm:mb-4">Defective or Incorrect Items</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              If you receive a defective or incorrect item, please contact us within <strong>7 days</strong> of delivery. We’ll cover return shipping costs and provide a replacement or full refund.
            </p>
          </div>

          {/* FAQ Teaser */}
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-semibold text-amber-700 mb-3 sm:mb-4">Need More Help?</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Visit our FAQ page for additional details on returns, exchanges, and other policies.
            </p>
            <a
              href="/faq"
              className="inline-block mt-3 sm:mt-4 px-6 py-2 sm:px-8 sm:py-3 border border-amber-600 text-amber-600 rounded-full text-sm sm:text-base font-raleway tracking-wide transition-all hover:bg-amber-600 hover:text-white hover:shadow-lg"
            >
              Visit FAQ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Returns;