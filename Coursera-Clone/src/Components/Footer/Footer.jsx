import styles from "./Footer.module.css";

const Footer = () => {
  const footerLinks = [
    {
      title: "Learn Key Technologies",
      links: [
        "Python",
        "SQL",
        "Microsoft Excel",
        "Power BI",
        "Tableau",
        "R Programming",
        "Git",
        "Docker",
        "AWS",
        "TensorFlow",
      ],
    },
    {
      title: "Essential Skills",
      links: [
        "Data Analytics",
        "Artificial Intelligence",
        "Cybersecurity",
        "Digital Marketing",
        "Machine Learning",
        "Statistical Analysis",
        "Database Management",
        "Web Development",
        "Financial Modeling",
        "Business Analysis",
      ],
    },
    {
      title: "Industry Solutions",
      links: [
        "Healthcare Analytics",
        "Sales",
        "Digital Transformation",
        "Supply Chain",
        "Marketing Analytics",
        "HR Analytics",
        "Social Media Marketing",
        "Risk Management",
        "Sustainability",
        "E-commerce",
      ],
    },
    {
      title: "Career Paths",
      links: [
        "Data Scientist",
        "Data Analyst",
        "Machine Learning Engineer",
        "Full Stack Developer",
        "Project Manager",
        "Product Manager",
        "Data Engineer",
        "Digital Marketing Specialist",
        "Cybersecurity Analyst",
        "Career Aptitude Test",
      ],
    },
  ];

  const additionalLinks = [
    {
      title: "Coursera",
      links: [
        "About",
        "What We Offer",
        "Leadership",
        "Careers",
        "Catalog",
        "Coursera Plus",
        "Professional Certificates",
        "MasterTrack® Certificates",
        "Degrees",
        "For Enterprise",
        "For Government",
        "For Campus",
        "Become a Partner",
        "Social Impact",
        "Free Courses",
        "ECTS Credit Recommendations",
      ],
    },
    {
      title: "Community",
      links: [
        "Learners",
        "Partners",
        "Beta Testers",
        "Blog",
        "The Coursera Podcast",
        "Tech Blog",
        "Teaching Center",
      ],
    },
    {
      title: "More",
      links: [
        "Press",
        "Investors",
        "Terms",
        "Privacy",
        "Help",
        "Accessibility",
        "Contact",
        "Articles",
        "Directory",
        "Affiliates",
        "Modern Slavery Statement",
        "Manage Cookie Preferences",
      ],
    },
  ];

  return (
    <footer className={styles.footer}>
      {/* Top Section */}
      <div className={styles.topSection}>
        {footerLinks.map((section, index) => (
          <div key={index} className={styles.linkGroup}>
            <h3 className={styles.heading}>{section.title}</h3>
            <ul>
              {section.links.map((link, idx) => (
                <li key={idx}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Middle Section */}
      <div className={styles.middleSection}>
        {additionalLinks.map((section, index) => (
          <div key={index} className={styles.linkGroup}>
            <h3 className={styles.heading}>{section.title}</h3>
            <ul>
              {section.links.map((link, idx) => (
                <li key={idx}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className={styles.storeLinks}>
          <img
            src="./images/app store.png"
            alt="Download on the App Store"
          />
          <img
            src="./images/google play.png"
            alt="Get it on Google Play"
          />
          <img
            src="./images/certified corporation.png"
            alt="Certified B Corporation"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <p>© 2025 Coursera Inc. All rights reserved.</p>
        <div className={styles.socialIcons}>
          <span className={styles.icon}>F</span>
          <span className={styles.icon}>L</span>
          <span className={styles.icon}>T</span>
          <span className={styles.icon}>Y</span>
          <span className={styles.icon}>I</span>
          <span className={styles.icon}>T</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;