import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-20 bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >

      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Skills & Expertise
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Technologies and competencies I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Languages */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-colors duration-300">
            <h3 className="text-lg font-semibold mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "SQL", "PL/SQL", "MongoDB", "R", "HTML"].map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-colors duration-300">
            <h3 className="text-lg font-semibold mb-4">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {["Pandas", "NumPy", "Matplotlib", "Power BI", "Excel", "SPSS", "Git", "GitHub", "VS Code", "Jupyter"].map((tool, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Data Science */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-colors duration-300">
            <h3 className="text-lg font-semibold mb-4">Data Science</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Data Cleaning",
                "EDA",
                "Visualization",
                "Statistical Analysis",
                "Time Series",
                "Outlier Detection",
                "Dashboards",
                "Automation"
              ].map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-colors duration-300">
            <h3 className="text-lg font-semibold mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Analytical Thinking",
                "Problem Solving",
                "Adaptability",
                "Time Management",
                "Communication",
                "Teamwork",
                "Decision Making",
                "Presentation"
              ].map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

    </motion.section>
  );
}

export default Skills;