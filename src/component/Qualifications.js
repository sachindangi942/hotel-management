// "use client";
// import React from "react";
// import { FaSchool, FaUniversity, FaGraduationCap } from "react-icons/fa";
// import { motion } from "framer-motion";

// const qualifications = [
//   {
//     title: "High School (10th)",
//     institution: "Maharana Pratap Convent H S School, Ahmadpur Sehore",
//     year: "2013 - 2020",
//     icon: <FaSchool size={50} className="text-blue-600" />,
//   },
//   {
//     title: "Higher Secondary (12th)",
//     institution: "Maharana Pratap Convent H S School, Ahmadpur Sehore",
//     year: "2013 - 2020",
//     icon: <FaSchool size={50} className="text-green-600" />,
//   },
//   {
//     title: "B.Tech in CSE",
//     institution: "Truba College of Science and Technology, Bhopal",
//     year: "2020 - 2024",
//     icon: <FaUniversity size={50} className="text-yellow-500" />,
//   },
//   {
//     title: "Internship (MERN Stack)",
//     institution: "Vanjain Technology, Bhopal",
//     year: "6 Months (2024 - 2025)",
//     icon: <FaGraduationCap size={50} className="text-red-500" />,
//   },
// ];

// const Qualification = () => {
//   return (
//     <motion.section
//       id="qualification"
//       className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 text-white 
//       py-16 px-4 bg-white dark:bg-gray-900 transition-all duration-500"
//     >
//       <h2 className="w-fit mx-auto text-4xl md:text-5xl font-bold text-center text-blue-600 mb-12 hover:scale-110 transition-transform duration-500">
//         My Qualifications
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {qualifications.map((q, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: index * 0.1 }}
//             className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 text-center transform
//              hover:scale-110 transition-transform duration-300 border dark:border-gray-700"
//           >
//             <div className="flex justify-center mb-4">{q.icon}</div>
//             <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{q.title}</h3>
//             <p className="text-gray-500 dark:text-gray-300 mt-1">{q.institution}</p>
//             <p className="text-sm text-gray-400 dark:text-gray-400 mt-2">{q.year}</p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.section>
//   );
// };

// export default Qualification;



"use client";
import React from "react";
import { FaSchool, FaUniversity, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const qualifications = [
  {
    title: "High School (10th)",
    institution: "Maharana Pratap Convent H S School, Ahmadpur Sehore",
    year: "2013 - 2020",
    icon: <FaSchool size={50} className="text-blue-600" />,
  },
  {
    title: "Higher Secondary (12th)",
    institution: "Maharana Pratap Convent H S School, Ahmadpur Sehore",
    year: "2013 - 2020",
    icon: <FaSchool size={50} className="text-green-600" />,
  },
  {
    title: "B.Tech in CSE",
    institution: "Truba College of Science and Technology, Bhopal",
    year: "2020 - 2024",
    icon: <FaUniversity size={50} className="text-yellow-500" />,
  },
  {
    title: "Internship (MERN Stack)",
    institution: "Vanjain Technology, Bhopal",
    year: "6 Months (2024 - 2025)",
    icon: <FaGraduationCap size={50} className="text-red-500" />,
  },
];

const Qualification = () => {
  return (
    <motion.section
      id="qualification"
      className=" text-white py-16 px-4 transition-all duration-500"
    >
      <h2 className="w-fit mx-auto text-4xl md:text-5xl font-bold text-center text-blue-600 mb-12 hover:scale-110 transition-transform duration-500">
        My Qualifications
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {qualifications.map((q, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-gray-800/50 backdrop-blur-md shadow-lg rounded-2xl p-6 text-center border border-gray-700 transition-transform duration-300"
          >
            <div className="flex justify-center mb-4">{q.icon}</div>
            <h3 className="text-xl font-semibold text-white">{q.title}</h3>
            <p className="text-gray-300 mt-1">{q.institution}</p>
            <p className="text-sm text-gray-400 mt-2">{q.year}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Qualification;
