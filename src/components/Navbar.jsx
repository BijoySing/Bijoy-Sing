import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav  id="nav" className="bg-blue-950 shadow-lg fixed w-full z-20 text-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex justify-between h-16 items-center">
        {/* Logo */}
        <a href="#home" className=" font-bold">
          <img className="w-[200px]" src="/src/assets/logo.png" alt="" />
        </a>
        {/* Desktop Menu */}
        <div className="text-red-100 hidden md:flex space-x-6 items-center">
          {["Home", "Education", "Organizations", "Projects", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="text-gray-100 font-semibold hover:text-red-300 transition-colors"
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className=" md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 ">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900 text-amber-100 shadow-md"
          >
            {["Home", "Education", "Organizations", "Projects", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="block px-6 py-3 text-gray-100 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}