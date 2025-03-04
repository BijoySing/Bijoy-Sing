import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: delay, ease: "easeOut" },
  }),
};

export default function Education() {
  return (
    <section id="education" className="py-20 bg-black text-white">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
        custom={0}
        className="text-5xl font-bold text-center mb-12 text-cyan-200"
      >
        Education
      </motion.h2>

      <div className="max-w-4xl mx-auto px-4">
        {/* University */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          custom={0.3}
          className="mb-8 p-4 bg-gray-800 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4"
        >
          <img src="/src/assets/sust.png" alt="SUST Logo" className="w-20 h-20 rounded-2xl" />
          <div>
            <h3 className="text-2xl font-bold text-blue-300">Shahjalal University of Science and Technology</h3>
            <h3 className="font-semibold">Bachelor of Science in Computer Science and Engineering</h3>
            <p>02/2020 - Present</p>
            <p className="flex items-center justify-center md:justify-start gap-2"><FaMapMarkerAlt /> Sylhet, Bangladesh</p>
            <p className="mt-2">Courses: Computer Science and Engineering</p>
          </div>
        </motion.div>

        {/* High School */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          custom={0.6}
          className="mb-8 p-4 bg-gray-800 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4"
        >
          <img src="/src/assets/buds.png" alt="Buds Logo" className="w-20 h-20 rounded-2xl" />
          <div>
            <p className="text-2xl font-bold text-blue-300">The Buds' Residential Model School & College</p>
            <h3 className="font-semibold">Higher Secondary Certificate</h3>
            <p>07/2017 - 06/2019</p>
            <p className="flex items-center justify-center md:justify-start gap-2"><FaMapMarkerAlt /> Sreemongol, Bangladesh</p>
            <p className="mt-2"><span className="font-bold">Group: Science</span></p>
          </div>
        </motion.div>

        {/* Secondary School */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          custom={0.9}
          className="mb-8 p-4 bg-gray-800 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4"
        >
          <img src="/src/assets/dni.jpg" alt="DNI Logo" className="w-20 h-20 rounded-2xl" />
          <div>
            <p className="text-2xl font-bold text-blue-300">Deena-nath Institution Satkapon Model High School</p>
            <h3 className="font-semibold">Secondary School Certificate</h3>
            <p>01/2011 - 12/2017</p>
            <p className="flex items-center justify-center md:justify-start gap-2"><FaMapMarkerAlt /> Habiganj, Bangladesh</p>
            <p className="mt-2"><span className="font-bold">Group: Science</span></p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
