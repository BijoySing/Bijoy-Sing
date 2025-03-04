import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram ,FaFacebook} from "react-icons/fa"; // Import icons

export default function Banner() {
  return (
    <section
      id="home"
      className="w-full mx-auto h-screen flex flex-col md:flex-row-reverse items-center justify-center bg-gray-800 px-6"
    >
      {/* Left Side - Enlarged Image on Large Screens */}
      <div className="w-3/4 sm:w-2/3 md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src="dp-Photoroom.png" // Ensure the image is in the "public" folder
          alt="Profile"
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-[500px] md:h-[500px] lg:w-[800px] lg:h-[650px] object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Right Side - Animated Text */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 5 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="md:w-1/2 text-center md:text-left px-4"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-extrabold text-center text-gray-100 mb-6 sm:mb-10 mt-6 sm:mt-10">
          Hi, I'm <span className="text-cyan-400">Bijoy Sing</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-50 mb-6 sm:mb-8 max-w-xl sm:max-w-3xl mx-auto text-center leading-relaxed tracking-wide">
          I am a Computer Science and Engineering student at
          <span className="text-blue-600 font-extrabold"> SUST</span>, skilled in
          <span className="text-green-500 font-bold"> C</span>,
          <span className="text-red-600 font-bold"> C++</span>,
          <span className="text-yellow-400 font-bold"> Python</span>, and
          <span className="text-purple-500 font-bold"> Java</span>.
          I've solved over 1500 problems on coding platforms, demonstrating my problem-solving abilities.
          I aim to apply my skills to real-world challenges and contribute to the tech industry.
        </p>

        <motion.div className="flex justify-center space-x-4 sm:space-x-6 mt-4 sm:mt-6">
          {/* Social Media Icons */}
          <a
            href="https://github.com/BijoySingh7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-blue-500 transition"
          >
            <FaGithub size={30} sm:size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/bijoy-sing-236a5a1b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-700 transition"
          >
            <FaLinkedin size={30} sm:size={40} />
          </a>
          <a
            href="https://twitter.com/BijoySingh7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-400 transition"
          >
            <FaTwitter size={30} sm:size={40} />
          </a>
          <a
            href="https://www.instagram.com/bijoysingh7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-800 hover:text-pink-600 transition"
          >
            <FaInstagram size={30} sm:size={40} />
          </a>
          <a
            href="https://www.facebook.com/bijoy.sing.706042/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-200 hover:text-blue-600 transition"
          >
            <FaFacebook size={30} sm:size={40} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
