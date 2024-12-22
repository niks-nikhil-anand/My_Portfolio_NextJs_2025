"use client";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { FaWhatsapp, FaEnvelope, FaClipboard, FaPhone } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="container text-gray-300 py-10 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo & Address */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <h1 className="text-yellow-500 text-2xl font-bold">Logo</h1>
            <h1 className="text-xl font-semibold text-white">BringSmile Foundation</h1>
          </div>
          <p>
            Email: <a href="mailto:support@bringsmile.org" className="hover:text-yellow-500">support@bringsmile.org</a>
          </p>
          <p>
            Tel: <a href="tel:+919599322679" className="hover:text-yellow-500">+91 95993 22679</a>
          </p>
          <p>Singhi Kalan, PO- Ara, District- Bhojpur, Bihar, Pin- 802301.</p>
          <button className="mt-4 bg-yellow-500 text-black py-2 px-6 rounded-md hover:bg-yellow-600 transition-shadow shadow-md hover:shadow-lg">
            GET DIRECTIONS
          </button>
        </div>

        {/* Useful Links */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white">Useful Links</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/ourProgram" className="hover:text-yellow-500">Our Programs</Link>
            </li>
            <li>
              <Link href="/ourMission" className="hover:text-yellow-500">Our Mission</Link>
            </li>
            <li>
              <Link href="/impactStories" className="hover:text-yellow-500">Impact Stories</Link>
            </li>
            <li>
              <Link href="/aboutUs" className="hover:text-yellow-500">About Us</Link>
            </li>
          </ul>
        </div>

        {/* Contact Options */}
                  <div className="space-y-4">
            <h2 className="text-lg font-bold text-white">Contact Us</h2>
            <button className="w-full flex items-center space-x-2 bg-[#1b1b33] text-white py-2 px-4 rounded-md hover:bg-[#2e2e58] transition-shadow shadow-md hover:shadow-lg">
              <FaWhatsapp className="text-green-500 text-xl" />
              <a href="https://wa.me/919599322679" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
            </button>
            <button className="w-full flex items-center space-x-2 bg-[#1b1b33] text-white py-2 px-4 rounded-md hover:bg-[#2e2e58] transition-shadow shadow-md hover:shadow-lg">
              <FaEnvelope className="text-blue-500 text-xl" />
              <a href="mailto:support@bringsmile.org">Email</a>
            </button>
            <button className="w-full flex items-center space-x-2 bg-[#1b1b33] text-white py-2 px-4 rounded-md hover:bg-[#2e2e58] transition-shadow shadow-md hover:shadow-lg">
              <FaClipboard className="text-yellow-500 text-xl" />
              <a href="/contactForm">Contact Form</a>
            </button>
            <button className="w-full flex items-center space-x-2 bg-[#1b1b33] text-white py-2 px-4 rounded-md hover:bg-[#2e2e58] transition-shadow shadow-md hover:shadow-lg">
              <FaPhone className="text-red-500 text-xl" />
              <a href="tel:+919599322679">Call Me</a>
            </button>
          </div>


        {/* Social Links */}
        <div className="flex flex-col space-y-6 mt-4 md:mt-0">
          <h2 className="text-lg font-bold text-white">Follow Us</h2>
          <div className="flex space-x-6">
            <Link href="https://www.facebook.com/BringSmileNow" className="text-xl hover:text-yellow-500 transition">
              <FaFacebookF />
            </Link>
            <Link href="https://x.com/bringsmilenow" className="text-xl hover:text-yellow-500 transition">
              <FaTwitter />
            </Link>
            <Link href="https://www.instagram.com/BringSmileNow" className="text-xl hover:text-yellow-500 transition">
              <FaInstagram />
            </Link>
            <Link href="https://www.linkedin.com/in/bringsmileindia/" className="text-xl hover:text-yellow-500 transition">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <div className="text-sm space-x-4">
          <Link href="/returnPolicy" className="hover:text-yellow-500">Return Policy</Link>
          <Link href="/privacyPolicy" className="hover:text-yellow-500">Privacy Policy</Link>
          <Link href="/termsAndConditions" className="hover:text-yellow-500">Terms of Use</Link>
        </div>
        <p className="text-gray-500 mt-4">BringSmile Foundation © 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
