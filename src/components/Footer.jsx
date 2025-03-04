import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Logo / Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }} 
          className="text-2xl font-bold tracking-wide"
        >
        </motion.div>

        {/* Navigation Links */}
        <nav className="flex space-x-6 mt-4 md:mt-0 text-gray-300">
          {["About", "Projects", "Contact"].map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1, color: "#ffffff" }}
              transition={{ duration: 0.3 }}
              className="hover:text-white transition"
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Social Media Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <motion.a
            href="https://linkedin.com/in/bijoy-sing-236a5a1b2/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#0e76a8" }}
            transition={{ duration: 0.3 }}
            className="text-gray-300 hover:text-blue-400 transition"
          >
            <FaLinkedin size={24} />
          </motion.a>

          <motion.a
            href="https://github.com/bijoysing7"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#6cc644" }}
            transition={{ duration: 0.3 }}
            className="text-gray-300 hover:text-green-400 transition"
          >
            <FaGithub size={24} />
          </motion.a>

          <motion.a
            href="mailto:bijoysingh573@gmail.com"
            whileHover={{ scale: 1.2, color: "#ff5733" }}
            transition={{ duration: 0.3 }}
            className="text-gray-300 hover:text-red-400 transition"
          >
            <FaEnvelope size={24} />
          </motion.a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-6">
        &copy; {new Date().getFullYear()} Bijoy Sing. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
