import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      id="home"
      className="flex items-center justify-center px-20 py-24 bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-3xl text-center">

        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Sakshi Dubey
        </h1>

        {/* Role / Positioning */}
        <h2 className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
          Data Science & AI Graduate | Data Processing Analyst
        </h2>

        {/* Tagline */}
        <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
          Turning data into meaningful insights and building solutions that support informed decision-making.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          {/* View Projects */}
          <a href="#projects">
            <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition">
              View Projects
            </button>
          </a>

          {/* Resume */}
          <a href="https://docs.google.com/document/d/1TnfQCNTGhx2XRQJSwuhKMxwTduin7i_L/edit?usp=sharing&ouid=110464800760579816305&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
            <button className="border px-6 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              View Resume
            </button>
          </a>

        </div>

      </div>
    </motion.section>
  );
}

export default Hero;