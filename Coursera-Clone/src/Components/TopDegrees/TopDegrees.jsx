import styles from "./TopDegrees.module.css";

const TopDegrees = () => {
  const degreeCards = [
    {
      id: 1,
      image: "./images/birla institute of technology.png", // Replace with actual image URL
      institution: "Birla Institute of Technology & Science",
      title: "Bachelor of Science in Computer Science",
      linkText: "Earn a degree",
      type: "Degree",
    },
    {
      id: 2,
      image: "./images/Indian institute of technology.png", // Replace with actual image URL
      institution: "Indian Institute of Technology...",
      title: "Bachelor of Science in Data Science & AI",
      linkText: "Earn a degree",
      type: "Degree",
    },
    {
      id: 3,
      image: "./images/Indian statistical institute.png", // Replace with actual image URL
      institution: "Indian Statistical Institute",
      title: "Postgraduate Diploma in Applied Statistics",
      linkText: "Earn a degree",
      type: "Degree",
    },
    {
      id: 4,
      image: "./images/IIT roorkee.png", // Replace with actual image URL
      institution: "IIT Roorkee",
      title: "Executive MBA",
      linkText: "Earn a degree",
      type: "Degree",
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

export default TopDegrees;