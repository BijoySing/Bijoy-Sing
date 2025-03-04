import { motion } from "framer-motion";
import { hr } from "framer-motion/client";
import { FaTrophy, FaLightbulb, FaBusinessTime, FaMedal } from "react-icons/fa";

const achievements = [
  {
    title: "Innovation Hub Program",
    description:
      "Secured 30,000 Taka prize for Rental Solution BD, organized by the Bangladesh Hi-Tech Park Authority, ICT Division, and The World Bank.",
    icon: <FaLightbulb size={40} className="text-yellow-500" />,
  },
  {
    title: "Semi-finalist at MASTERMIND 2.0",
    description: "A National Case Competition showcasing problem-solving skills.",
    icon: <FaMedal size={40} className="text-blue-400" />,
  },
  {
    title: "Semi-finalist at BIZ Expo 1.0 - CASESTUDIO",
    description: "A national case-solving competition with strategic business solutions.",
    icon: <FaBusinessTime size={40} className="text-green-400" />,
  },
  {
    title: "7th Place - CSE Carnival Hackathon 2023",
    description: "Developed 'Heart Heal', a health solutions website, in a competitive coding challenge.",
    icon: <FaTrophy size={40} className="text-red-500" />,
  },
];

export default function Achievement() {
  return (
    
    <section id="achievements" className="py-16 px-4 md:px-8 bg-gray-800 shadow-lg hover:shadow-xl transition duration-300">
        
      <h2 className="text-5xl font-bold text-center mb-12 text-cyan-200">Achievements</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="p-6 bg-black rounded-xl shadow-lg hover:shadow-4xl transition duration-300 flex flex-col items-center text-center text-white"
            whileHover={{ scale: 1.05 }}
          >
            {achievement.icon}
            <h3 className="mt-3 text-lg font-semibold">{achievement.title}</h3>
            <p className="mt-2 text-sm text-gray-400">{achievement.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
