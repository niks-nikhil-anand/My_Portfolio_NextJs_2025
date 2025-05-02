"use client"
import React from "react";
import { motion } from "framer-motion";
import Button from "../Button";
import icon from '../../../public/images/icons/airplane.png'

const DigitalPresenceCTA = () => {
  return (
    <div className="container relative text-center min-h-screen flex items-center justify-center px-4">
  <div className="space-y-8">
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-4xl md:text-6xl font-bold text-gray-50 leading-snug"
    >
      Ready to take{" "}
      <span className="text-purple-500">your</span> digital presence to the
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
      <div className="mt-10 flex w-full justify-center">
           <Button icon="/images/zap.svg">Let's get in touch </Button>
        </div>
    </motion.div>
  </div>
</div>

  );
};

export default DigitalPresenceCTA;
