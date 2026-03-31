import AnimatedSection from "./AnimatedSection";

function Research() {
  return (
    <AnimatedSection>
      <section
        id="research"
        className="py-20 bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300"
      >

        <div className="max-w-4xl mx-auto px-6">

          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Research Work
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Academic research and applied data insights
            </p>
          </div>

          {/* Research Card */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-colors duration-300">

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">
              Leveraging Social Media Analytics for Transportation Planning
            </h3>

            {/* Meta Info */}
            <p className="text-gray-500 dark:text-gray-300 text-sm mb-4">
              Aavishkar Research Project • Oct 2023 – Dec 2023
            </p>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              This research focused on analyzing social media data to understand public opinion and its application in improving urban transportation planning. It explored how real-time data insights can help identify traffic patterns and support more efficient decision-making.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The study emphasized practical approaches such as optimizing traffic signals, improving public engagement, and enabling data-driven strategies for smarter urban transport systems.
            </p>

          </div>

        </div>

      </section>
    </AnimatedSection>
  );
}

export default Research;