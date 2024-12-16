"use client"
import React from "react";
import { motion } from "framer-motion";

const WorkExperience = () => {
  const experiences = [
    {
      title: "Frontend Engineer Intern",
      description:
        "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      icon: "🧑‍💻",
    },
    {
      title: "Mobile App Dev - JSM Tech",
      description:
        "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      icon: "📈",
    },
    {
      title: "Freelance App Dev Project",
      description:
        "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      icon: "💡",
    },
    {
      title: "Lead Frontend Developer",
      description:
        "Developed and maintained user-facing features using modern frontend technologies.",
      icon: "👩‍💻",
    },
  ];

  return (
    <div className=" container relative z-2 py-24 md:py-28 lg:py-30">
      <h2 className="h3 max-md:h5 text-p3 font-bold text-center mb-8">
        My <span className="h3 max-md:h5 text-p4">work experience</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 max-w-6xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative rounded-xl bg-[#111131] p-6 border-2 border-transparent bg-clip-padding hover:border-purple-500"
          >
            <div className="flex items-center gap-4">
              
              <div className="text-5xl">
                {exp.icon}
                </div>
              <div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-gray-400 text-sm">{exp.description}</p>
              </div>
            </div>
            <div className="absolute inset-0 rounded-xl border-[3px] border-transparent "></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
