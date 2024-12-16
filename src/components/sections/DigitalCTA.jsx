"use client"
import React from "react";
import { motion } from "framer-motion";

const DigitalPresenceCTA = () => {
  return (
    <div className="bg-[#0f0f1a] text-center min-h-screen flex items-center justify-center px-4">
      <div className="space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-white leading-snug"
        >
          Ready to take{" "}
          <span className="text-[#b294ff]">your</span> digital presence to the
          next level?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-gray-400 text-lg md:text-xl"
        >
          Reach out to me today and let's discuss how I can help you achieve
          your goals.
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
          className="inline-block"
        >
          <button className="bg-[#1b1b33] hover:bg-[#2e2e58] text-white text-lg font-semibold py-3 px-6 rounded-lg border border-[#292952] shadow-md">
            Let's get in touch <span className="ml-2">✈️</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default DigitalPresenceCTA;
