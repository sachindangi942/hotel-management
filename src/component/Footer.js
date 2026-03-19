"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">

      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">

        {/* Hotel Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Hotel Shivlok
          </h3>

          <p className="text-sm leading-relaxed">
            A perfect destination for comfortable stays, weddings,
            celebrations and corporate events with modern facilities
            and warm hospitality.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Contact
          </h3>

          <p>📞 9039755109</p>
          <p>📧 shivlok0001@gmail.com</p>
          <p>📍 Raipur, Chhattisgarh</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li>Home</li>
            <li>Rooms</li>
            <li>Banquets</li>
            <li>Contact</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Hotel Shivlok. All rights reserved.
      </div>

    </footer>
  );
}