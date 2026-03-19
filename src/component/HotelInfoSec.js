"use client";

import { motion } from "framer-motion";

export default function HotelInfoSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Welcome to Hotel Shivlok
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A perfect blend of comfort, elegance and convenience. Located just 
            <b> 5 km from the airport</b> and <b> 3 km from the railway station</b>,
            offering peaceful stay with excellent accessibility.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Accommodation */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-md p-6 transition"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Accommodation
            </h3>

            <p className="text-gray-600 mb-4 text-sm">
              19 well-appointed rooms designed for comfort and relaxation.
            </p>

            <ul className="text-gray-600 text-sm space-y-2">
              <li>• Air Conditioning</li>
              <li>• Flat Screen TV</li>
              <li>• High Speed Wi-Fi</li>
              <li>• 24/7 Room Service</li>
            </ul>
          </motion.div>

          {/* Banquets */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-md p-6 transition"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Banquet Halls
            </h3>

            <p className="text-gray-600 mb-4 text-sm">
              Ideal for weddings, celebrations and corporate events.
            </p>

            <ul className="text-gray-600 text-sm space-y-2">
              <li>• Nataraj Hall</li>
              <li>• Tandav Hall</li>
              <li>• Kailash Terrace</li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-md p-6 transition"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Additional Services
            </h3>

            <ul className="text-gray-600 text-sm space-y-2">
              <li>• Pickup & Drop Service</li>
              <li>• Local Tours</li>
              <li>• Catering & Dining</li>
              <li>• Secure Parking</li>
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}