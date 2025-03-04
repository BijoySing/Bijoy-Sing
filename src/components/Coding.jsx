import { FaCode, FaCodeBranch } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";
import { motion } from "framer-motion";

const codingProfiles = [
  {
    name: "Codeforces",
    icon: <SiCodeforces size={40} className="text-yellow-400" />,
    handle: "Bijoysingh7",
    link: "https://codeforces.com/profile/Bijoysingh7",
    problemsSolved: "Solved 800+ problems",
    rank: "Pupil",
    rating: "1350+",
    buttonColor: "bg-yellow-600", // Codeforces button color
  },
  {
    name: "CodeChef",
    icon: <SiCodechef size={40} className="text-brown-600" />,
    handle: "Bijoysingh7",
    link: "https://www.codechef.com/users/bijoy_sing7",
    problemsSolved: "Solved 300+ problems",
    rank: "3-star",
    rating: "1650+",
    buttonColor: "bg-gray-600", // CodeChef button color
  },
  {
    name: "LeetCode",
    icon: <SiLeetcode size={40} className="text-yellow-500" />,
    handle: "Bijoysingh7",
    link: "https://leetcode.com/Bijoysingh7/",
    problemsSolved: "Solved 400+ problems",
    rank: "Top 26%",
    rating: "1573+",
    country: "Bangladesh",
    buttonColor: "bg-yellow-800", // LeetCode button color
  },
  {
    name: "VJudge",
    icon: <img src="src/assets/vjudge.jpeg" alt="VJudge" className="w-10 h-10" />,
    handle: "Bijoysingh7",
    link: "https://vjudge.net/user/2019331107",
    problemsSolved: "Solved 300+ problems",
    rank: "Contestant",
    rating: "N/A",
    country: "Bangladesh",
    buttonColor: "bg-green-800", // VJudge button color
  }
];

export default function Coding() {
  return (
    <section id="coding" className="py-16 px-4 md:px-8 bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-12 text-cyan-200">My Coding Journey Across Platforms</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {codingProfiles.map((profile, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center text-center text-white"
            whileHover={{ scale: 1.05 }}
          >
            {profile.icon}
            <h3 className="mt-3 text-lg font-semibold">{profile.name}</h3>
            <div className="mt-3 text-sm text-gray-400">
              <p>{profile.problemsSolved}</p>
              <p>Rank: {profile.rank}</p>
              <p>Rating: {profile.rating}</p>
            </div>
            <div className="mt-4">
              <a href={profile.link} target="_blank" rel="noopener noreferrer">
                <motion.button
                  className={`${profile.buttonColor} text-white px-4 py-2 rounded-full font-semibold transition duration-300 ease-in-out hover:bg-opacity-800 cursor-pointer`}
                  whileHover={{ scale: 1.1 }}
                >
                  @{profile.handle}
                </motion.button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
