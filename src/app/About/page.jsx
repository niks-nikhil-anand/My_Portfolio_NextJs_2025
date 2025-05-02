"use client";
import { JourneyData } from "@/constants";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  FaWordpressSimple,
  FaShoppingCart,
  FaCode,
  FaLaptopCode,
  FaBrain,
} from "react-icons/fa";
import Button from "@/components/Button";

const AboutSection = () => {
  return (
    <section
      className="w-full bg-gradient-to-b from-gray-900 to-gray-800 px-6 py-24"
      id="about"
    >
      <div className="container mx-auto max-w-6xl space-y-24">
        {/* Heading */}
        <div className="flex items-center justify-center">
          <div className="h-1 w-10 bg-blue-500 mr-4 rounded-full" />
          <h2 className="h2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            My Journey
          </h2>
          <div className="h-1 w-10 bg-purple-500 ml-4 rounded-full" />
        </div>

        {/* Grid: About Me + Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* About Me */}
          <div className="bg-s1/50 backdrop-blur-lg border border-s3 rounded-xl p-8 md:p-10 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 space-y-4">
            <div className="flex justify-center">
              <Image
                src="/images/profile/niks.jpeg"
                alt="Profile picture of Nikhil Anand"
                width={144}
                height={144}
                className="w-36 h-36 md:w-40 md:h-40 border-4 rounded-full shadow-lg object-cover"
              />
            </div>
            <h3 className="h3 text-p5 text-center mt-4">About Me</h3>
            <p className="body-3 text-p4">
              I'm Nikhil Anand, a passionate Full Stack Developer with expertise
              in building real-world, scalable web applications. I’ve delivered
              4+ freelance full-stack projects, working closely with clients to
              solve practical problems through technology.
            </p>
            <p className="body-3 text-p4">
              My journey into tech began out of a strong desire to earn
              independently. Back in the pre-lockdown days, using a refurbished
              laptop worth ₹7000, I built my first website on WordPress for a
              client — a turning point that fueled my passion for web
              development.
            </p>
            <p className="body-3 text-p4">
              Since then, I’ve expanded my skills into modern technologies like
              React, Next.js, Node.js, and various cloud services, creating
              efficient, user-friendly applications that deliver real value to
              businesses.
            </p>
          </div>

          {/* Timeline */}
          <div className="bg-s1/50 backdrop-blur-lg border border-s3 rounded-xl p-8 md:p-10 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
            <h3 className="h3 text-p5 mb-6">Timeline</h3>
            <ul className="space-y-6">
              {JourneyData.map((item, index) => (
                <li key={index} className="relative pl-6">
                  <div className="absolute left-0 top-2 w-2 h-2 bg-p2 rounded-full" />
                  <div className="flex items-center gap-3 mb-1 text-p3">
                    <span className="text-lg text-p2">{item.icon}</span>
                    <p className="base-bold">{item.year}</p>
                  </div>
                  <p className="font-semibold text-p4">{item.title}</p>
                  <p className="body-3 text-p4">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center pt-16">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold text-gray-50 leading-snug"
          >
            Ready to take <span className="text-purple-500">your</span>{" "}
            digital presence to the next level?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-gray-400 text-lg md:text-xl mt-6"
          >
            Reach out to me today and let's discuss how I can help you achieve
            your goals.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            className="inline-block mt-10"
          >
            <Button icon="/images/zap.svg">Let's get in touch</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
