import AnimatedSection from "./AnimatedSection";

function Experience() {
  return (
    <AnimatedSection>
      <section
        id="experience"
        className="py-20 bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300"
      >

        <div className="max-w-4xl mx-auto px-6">

          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Experience
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Professional journey and work contributions
            </p>
          </div>

          {/* Experience List */}
          <div className="space-y-8">

            {/* Current Role */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-colors duration-300">

              <div className="mb-3">
                <h3 className="text-xl font-semibold">
                  Data Processing Analyst
                </h3>
                <p className="text-gray-500 dark:text-gray-300 text-sm">
                  Ipsos • Present
                </p>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Working with data to clean, organize, and prepare it for analysis. 
                Focused on improving data quality and supporting accurate reporting and insights for decision-making.
              </p>

            </div>

            {/* Internship */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-colors duration-300">

              <div className="mb-3">
                <h3 className="text-xl font-semibold">
                  Data Management & Analyst Intern
                </h3>
                <p className="text-gray-500 dark:text-gray-300 text-sm">
                  ANARDE Foundation • Jun 2025 – Sep 2025
                </p>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Cleaned and organized project data to improve accuracy and usability. 
                Analyzed data using tools like Python and Excel to support reporting, 
                and contributed to building an automated system for detecting and alerting missing or incorrect data.
              </p>

            </div>

          </div>

        </div>

      </section>
    </AnimatedSection>
  );
}

export default Experience;