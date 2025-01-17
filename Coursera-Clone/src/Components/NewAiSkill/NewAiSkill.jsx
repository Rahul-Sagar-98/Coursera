import styles from './NewAiSkill.module.css';

const certificates = [
  {
    title: "Google Cybersecurity",
    image: "./images/googleCyberSecurity.png", 
  },
  {
    title: "Google Digital Marketing & E-commerce",
    image: "./images/googleDigitalMarkrting.png",
  },
  {
    title: "Google UX Design",
    image: "./images/googleUxDesign.png",
  },
];

const NewAiSkill = () => {
  return (
    <section className={styles.popularCertificates}>
      <h2>Popular Certificates, New AI Skills</h2>
      <p>Get job-ready with Google Professional Certificates - now including AI skills.</p>
      <div className={styles.certificateGrid}>
        {certificates.map((certificate, index) => (
          <div key={index} className={styles.certificateCard}>
            <div className={styles.newAISkillsBadge}>+ New AI Skills</div>
            <img src={certificate.image} alt={certificate.title} />
            <h3>{certificate.title}</h3>
            <div className={styles.certificateDetails}>
              <div className={styles.provider}>Google</div>
              <div className={styles.buildTowardDegree}>Build toward a degree</div>
              <div className={styles.certificateType}>Professional Certificate</div>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.viewAllButton}>View All →</button>
    </section>
  );
};

export default NewAiSkill;