import styles from "./PopularCertificates.module.css";

const PopularCertifiactes = () => {
  const degreeCards = [
    {
      title: "Machine Learning Specialization",
      image: "./images/machineLearning.png", // Replace with actual image path
      provider: "DeepLearning.AI",
      type: "Specialization",
    },
    {
      title: "Google Data Analytics Professional Certificate",
      image: "./images/Microsoft-power-Bi.png",
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
      image: "./images/generative-ai-in-marketing.png",
      provider: "Google",
      type: "Professional Certificate",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Find a top degree that fits your life</h2>
      <p className={styles.subheading}>
        Breakthrough pricing on 100% online degrees from top universities.
      </p>
      <div className={styles.cardContainer}>
        {degreeCards.map((card) => (
          <div key={card.id} className={styles.card}>
            <img
              src={card.image}
              alt={card.institution}
              className={styles.cardImage}
            />
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardSubtitle}>{card.institution}</p>
            <p className={styles.cardLink}>{card.linkText}</p>
            <p className={styles.cardType}>{card.type}</p>
          </div>
        ))}
      </div>
      <div className={styles.buttons}>
        <button className={styles.button}>Show 8 more</button>
        <button className={styles.button}>View all</button>
      </div>

        <p className={styles.lastPara}>
        ¹Each university determines admission and the number of pre-approved prior learning credits that may count toward the degree requirements according to institutional policies, which may consider any existing credits you may have.
        </p>

    </div>
  );
};

export default PopularCertifiactes;