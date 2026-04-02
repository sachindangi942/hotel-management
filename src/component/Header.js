'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Mobile menu scroll lock
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  // Scroll detect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80); // 👈 adjust value if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled
            ? "bg-white shadow-md backdrop-blur-md"
            : "bg-transparent"}
        `}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
    
              src="/logo/shivlok.logo.jpeg"
              alt="Shivlok Hotel Logo"
              width={50}
              height={40}
              className="object-contain rounded-full"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden sm:flex space-x-8 font-medium text-lg">
            {["Home", "About", "Contact"].map((label) => (
              <li key={label}>
                <Link
                  href={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                  className={`relative transition-colors duration-300
                  ${scrolled ? "text-gray-700" : "text-white"}
                  hover:text-amber-500`}
                >
                  {label}

                  {/* underline animation */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            className={`sm:hidden text-3xl ${scrolled ? "text-gray-800" : "text-white"}`}
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-3/4 h-full bg-gray-900 z-50 p-6 text-white"
          >
            <button
              className="text-2xl mb-4"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>

            <ul className="flex flex-col space-y-4 text-lg">
              {["Home", "About", "Contact"].map((label) => (
                <li key={label}>
                  <Link
                    href={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
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