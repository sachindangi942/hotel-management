
"use client";
import { TypingTitle } from "@/component/TypedText";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaWhatsapp, FaArrowDown, FaDownload } from "react-icons/fa";

const Home = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sachin-s1a2c3hin",
      icon: <FaLinkedin className="text-blue-500" />,
      color: "hover:bg-blue-600/10"
    },
    {
      name: "GitHub",
      url: "https://github.com/sachindangi942",
      icon: <FaGithub className="text-gray-300" />,
      color: "hover:bg-gray-800"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/918463088388",
      icon: <FaWhatsapp className="text-green-500" />,
      color: "hover:bg-green-600/10"
    },
  ];

  return (
    <div className="  text-white flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-pink-600 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-16 py-12 text-center">
          {/* Text Content - Left Side */}
          <motion.div
            className="flex-1 space-y-6 order-2 md:order-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Name */}
            <motion.h1
              className="text-4xl sm:text-4xl md:text-5xl font-bold bg-clip-text 
              text-transparent bg-gradient-to-r from-white via-purple-300 to-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p> Hi, I&apos;m Sachin Dangi</p>
            </motion.h1>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="shadow-lg py-4">
                <p className="text-lg sm:text-xl md:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  MERN Stack Developer | Passionate Coder | Problem Solver
                </p>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 text-2xl sm:text-base md:text-xl text-gray-300">

                </p>
              </div>
              <TypingTitle />
            </motion.div>

        
            <motion.p
              className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Crafting pixel-perfect web applications with modern technologies.
              Passionate about building scalable solutions and solving complex problems
              through clean, efficient code.
            </motion.p>


            <motion.div
              className="flex flex-wrap gap-3 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <a href="/cv_doc_2026.pdf" download>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 20px -10px rgba(37, 99, 235, 0.6)" }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center   
                  text-gray font-medium px-6 gap-2 py-2 rounded-full
                   shadow-lg transition-all group border"
                >
                  <FaDownload className="group-hover:animate-bounce" />
                  <span>Download Cv</span>
                </motion.button>
              </a>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-full bg-white/5
                     backdrop-blur-sm border border-white/10 ${link.color} transition-all hover:shadow-lg`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                >
                  {link.icon}
                
                </motion.a>
              ))}
            </motion.div>

            
            <motion.div
              className="mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>Explore my work</span>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <FaArrowDown className="text-lg" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image - Right Side */}
          <motion.div
            className="flex-1 flex justify-center  order-1 md:order-2 mb-8 md:mb-0"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-90 md:h-90">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>

              {/* Border Animation */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-purple-400 border-r-blue-400 animate-spin-slow"></div>

              {/* Main Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl group">
                <Image
                  src="/aboutImg.jpg"
                  alt="Sachin Dangi"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-900/20 mix-blend-overlay"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;