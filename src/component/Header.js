'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const linkVariants = {
  hover: { scale: 1.1, transition: { duration: 0.3 } },
};

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  return (
    <>
      {/* Navigation Bar */}
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 
        text-white shadow-md sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center relative">
          {/* Logo */}
          <div className="hidden sm:block text-2xl font-bold text-gray-300">
            ShivLok🔱Hotel
          </div>

          {/* Hamburger (Mobile Only) */}
          <button
            className="sm:hidden text-3xl text-gray-300"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>

          {/* Desktop Menu */}
          <ul className="hidden sm:flex space-x-8 font-medium text-gray-200 text-lg">
            {["Home", "About", "Inquery"].map((label, i) => (
              <motion.li
                key={label}
                variants={linkVariants}
                whileHover="hover"
              >
                <Link href={label === "Home" ? "/" : `/${label.toLowerCase()}`} className="hover:text-blue-500">
                  {label === "About" ? "About Us" : label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-3/4 h-full bg-gray-900 bg-opacity-95 backdrop-blur-md 
            z-50 p-6 space-y-6 text-white sm:hidden"
          >
            {/* Close Button */}
            <button
              className="text-2xl mb-4"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>

            {/* Mobile Menu Links */}
            <ul className="flex flex-col space-y-4 text-lg font-medium">
              {["Home",  "About Us", "Contact"].map((label) => (
                <li key={label}>
                  <Link
                    href={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label === "About" ? "About Us" : label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
