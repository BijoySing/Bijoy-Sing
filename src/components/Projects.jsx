import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaCloud, FaHtml5, } from "react-icons/fa";
import { FaC, FaCss3Alt, } from "react-icons/fa6";


const projects = [
  {
    title: "Event Management",
    description: "Crafting unforgettable memories with passion and creativity.",
    image: "/src/assets/event.jpeg",
    demo: "https://eventhub-new.surge.sh/",
    github: "https://github.com/Bijoysing/Event-Management",
    techStack: [FaReact, FaNodeJs, FaCloud]
  },
    {
    title: "Urban Workers",
    description: "A system that connects local workers with clients seeking specific services.",
    image: "/src/assets/workers.png",
    demo: "https://bijoysing.github.io/Urban-Workers/index.html",
    github: "https://github.com/BijoySing/Urban-Workers",
    techStack: [FaReact,FaDatabase,FaHtml5,FaCss3Alt],
  },
  {
    title: "Digital Library Management",
    description: "A system designed to manage library resources efficiently, allowing users to borrow, return, and search for books easily.",
    image: "/src/assets/digital.jpeg",
    demo: "https://eduhub-learning.netlify.app/",
    github: "https://github.com/Bijoysing/EduHub",
    techStack: [FaReact, FaNodeJs, FaDatabase]
  },
  {
    title: "Gadget Hub",
    description: "An online platform for buying and selling electronic gadgets.",
    image: "/src/assets/gadget.jpeg",
    demo: "https://gadgethub.surge.sh/",
    github: "https://github.com/BijoySing/GadgetHub",
    techStack: [FaReact, FaNodeJs, FaDatabase]
  },
  {
    title: "Gamer Zone",
    description: "A gaming platform for playing and competing with friends.",
    image: "/src/assets/game.avif",
    demo: "https://bijoysing.github.io/Gamer-Zone/",
    github: "https://github.com/BijoySing/Gamer-Zone",
    techStack: [FaReact, FaNodeJs, FaCloud]
  },
  {
    title: "IOT Project : Fire Alarm System",
    description: "A system that detects fire and sends alerts to the user's phone.",
    image: "/src/assets/fire.jpg",
    demo: "https://youtu.be/poF4Ar2WQ7c",
    techStack: [FaReact, FaDatabase]
  },
  
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: delay, ease: "easeOut" },

  }),
};

export default function Projects() {
  return (
    <section id="projects" className="  py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
        custom={0}
        className="text-4xl font-bold text-center mb-12 text-cyan-200"
      >
Academic and Personal Projects
</motion.h2>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            custom={index * 0.3}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-gray-700 transition border border-gray-700"
          >
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-semibold mb-4 text-white">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex gap-3 text-gray-400 text-2xl mb-4">
              {project.techStack?.map((Icon, idx) => (
                <Icon key={idx} className="hover:text-white transition" />
              ))}
            </div>
            <div className="flex gap-4">
              <motion.a
                href={project.demo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </motion.a>
              {project.github && (
                <motion.a
                  href={project.github}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
