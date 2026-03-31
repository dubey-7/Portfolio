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
      className={`block md:inline hover:text-gray-500 ${
        activeSection === id ? "text-black font-semibold" : "text-gray-600"
      }`}
    >
      {label}
    </a>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold">Sakshi</h1>

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
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="ml-4 px-3 py-1 border rounded hover:bg-gray-200"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-3">

          {/* Theme Toggle (Mobile) */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="px-2 py-1 border rounded"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-3 font-medium">

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