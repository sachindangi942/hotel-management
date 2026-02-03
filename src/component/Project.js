"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";
import Slider from "react-slick";

const projects = [
  {
    title: "Cable Payment Management",
    description: `A powerful and scalable cable payment management system built using React and Firebase. Designed to manage customer records, track monthly payments, and generate real-time reports through a secure and responsive interface.`,
    technologies: ["React.js","Redux", "Firebase Firestore", "Ant Design", "React-Bootstrap"],
    liveLink: "https://main.d1uwgdkd9wy337.amplifyapp.com",
    githubLink: "https://github.com/sachindangi942/Cable_Payment_Management",
    images: [
      "/cableProjectImg/RegistrationPage.png",
      "/cableProjectImg/LoginPage.png",
      "/cableProjectImg/HomePage.png",
      "/cableProjectImg/CustomarePage.png",
      "/cableProjectImg/PaymentPage.png",
      "/cableProjectImg/SettingPage.png"
    ]
  },
  {
    title: "E-Commerce Website",
    description: `A powerful and scalable full-stack e-commerce platform built using the MERN stack. Designed to support large product catalogs, secure user authentication, seamless shopping cart functionality, and integrated payment systems.`,
    technologies: ["React.js","Redux", "Node.js", "Express.js", "MongoDB","JWT Authenticatin","Payment Gateway", "React-Bootstrap","Ant Design"],
    liveLink: "https://e-com-web-opal.vercel.app",
    githubLink: "https://github.com/sachindangi942/E-com-web.git",
    images: [
      "/ecomImg/homePage.png",
      "/ecomImg/detailsPage.png",
      "/ecomImg/cartPage.png",
      "/ecomImg/paymentPage.png",
      "/ecomImg/settingPage.png"
    ]
  },
    {
    title: "Task Management Website",
    description: `A powerful and scalable full-stack task management platform built using the MERN stack. Designed to efficiently handle personal and team-based workflows with features like user authentication, real-time task creation and assignment, status tracking, priority labeling, and deadline management.`,
    technologies: ["React.js","Redux", "Node.js", "Express.js", "MongoDB","JWT Authenticatin","React-Bootstrap","Ant Design"],
    liveLink: "https://your-restaurant-app.com",
    githubLink: "https://github.com/sachindangi942/ComplateTaskManager",
    images: [
      "/taskmanagment/homePage.png",
      "/taskmanagment/createUserPage.png",
      "/taskmanagment/createTask.png",
      "/taskmanagment/userList.png",
      "/taskmanagment/veiwUser.png"
    ]
  },
  {
    title: "E-Commerce Admin Deshboard",
    description: `Built an E-Commerce Admin Dashboard using React.js, Node.js, Express.js, and MongoDB.
Implemented features like product management, user management, order tracking, and sales analytics.
Designed a responsive and intuitive UI using Material UI with secure admin login using JWT.

`,
    technologies: ["React.js","Redux", "Node.js", "Express.js", "MongoDB","JWT Authenticatin", "React-Bootstrap","Ant Design"],
    liveLink: "https://your-restaurant-app.com",
    githubLink: "https://github.com/sachindangi942/E-com-web-admin.git",
images:[
  "/EcomAdminImg/homePage.png",
  "/EcomAdminImg/addProduct.png",
  "/EcomAdminImg/billPage.png",
  "/EcomAdminImg/settingPage.png"
]
  },
  {
    title: " ExamPrep Mock Test Platform",
    description: "Developed a full-stack web application for online MCQs and mock tests for SSC and other competitive exams using Node.js, Express.js, and JWT-based authentication with role-based access. Built a responsive UI with React.js and Ant Design, integrated MongoDB for data management, hosted the frontend on Vercel and backend on Render, and used AWS S3 for secure image storage",
    technologies: ["React.js", "Redux", "Node.js", "MongoDB","Ant Design","AWS S3", "Render.com","vercel"],
    liveLink: "https://examyatracom.vercel.app",
    // githubLink: "https://github.com/sachindangi942/user-registration",
    images:[
      "/examyatraImg/StDeshboard.png",
      "/examyatraImg/stLoginPage.png",
      "/examyatraImg/stTestPage.png",
      "/examyatraImg/stPymentpage.png",
      "/examyatraImg/stLogoutPage.png"
    ]
  },
  {
    title: "Portfolio Website",
    description: `A modern, responsive, and professional developer portfolio built using React and Tailwind CSS. It features a clean design with sections for projects, tech stack, resume, certificates, and social links. Includes smooth navigation, dark mode support, and interactive animations for an enhanced user experience.`,
    technologies: ["Next.js", "Bootstrap", "Tailwind CSS"],
    liveLink: "https://sachindangicom.vercel.app",
    githubLink: "https://github.com/sachindangi942/myportfolio.git",
    images: [
      "/portfolioImg/HomePage.png",
      "/portfolioImg/QualificationPage.png",
      "/portfolioImg/SkillsPage.png",
      "/portfolioImg/AboutPage.png"
    ]
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  arrows: true,
  pauseOnHover: true,
};


const Projects = () => {
  return (
    <motion.section
      id="projects"
      className=" text-white py-12 px-4 transition-all duration-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="w-fit mx-auto text-4xl md:text-5xl font-bold text-center text-blue-600 mb-12 hover:scale-110 transition-transform duration-500"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-700 transition-transform hover:-translate-y-1.5 hover:shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: index * 0.1 }}
          >
            {project.images && (
              <div className=" gap-4 mb-4">
                <Slider {...sliderSettings}>
                  {project.images.map((src, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt={`${project.title} image ${i}`}
                      width={400}
                      height={600}
                      className="shadow flex-shrink-0"
                    />
                  ))}
                </Slider>
              </div>
            )}
            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <motion.span
                  key={i}
                  className="text-xs bg-gray-700 text-white px-3 py-1 rounded-full"
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <div className="flex justify-center gap-6 mt-4">
              <a
                href={project.liveLink}
                target="_blank"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition"
              >
                Live Demo <FaExternalLinkAlt />
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-black transition"
              >
                GitHub <FaGithub />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
