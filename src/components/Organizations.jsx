import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: delay, ease: "easeOut" },
  }),
};

const organizations = [
  {
    name: "University Students Association of Bahubal (USAB)",
    role: "Vice President",
    duration: "03/2020 - Present",
    description: "Led events, seminars, and student programs. Managed the association's budget and resources.",
    logo: "src/assets/usab.jpg",
    website: "https://www.facebook.com/USAB.Live", // Replace with actual website URL
  },
  {
    name: "University Tea Students Association (UTSA)",
    role: "Organizing Secretary",
    duration: "02/2020 - Present",
    description: "Helped poor tea garden students with scholarships and mentorship. Organized events and workshops.",
    logo: "src/assets/utsa.jpg",
    website: "https://utsaofficial.org/", // Replace with actual website URL
  },
  {
    name: "SUST Business Club",
    role: "Member",
    duration: "2022 - Present",
    description: "Engaged in case competitions and workshops. Learned about business strategies and entrepreneurship.",
    logo: "src/assets/sbc.jpg",
    website: "https://www.facebook.com/sustbusinessclub", // Replace with actual website URL
  },
  {
    name: "Graduate Development Network (GDN)",
    role: "Participant",
    duration: "2023 - Present",
    description: "Participated in development workshops and networking events. Learned about leadership and community development.",  
    logo: "src/assets/gdn.jpg",
    website: "https://www.facebook.com/GDNsust", // Replace with actual website URL
  },
];

export default function Organizations() {
  return (
    <section id="organizations" className="py-20 bg-gray-900">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
        custom={0}
        className="text-4xl font-bold text-center text-cyan-200 mb-12"
      >
        Organizations & Clubs
      </motion.h2>

      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {organizations.map((org, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            custom={index * 0.3}
            className="bg-gray-800 p-6 rounded-lg shadow-md text-white flex flex-col items-center text-center"
          >
            <img src={org.logo} alt={org.name} className="w-16 h-16 mb-4 hover:scale-110 transition-transform duration-300" />

            <h3 className="text-2xl font-semibold">{org.role}</h3>
            <p className="text-gray-400">{org.name}</p>
            <p className="text-gray-500">{org.duration}</p>
            <p className="mt-2">{org.description}</p>

            <a href={org.website} target="_blank" rel="noopener noreferrer">
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
                Visit Website
              </button>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
