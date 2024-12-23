"use client";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { FaWhatsapp, FaEnvelope, FaClipboard , FaGithub } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import Button from "../Button";


const Footer = () => {
  return (
    <footer className="container text-gray-300 py-10 px-4 sm:px-6 md:px-12 lg:px-16">
  <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
  {/* Logo & Address */}
  <div className="space-y-6">
    <div className="flex items-center space-x-3">
      <h1 className="text-yellow-500 text-3xl font-extrabold">Logo</h1>
      <h1 className="text-2xl font-semibold text-white">DevTrekker</h1>
    </div>
    <p className="text-gray-300">
      Email:{" "}
      <a
        href="mailto:support@devtrekker.org"
        className="hover:text-p1"
      >
        support@devtrekker.org
      </a>
    </p>
    <p className="text-gray-300">
      Tel:{" "}
      <a href="tel:+919599322679" className="hover:text-p1">
        +91 9631 494191
      </a>
    </p>
    <p className="text-gray-300">Laxmi Nagar, New Delhi Pin-802301</p>
    <Button icon="/images/zap.svg">Hire me now</Button>

  </div>

  {/* Useful Links */}
  <div className="space-y-6">
    <h2 className="text-lg font-bold text-white">Useful Links</h2>
    <ul className="space-y-3">
      <li>
        <a href="/ourProgram" className="hover:text-p1 text-gray-300">
        Blogs 
       </a>
      </li>
      <li>
        <a href="/ourMission" className="hover:text-p1 text-gray-300">
          Mission
        </a>
      </li>
      <li>
        <a
          href="/impactStories"
          className="hover:text-p1 text-gray-300"
        >
          Contact Us
        </a>
      </li>
      <li>
        <a href="/aboutUs" className="hover:text-p1 text-gray-300">
          About Us
        </a>
      </li>
    </ul>
  </div>

  {/* Recent Projects */}
  <div className="space-y-4">
    <h2 className="text-lg font-bold text-white">Latest Projects</h2>
    <div className="space-y-4">
      {/* Project 1 */}
      <div className="flex items-center space-x-4">
        <img
          src="/images/testimonials/ecommerce-websites.jpg"
          alt="Sees boom in younger volunteers"
          className="w-16 h-16 object-cover rounded-md shadow-md"
        />
        <div>
          <h3 className="text-white font-semibold">
            Sees boom in younger volunteers
          </h3>
          <p className="text-gray-400 text-sm">September 14, 2024</p>
        </div>
      </div>
      {/* Project 2 */}
      <div className="flex items-center space-x-4">
        <img
          src="/images/testimonials/ecommerce-websites.jpg"
          alt="Breaking Barriers: Empowering Women in Sports"
          className="w-16 h-16 object-cover rounded-md shadow-md"
        />
        <div>
          <h3 className="text-white font-semibold">
            Breaking Barriers: Empowering Women in Sports
          </h3>
          <p className="text-gray-400 text-sm">June 11, 2024</p>
        </div>
      </div>
    </div>
  </div>

  {/* Contact Options */}
  <div className="space-y-6">
    <h2 className="text-lg font-bold text-white">Contact Us</h2>
    <motion.a
  href="https://wa.me/919599322679"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center space-x-3 bg-[#1b1b33] text-white py-3 px-5 rounded-2xl hover:text-p1 transition-shadow shadow-lg hover:shadow-xl"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <FaWhatsapp className="text-green-500 text-xl" />
  <span>Chat on WhatsApp</span>
</motion.a>
<motion.a
  href="mailto:support@devtrekker.org"
  className="flex items-center space-x-3 bg-[#1b1b33] text-white py-3 px-5 rounded-2xl hover:text-p1 transition-shadow shadow-lg hover:shadow-xl"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <FaEnvelope className="text-blue-500 text-xl" />
  <span>Email</span>
</motion.a>

<motion.a
  href="/contactForm"
  className="flex items-center space-x-3 bg-[#1b1b33] text-white py-3 px-5 rounded-2xl hover:text-p1 transition-shadow shadow-lg hover:shadow-xl"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <FaClipboard className="text-yellow-500 text-xl" />
  <span>Contact Form</span>
</motion.a>

<motion.a
  href="tel:+919599322679"
  className="flex items-center space-x-3 bg-[#1b1b33] text-white py-3 px-5 rounded-2xl hover:text-p1 transition-shadow shadow-lg hover:shadow-xl"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <IoCall className="text-red-500 text-xl" />
  <span>Call Me</span>
</motion.a>
  </div>
</div>


  {/* Footer Bottom */}
  <div className="mt-8 text-center border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
    <p className="text-gray-500">DevTrekker © 2024. All Rights Reserved.</p>
    <div className="flex space-x-6 mt-4 md:mt-0">
      <a
        href="https://x.com/bringsmilenow"
        className="text-xl hover:text-yellow-500 transition"
        aria-label="Twitter"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.instagram.com/BringSmileNow"
        className="text-xl hover:text-yellow-500 transition"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.linkedin.com/in/bringsmileindia/"
        className="text-xl hover:text-yellow-500 transition"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <Link
        href={"wa.link/oj5ygd"}
        className="text-xl hover:text-p1 transition"
        aria-label="LinkedIn"
      >
        <FaWhatsapp />
      </Link>
      <Link
      href={"https://github.com/niks-nikhil-anand"}
        className="text-xl hover:text-p1 transition"
        aria-label="LinkedIn"
      >
        <FaGithub />
      </Link>
    </div>
    <div className="text-sm space-x-4 mt-4 md:mt-0">
      <a
        href="/privacyPolicy"
        className="hover:text-p1 bg-[#1b1b33] px-4 py-1 rounded-xl font-bold"
      >
        Privacy Policy
      </a>
      <a
        href="/returnPolicy"
        className="hover:text-p1 bg-[#1b1b33] px-4 py-1 rounded-xl font-bold"
      >
        Refund & Return Policy
      </a>
      <a
        href="/termsAndConditions"
        className="hover:text-p1 bg-[#1b1b33] px-4 py-1 rounded-xl font-bold"
      >
        Terms of Use
      </a>
    </div>
  </div>
</footer>

  );
};

export default Footer;
