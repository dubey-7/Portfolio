import AnimatedSection from "./AnimatedSection";

function Certifications() {

  const coursesAndTests = [
    {
      title: "Google Analytics Certification",
      platform: "Google",
      date: "Feb 2026",
      link: "https://drive.google.com/file/d/1OujYw7Kl6bgMmS9CVBePv2PLL330_k1L/view",
    },
    {
      title: "Accenture Data Analytics Simulation",
      platform: "Forage",
      date: "May 2025",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/T6kdcdKSTfg2aotxT/hzmoNKtzvAzXsEqx8_T6kdcdKSTfg2aotxT_Lm6YGdXKRsyGipKn6_1747743695064_completion_certificate.pdf",
    },
    {
      title: "BCG Data Science Simulation",
      platform: "Forage",
      date: "May 2025",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/SKZxezskWgmFjRvj9/Tcz8gTtprzAS4xSoK_SKZxezskWgmFjRvj9_Lm6YGdXKRsyGipKn6_1748174590554_completion_certificate.pdf",
    },
    {
      title: "BCG GenAI Simulation",
      platform: "Forage",
      date: "May 2025",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/SKZxezskWgmFjRvj9/gabev3vXhuACr48eb_SKZxezskWgmFjRvj9_Lm6YGdXKRsyGipKn6_1748177088755_completion_certificate.pdf",
    },
    {
      title: "Data Analyst Test",
      platform: "MSME TDC",
      date: "May 2025",
      link: "https://www.oneroadmap.io/skills/da/certificate/CERT-6B440608",
    },
    {
      title: "Data Analysis with Python",
      platform: "freeCodeCamp",
      date: "Feb 2026",
      link: "https://www.freecodecamp.org/certification/sakshidubey7/data-analysis-with-python-v7",
    },
    {
      title: "Aavishkar Research",
      platform: "University of Mumbai",
      date: "Dec 2023",
      link: "https://drive.google.com/file/d/18TwNMeP2hmy3wJbSAlpO9EholZXwkd-/view",
    },
  ];

  const internships = [
    {
      title: "CSRBOX Applied AI Internship",
      platform: "AICTE",
      date: "Jan 2026",
      link: "https://drive.google.com/file/d/1XcLNWnDloduDi6KtAIiHQnLYMF97-s8R/view",
    },
    {
      title: "Data Management Analyst Intern",
      platform: "Anarde Foundation | India",
      date: "Jun 2025",
      link: "https://drive.google.com/file/d/1wYGCearc1OuHTwuIaxEAlRu1fdLCCLKH/view",
    },
  ];

  const CertificateCard = ({ cert }) => (
    <div className="p-6 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      
      <h3 className="text-lg font-semibold mb-2">
        {cert.title}
      </h3>

      <p className="text-gray-500 dark:text-gray-300 text-sm mb-2">
        {cert.platform} • {cert.date}
      </p>

      <a
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 text-blue-600 dark:text-blue-400 font-medium hover:underline"
      >
        View Certificate →
      </a>
    </div>
  );

  return (
    <AnimatedSection>
      <section
        id="certifications"
        className="py-20 bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300"
      >

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Certifications & Achievements
          </h2>
        </div>

        <div className="max-w-6xl mx-auto px-6">

          {/* Course Certificates */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-8">
              Course Certificates
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {coursesAndTests.map((cert, index) => (
                <CertificateCard key={index} cert={cert} />
              ))}
            </div>
          </div>

          {/* Internship Certificates */}
          <div>
            <h3 className="text-xl font-semibold mb-8">
              Internship Certificates
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {internships.map((cert, index) => (
                <CertificateCard key={index} cert={cert} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </AnimatedSection>
  );
}

export default Certifications;