"use client"
import React from "react";
import { motion } from "framer-motion";

const WorkExperience = () => {
  const experiences = [
    {
      title: "Frontend Engineer Intern",
      description:
        "Assisted in the development of a web-based platform using React.js, enhancing interactivity and improving user experience.",
      icon: "🧑‍💻",
    },
    {
      title: "Freelance Web Developer",
      description:
        "Worked as a freelance developer for over 2 years, successfully delivering 50+ websites tailored to client requirements across diverse industries. Specialized in crafting scalable and visually stunning web solutions.",
      icon: "💡",
    },
    {
      title: "Full-Stack Developer - Prestigious Firm",
      description:
        "Served as a Full-Stack Developer in a renowned organization, contributing to the development of high-performance applications using cutting-edge technologies. Ensured scalability and optimized workflows.",
      icon: "👨‍💻",
    },
    {
      title: "Lead Backend Developer",
      description:
        "Led the backend development team, building scalable server-side logic, optimizing database queries, and ensuring high performance for all APIs and services.",
      icon: "👩‍💻",
    },
  ];
  

  return (
    <div className="container relative z-2 py-24 md:py-28 lg:py-30">
  <h2 className="text-3xl md:text-4xl text-purple-700 font-bold text-center mb-8">
    My <span className="text-white">work experience</span>
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 max-w-6xl mx-auto">
    {experiences.map((exp, index) => (
      <motion.div
        key={index}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative rounded-xl bg-[#111131] p-6 border-2 border-transparent bg-clip-padding hover:text-p1 shadow-lg"
      >
        <div className="flex items-center gap-4">
          <div className="text-5xl text-purple-700">{exp.icon}</div>
          <div>
            <h3 className="text-xl font-semibold text-gray-50 ">{exp.title}</h3>
            <p className="text-sm text-gray-400">{exp.description}</p>
          </div>
        </div>
        <div className="absolute inset-0 rounded-xl border-[3px] border-transparent"></div>
      </motion.div>
    ))}
  </div>
</div>

  );
};

export default WorkExperience;
