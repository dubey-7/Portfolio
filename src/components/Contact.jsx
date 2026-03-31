import AnimatedSection from "./AnimatedSection";

function Contact() {
  return (
    <AnimatedSection>
      <section
        id="contact"
        className="py-16 text-center bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300"
      >

        <h2 className="text-3xl font-bold mb-6">
          Contact
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto">
          Let’s connect and explore opportunities to work with data and create meaningful solutions.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">

          {/* LinkedIn */}
          <a 
            href="https://linkedin.com/in/sakshi-dubey-610a78284" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          >
            LinkedIn
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com/dubey-7" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black dark:bg-gray-800 text-white px-5 py-2 rounded hover:bg-gray-800 dark:hover:bg-gray-700 transition"
          >
            GitHub
          </a>

          {/* Email */}
          <a 
            href="mailto:sakshidubey804@gmail.com" 
            className="bg-gray-700 dark:bg-gray-600 text-white px-5 py-2 rounded hover:bg-gray-800 dark:hover:bg-gray-500 transition"
          >
            Email
          </a>

        </div>

        <p className="text-sm text-gray-400 dark:text-gray-500 mt-6 max-w-xl mx-auto">
          Open to roles in Data Analysis, Data Science, Artificial Intelligence, Machine Learning, Statistics, and Data Engineering
        </p>

      </section>
    </AnimatedSection>
  );
}

export default Contact;