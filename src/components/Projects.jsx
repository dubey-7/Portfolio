import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >

      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Projects
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          A selection of my recent work
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6">

        <h3 className="text-xl font-semibold mb-8">
          Featured Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-8">

          {[
            {
              title: "AI Mock Interview Platform",
              desc: "Built an interactive platform that simulates real interview experiences using AI.",
              focus: "AI-based interaction",
              image: "/images/ai-interview.png",
              github: "https://github.com/dubey-7/ai_mock_interview",
              demo: ""
            },
            {
              title: "Air Pollution Analysis",
              desc: "Analyzed pollution data to identify patterns and environmental impact.",
              focus: "Data analysis",
              image: "/images/air-pollution.png",
              github: "https://github.com/dubey-7/air-pollution-conversation-analysis-india",
              demo: ""
            },
            {
              title: "Personal Finance Tracker",
              desc: "Tracked and analyzed expenses for better financial decisions.",
              focus: "Visualization",
              image: "/images/finance.png",
              github: "https://github.com/dubey-7/personal-finance-tracker",
              demo: ""
            },
            {
              title: "AdventureWorks Dashboard",
              desc: "Interactive dashboard for sales trends and insights.",
              focus: "Power BI Dashboard",
              image: "/images/dashboard.png",
              github: "https://github.com/dubey-7/AdventureWorks-Sales-Dashboard",
              demo: ""
            }
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >

              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">

                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.desc}
                </p>

                <div className="mb-6">
                  <span className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs px-3 py-1 rounded-full">
                    {project.focus}
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">

                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <button className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition">
                      GitHub
                    </button>
                  </a>

                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <button className="border px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                        Live Demo
                      </button>
                    </a>
                  )}

                </div>

              </div>
            </motion.div>
          ))}

        </div>

        {/* Other Projects */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6">
            Other Projects
          </h3>

          <div className="grid sm:grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
            <p>• Page View Time Series Visualizer</p>
            <p>• Sea Level Predictor</p>
            <p>• Demographic Data Analyzer</p>
            <p>• Aavishkar Research</p>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}

export default Projects;