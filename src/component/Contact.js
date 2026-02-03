// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaEnvelope,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaLinkedin,
//   FaGithub,
// } from "react-icons/fa";

// const contactItems = [
//   {
//     icon: <FaEnvelope className="text-red-600 text-3xl" />,
//     label: "sachindangi942@gmail.com",
//   },
//   {
//     icon: <FaPhoneAlt className="text-green-600 text-3xl" />,
//     label: "+91 8463088388",
//   },
//   {
//     icon: <FaMapMarkerAlt className="text-blue-600 text-3xl" />,
//     label: "Bhopal, Madhya Pradesh, India",
//   },
// ];

// const socialLinks = [
//   {
//     icon: <FaLinkedin className="text-blue-700 text-4xl hover:text-blue-500" />,
//     url: "https://www.linkedin.com/in/sacin-dangi-s1a2c3hin",
//   },
//   {
//     icon: <FaGithub className="text-black dark:text-white text-4xl hover:text-gray-600" />,
//     url: "https://github.com/sachindangi942",
//   },
// ];

// const Contact = () => {
//   return (
//     <motion.section
//       id="contact"
//       className="py-16 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 
//     text-white  transition-all duration-500"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       <motion.h2
//         className="text-4xl md:text-5xl font-bold text-center text-blue-600 mb-12 hover:scale-110 transition-transform duration-500"
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6 }}
//       >
//         Contact Me
//       </motion.h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-10 text-center">
//         {contactItems.map((item, i) => (
//           <motion.div
//             key={i}
//             className="space-y-2"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: i * 0.2 }}
//           >
//             <div>{item.icon}</div>
//             <p className="text-gray-700 dark:text-gray-300">{item.label}</p>
//           </motion.div>
//         ))}
//       </div>

//       <motion.form
//         onSubmit={(e) => {
//           e.preventDefault();
//           const formData = new FormData(e.target);
//           console.log(Object.fromEntries(formData.entries()));
//         }}
//         className="max-w-2xl mx-auto bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-4"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//       >
//         <div>
//           <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
//             Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             required
//             placeholder="Your Name"
//             className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             required
//             placeholder="Your Email"
//             className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
//             Message
//           </label>
//           <textarea
//             name="message"
//             rows="4"
//             required
//             placeholder="Your Message"
//             className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition"
//         >
//           Send Message
//         </button>
//       </motion.form>

//       <div className="flex justify-center gap-6 mt-10">
//         {socialLinks.map((social, i) => (
//           <motion.a
//             key={i}
//             href={social.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: i * 0.2 }}
//           >
//             {social.icon}
//           </motion.a>
//         ))}
//       </div>
//     </motion.section>
//   );
// };

// export default Contact;


"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const contactItems = [
  {
    icon: <FaEnvelope className="text-red-500 text-2xl" />,
    label: "sachindangi942@gmail.com",
  },
  {
    icon: <FaPhoneAlt className="text-green-500 text-2xl" />,
    label: "+91 8463088388",
  },
  {
    icon: <FaMapMarkerAlt className="text-blue-500 text-2xl" />,
    label: "Bhopal, Madhya Pradesh, India",
  },
];

const socialLinks = [
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/sachin-s1a2c3hin",
  },
  {
    icon: <FaGithub />,
    url: "https://github.com/sachindangi942",
  },
];

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-20 px-6 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent
           bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Get In Touch
      </motion.h2>

      {/* Contact Info */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
        {contactItems.map((item, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-4 bg-gray-800/60 p-6 rounded-xl shadow-lg border border-gray-700 backdrop-blur-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
          >
            {item.icon}
            <span className="text-lg text-gray-200">{item.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Contact Form */}
      <motion.form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          console.log(Object.fromEntries(formData.entries()));
        }}
        className="max-w-3xl mx-auto p-10 rounded-3xl bg-gray-800/50 shadow-2xl backdrop-blur-lg border border-gray-700 space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium text-gray-200">Name</label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-black/30 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-200">Email</label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-black/30 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-200">Message</label>
          <motion.textarea
            whileFocus={{ scale: 1.01 }}
            name="message"
            rows="5"
            required
            placeholder="Type your message here..."
            className="w-full px-4 py-2 bg-black/30 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></motion.textarea>
        </div>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg transition-all shadow-md hover:shadow-xl"
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Social Icons */}
      <div className="flex justify-center mt-14 gap-10 text-3xl">
        {socialLinks.map((social, i) => (
          <motion.a
            key={i}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default Contact;
