"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[60vh] md:h-[100vh] w-full">

      {/* Background Image */}
      <Image
        src="/HsuitRoom.png"
        alt="Shivlok Hotel"
        fill

        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Welcome to Shivlok Hotel
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl max-w-2xl mb-6 text-gray-200"
        >
          Experience comfort, peaceful stay and the best hospitality
          at Shivlok Hotel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Link
            href="/rooms"
            className="bg-amber-600 hover:bg-amber-700 
            px-6 py-3 rounded-lg text-lg font-semibold 
            transition duration-300"
          >
            Book a Room
          </Link>
        </motion.div>

      </div>
    </section>
  );
}