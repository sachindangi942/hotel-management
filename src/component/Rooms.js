"use client";
import React from "react";
import { motion } from "framer-motion";



const Rooms = () => {
  return (
    <motion.section
      id="skills"
      className="py-16 px-4 text-white transition-all duration-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto mb-12">

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-gray-800/50 backdrop-blur-md shadow-lg p-4 rounded-xl border border-gray-700 text-center hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div>{skill.icon}</div>
              <p className="mt-2 text-sm font-medium text-gray-200">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </motion.section>
  );
};

export default Rooms;
