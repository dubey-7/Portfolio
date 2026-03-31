function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 transition-colors duration-300">
      
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left Side */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Sakshi Dubey. All rights reserved.
        </p>

        {/* Right Side - Social Links */}
        <div className="flex gap-6 text-sm">

          <a
            href="https://linkedin.com/in/sakshi-dubey-610a78284" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/dubey-7" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="#home"
            className="hover:text-black dark:hover:text-white transition"
          >
            Back to Top
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;