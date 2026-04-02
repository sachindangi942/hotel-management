"use client";

import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-10">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT - Info */}
          <div className="space-y-6">

            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
              <FaMapMarkerAlt className="text-amber-600 text-2xl" />
              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-gray-600">
                  Shivlok Hotel, Sawan Nagar, Halalpur, Bhopal, India
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
              <FaPhoneAlt className="text-amber-600 text-2xl" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-600">+91 9039755109</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
              <FaEnvelope className="text-amber-600 text-2xl" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-600">shivlok0001@gmail.com</p>
              </div>
            </div>

          </div>

          {/* RIGHT - Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow space-y-4"
          >
            <h3 className="text-xl font-semibold mb-2">
              Send Message
            </h3>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-amber-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-amber-500"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-amber-500"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition"
            >
              Send Message
            </button>
          </form>

        </div>

        {/* Google Map */}
        <div className="mt-12">
          <iframe
            src="https://www.google.com/maps?q=Ujjain&output=embed"
            className="w-full h-[400px] rounded-lg border-0"
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}