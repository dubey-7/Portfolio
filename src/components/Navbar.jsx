import { useEffect, useState } from "react";

function Navbar({ theme, setTheme }) {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navLink = (id, label) => (
    <a
      href={`#${id}`}
      onClick={() => setMenuOpen(false)}
      className={`block md:inline hover:text-gray-400 transition-colors ${
        activeSection === id
          ? "text-black dark:text-white font-semibold"
          : "text-gray-600 dark:text-gray-300"
      }`}
    >
      {label}
    </a>
  );

  // ✅ FIXED TOGGLE (important)
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-black shadow-md z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-black dark:text-white">
          Sakshi
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium items-center">

          {navLink("home", "Home")}
          {navLink("about", "About")}
          {navLink("skills", "Skills")}
          {navLink("projects", "Projects")}
          {navLink("certifications", "Certifications")}
          {navLink("experience", "Experience")}
          {navLink("research", "Research")}
          {navLink("contact", "Contact")}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 px-3 py-1 border rounded 
                       border-gray-400 dark:border-gray-600
                       hover:bg-gray-200 dark:hover:bg-gray-800
                       transition-colors"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">

          {/* Theme Toggle (Mobile) */}
          <button
            onClick={toggleTheme}
            className="px-2 py-1 border rounded 
                       border-gray-400 dark:border-gray-600
                       hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black dark:text-white text-xl"
          >
            ☰
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black px-6 pb-4 space-y-3 font-medium transition-colors">

          {navLink("home", "Home")}
          {navLink("about", "About")}
          {navLink("skills", "Skills")}
          {navLink("projects", "Projects")}
          {navLink("certifications", "Certifications")}
          {navLink("experience", "Experience")}
          {navLink("research", "Research")}
          {navLink("contact", "Contact")}

        </div>
      )}
    </nav>
  );
}

export default Navbar;