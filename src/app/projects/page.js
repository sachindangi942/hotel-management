// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// const projects = [
//   {
//     title: "Cable Payment Management",
//     description: `A modern and efficient web-based application designed to manage cable TV customer records and payments seamlessly.`,
//     technologies: ["React.js", "Firebase Firestore", "Ant Design", "React-Bootstrap"],
//     liveLink: "https://main.d1uwgdkd9wy337.amplifyapp.com",
//     githubLink: "https://github.com/sachindangi942/Cable_Payment_Management",
//   },
//   {
//     title: "E-Commerce Dashboard",
//     description: `A powerful and scalable full-stack e-commerce platform.`,
//     technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
//     liveLink: "https://your-restaurant-app.com",
//     githubLink: "https://github.com/sachindangi942/E-com-web.git",
//   },
//   {
//     title: "E-Com. Admin Panel",
//     description: `Admin panel for managing the full-stack e-commerce website.`,
//     technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
//     liveLink: "https://your-restaurant-app.com",
//     githubLink: "https://github.com/sachindangi942/E-com-web-admin.git",
//   },
//   {
//     title: "User Registration System",
//     description: "A secure user registration and authentication system with encrypted passwords.",
//     technologies: ["React.js", "Redux", "Node.js", "MongoDB"],
//     liveLink: "https://your-registration-app.com",
//     githubLink: "https://github.com/sachindangi942/user-registration",
//   },
//   {
//     title: "Portfolio Website",
//     description: "A modern portfolio showcasing my skills, projects, and experience.",
//     technologies: ["React.js", "Bootstrap", "CSS"],
//     liveLink: "https://main.d3sbo7dtyqrczp.amplifyapp.com",
//     githubLink: "https://github.com/sachindangi942/myportfolio.git",
//   },
// ];

// const Projects = () => {
//   return (
//     <motion.section
//       id="projects"
//       className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 text-white py-16 px-4 transition-all duration-500"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       <motion.h2
//         className="w-fit mx-auto text-4xl md:text-5xl font-bold text-center text-blue-600 mb-12 hover:scale-110 transition-transform duration-500"
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6 }}
//       >
//         My Projects
//       </motion.h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-700 transition-transform hover:-translate-y-1.5 hover:shadow-xl"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//           >
//             <h3 className="text-xl font-semibold text-white mb-2">
//               {project.title}
//             </h3>
//             <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

//             <div className="flex flex-wrap justify-center gap-2 mb-4">
//               {project.technologies.map((tech, i) => (
//                 <motion.span
//                   key={i}
//                   className="text-xs bg-gray-700 text-white px-3 py-1 rounded-full"
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   {tech}
//                 </motion.span>
//               ))}
//             </div>

//             <div className="flex justify-center gap-3 mt-4">
//               <a
//                 href={project.liveLink}
//                 target="_blank"
//                 className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition"
//               >
//                 Live Demo <FaExternalLinkAlt />
//               </a>
//               <a
//                 href={project.githubLink}
//                 target="_blank"
//                 className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-black transition"
//               >
//                 GitHub <FaGithub />
//               </a>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.section>
//   );
// };

// export default Projects;


import Projects from '@/component/Project'
import React from 'react'

 const page = () => {
  return (
    <Projects/>
  )
}
 export default page;