import React from 'react';

const Shipping = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-center text-gray-800 mb-6 sm:mb-8 tracking-wide">
          Shipping & Delivery
        </h2>

        {/* Main Content */}
        <div className="flex flex-col gap-8 sm:gap-12">
          {/* Domestic Shipping */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-amber-700 mb-3 sm:mb-4">Domestic Shipping (India)</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              We offer fast and reliable shipping across India to bring our handcrafted candles to your doorstep with care.
            </p>
            <ul className="list-disc pl-5 mt-3 sm:mt-4 space-y-2 text-sm sm:text-base text-gray-600">
              <li><strong>Processing Time:</strong> 1-2 business days</li>
              <li><strong>Delivery Time:</strong> 4-7 business days</li>
              <li><strong>Shipping Charges:</strong> Free on orders above ₹499; ₹99 for orders below ₹499</li>
              <li><strong>Tracking:</strong> Tracking details will be emailed once your order is shipped</li>
            </ul>
          </div>

          {/* International Shipping */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-amber-700 mb-3 sm:mb-4">International Shipping</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              We’re delighted to share our candles worldwide. International orders are shipped with trusted partners to ensure safe delivery.
            </p>
            <ul className="list-disc pl-5 mt-3 sm:mt-4 space-y-2 text-sm sm:text-base text-gray-600">
              <li><strong>Processing Time:</strong> 2-3 business days</li>
              <li><strong>Delivery Time:</strong> 7-15 business days, depending on destination</li>
              <li><strong>Shipping Charges:</strong> Calculated at checkout based on location</li>
              {/* <li><strong>Customs & Duties:</strong> Additional fees may apply, payable by the recipient</li> */}
            </ul>
          </div>

          

          {/* Returns Teaser */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-amber-700 mb-3 sm:mb-4">Returns & Exchanges</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              We want you to love your candles. If something isn’t right, we offer hassle-free returns within 7 days of delivery.
            </p>
            <a
              href="/returns"
              className="inline-block mt-3 sm:mt-4 text-amber-600 hover:text-amber-700 text-sm sm:text-base font-raleway transition-colors"
            >
              Learn More About Returns
            </a>
          </div>

          {/* FAQ Teaser */}
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-semibold text-amber-700 mb-3 sm:mb-4">Have Questions?</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Visit our FAQ page for more details on shipping, delivery times, and our policies.
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

export default Shipping;