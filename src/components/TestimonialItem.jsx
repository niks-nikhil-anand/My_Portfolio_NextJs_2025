"use client";
import { motion } from "framer-motion";
import clsx from "clsx";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const TestimonialItem = ({ item, containerClassName }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={clsx(
        "relative px-14 pb-14 pt-11 shadow-lg rounded-lg max-md:px-4 max-md:pt-8",
        containerClassName
      )}
    >
      <div className="mb-6 relative w-full" style={{ aspectRatio: '1/1' }}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover rounded-lg"
          priority={false}
        />
      </div>

      <h4 className="body-2 mb-2 text-p1 font-bold">{item.title}</h4>
      <div className="flex gap-3 my-5">
        {item.github && (
          <motion.a
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#24292e",
              color: "#ffffff",
            }}
            className="flex items-center gap-2 px-3 py-2 rounded-md  text-white transition-all duration-300 hover:shadow-md"
          >
            <FaGithub size={18} />
          </motion.a>
        )}
        {item.live && (
          <motion.a
            href={item.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#0070f3",
              color: "#ffffff",
            }}
            className="flex items-center gap-2 px-3 py-2 rounded-md text-white transition-all duration-300 hover:shadow-md"
          >
            <FaExternalLinkAlt size={16} />
          </motion.a>
        )}
      </div>
      <p className="text-p4 mb-6">{item.subtitle}</p>

      <div className="flex flex-wrap gap-4 mb-6">
        {item.techUsed?.map((tech, index) => (
          <motion.span
            key={index}
            className="px-5 py-1 text-sm bg-s2 text-white rounded-full hover:text-p1 cursor-pointer"
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
            }}
          >
            {tech}
          </motion.span>
        ))}
      </div>

      <div className="flex items-center justify-between mb-6">
        <p className="small-compact uppercase text-s3">{item.author}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialItem;