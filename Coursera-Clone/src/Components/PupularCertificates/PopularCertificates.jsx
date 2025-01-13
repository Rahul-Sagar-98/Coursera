// import styles from "./PopularCertificate.module.css"; // Modular CSS import

// const certificates = [
//   {
//     id: 1,
//     title: "Machine Learning Specialization",
//     organization: "DeepLearning.AI",
//     image: "./images/machineLearning.png", // Replace with the actual image URL
//     type: "Specialization",
//     degree: true,
//   },
//   {
//     id: 2,
//     title: "Google Data Analytics",
//     organization: "Google",
//     image: "./images/google-Data-Analytics.png", // Replace with the actual image URL
//     type: "Professional Certificate",
//     degree: true,
//     newSkill: true,
//   },
//   {
//     id: 3,
//     title: "Data Science Foundations",
//     organization: "University of London",
//     image: "./images/Data-Science-Foundation.png", // Replace with the actual image URL
//     type: "Specialization",
//     degree: false,
//   },
//   {
//     id: 4,
//     title: "Google Digital Marketing & E-commerce",
//     organization: "Google",
//     image: "./images/Google-Digital-Marketing.png", // Replace with the actual image URL
//     type: "Professional Certificate",
//     degree: true,
//     newSkill: true,
//   },
// ];

// const CertificateCard = ({ cert }) => {
//   return (
//     <div className={styles.card}>
//       {cert.newSkill && <span className={styles.newSkill}>New AI skills</span>}
//       <img src={cert.image} alt={cert.title} className={styles.cardImage} />
//       <h3>{cert.title}</h3>
//       <p>{cert.organization}</p>
//       <p>{cert.type}</p>
//       {cert.degree && <p className={styles.degree}>Build toward a degree</p>}
//     </div>
//   );
// };

// const PopularCertifiacte = () => {
//   return (
//     <div className={styles.container}>
//       <h1>Most Popular Certificates</h1>
//       <p>
//         Explore our most popular programs, get job-ready for an in-demand
//         career.
//       </p>
//       <div className={styles.cardContainer}>
//         {certificates.map((cert) => (
//           <CertificateCard key={cert.id} cert={cert} />
//         ))}
//       </div>
//       <div className={styles.buttons}>
//         <button className={styles.btn}>Show 8 more</button>
//         <button className={`${styles.btn} ${styles.secondary}`}>View all</button>
//       </div>
//     </div>
//   );
// };

// export default PopularCertifiacte;






import React from 'react';
import styles from './PopularCertificates.module.css';

const PopularCertificates = () => {
  const certificates = [
    {
      title: "Machine Learning Specialization",
      image: "./images/machineLearning.png", // Replace with actual image path
      provider: "DeepLearning.AI",
      type: "Specialization",
    },
    {
      title: "Google Data Analytics Professional Certificate",
      image: "./images/google-Data-Analytics.png",
      provider: "Google",
      type: "Professional Certificate",
    },
    {
      title: "Data Science Foundations Specialization",
      image: "./images/Data-Science-Foundation.png",
      provider: "University of London",
      type: "Specialization",
    },
    {
      title: "Google Digital Marketing & E-commerce Professional Certificate",
      image: "./images/Google-Digital-Marketing.png",
      provider: "Google",
      type: "Professional Certificate",
    },
  ];

  return (
    <section className={styles.popularCertificates}>
      <h2>Most Popular Certificates</h2>
      <p>Explore our most popular programs, get job-ready for an in-demand career.</p>
      <div className={styles.certificateGrid}>
        {certificates.map((certificate, index) => (
          <div key={index} className={styles.certificateCard}>
            <img src={certificate.image} alt={certificate.title} />
            <h3>{certificate.title}</h3>
            <p>{certificate.provider}</p>
            <p>{certificate.type}</p>
          </div>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.showMoreButton}>Show 8 More</button>
        <button className={styles.viewAllButton}>View All →</button>
      </div>
    </section>
  );
};

export default PopularCertificates;