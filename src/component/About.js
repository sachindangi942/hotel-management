"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaDownload, FaCode, FaServer, FaCloud, FaBrain } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { usePathname } from "next/navigation";

const About = () => {

  const pathname = usePathname();
  const isAboutPage = pathname === "/about"
  const skills = [
    { name: "Frontend", icon: <FaCode className="text-blue-500" />, items: ["React.js", "Next.js", "Tailwind CSS"] },
    { name: "Backend", icon: <FaServer className="text-purple-500" />, items: ["Node.js", "Express", "MongoDB"] },
    { name: "UI/UX", icon: <FiFigma className="text-pink-500" />, items: ["Ant Design", "Bootstrap", "Material UI", "Framer Motion"] },
    { name: "Cloud", icon: <FaCloud className="text-cyan-500" />, items: ["AWS", "Firebase", "Vercel"] },
    { name: "Soft Skills", icon: <FaBrain className="text-green-500" />, items: ["Problem Solving", "Teamwork", "Communication"] },
  ];


  return (
    <motion.section
      id="about"
      className="py-12 px-4 sm:px-6 lg:px-8  text-white"
      initial={{ opacity: 0 }}
      animate={isAboutPage ? {opacity:1,y:0}: undefined}
      whileInView={!isAboutPage ? {opacity:1, y:0 } : undefined}
      viewport={{once:false}}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 xl:gap-16 mt-10">
          {/* Image Section */}
          <motion.div
            className="relative w-full max-w-md lg:w-1/3 -mt-4 lg:sticky lg:top-24 self-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: false}}
          >
            <div className="relative rounded-2xl overflow-hidden
             shadow-2xl border-8 border-white dark:border-gray-800 ring-2 ring-blue-500/30
              dark:ring-blue-400/20">
              <Image
                src="/aboutImg.jpg"
                alt="Sachin Dangi"
                width={400}
                height={400}
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -inset-4 -z-10 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-900 dark:to-purple-900 rounded-2xl opacity-60 blur-xl" />
          </motion.div>


          {/* Text Section */}
          <motion.div
            className="w-full lg:w-2/3 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: false }}
          >
            <div className="space-y-6 text-gray-300 dark:text-gray-300 text-lg">
              <motion.p
                className="text-2xl font-medium text-gray-900 dark:text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: false }}
              >
                Hi, I'm <span className="text-blue-600 dark:text-blue-400 font-bold">Sachin Dangi</span> — a passionate MERN Stack Developer dedicated to crafting exceptional digital experiences.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once:false}}
              >
                With expertise in <span className="font-semibold text-blue-300 dark:text-blue-400">React.js</span>, 
                <span className="font-semibold text-purple-500 dark:text-purple-400">Node.js</span>, and modern web technologies, I build scalable applications that are both performant and visually stunning. My approach combines technical precision with creative problem-solving.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: false }}
              >
                I hold a <span className="font-semibold">B.Tech in Computer Science</span> and gained practical experience through a 6-month internship at <span className="font-semibold">Vanjain Technology</span>, where I worked with Firebase and MongoDB to develop real-time applications.
              </motion.p>
            </div>

            {/* Skills Grid */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once:false }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md
                   transition-shadow border border-gray-100 dark:border-gray-700"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  viewport={{ once: false }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-xl">{skill.icon}</div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
                  </div>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    {skill.items.map((item) => (
                      <li key={item} className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="pt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              viewport={{ once: false }}
            >
              <a href="/SachinDangiResume.pdf" download>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 20px -10px rgba(37, 99, 235, 0.6)" }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition-all group"
                >
                  <FaDownload className="group-hover:animate-bounce" />
                  <span>Download Resume</span>
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
