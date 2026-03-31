import AnimatedSection from "./AnimatedSection";

function About() {
  return (
    <AnimatedSection>
      <section
        id="about"
        className="flex items-center justify-center px-6 bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300"
      >

        <div className="max-w-4xl mx-auto px-6 text-center">

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About Me
          </h2>

          {/* Content Card */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-colors duration-300">

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I approach data with a problem-solving mindset, focusing on exploring datasets, identifying patterns, and extracting insights that can drive meaningful outcomes. I enjoy working on projects that involve analyzing real-world data and presenting results in a clear and structured way.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              Alongside analysis, I actively build my understanding of machine learning concepts and data-driven systems, continuously improving my ability to work with data across different stages from processing to interpretation.
            </p>

            {/* Keywords */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Data Analysis",
                "Data Engineering",
                "Artificial Intelligence",
                "Machine Learning",
                "Statistics"
              ].map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-full text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>
        </div>

      </section>
    </AnimatedSection>
  );
}

export default About;