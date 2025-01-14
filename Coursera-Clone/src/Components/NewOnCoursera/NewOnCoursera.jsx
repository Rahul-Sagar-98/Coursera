import styles from "./NewOnCoursera.module.css";

const NewOnCoursera = () => {
  const degreeCards = [
    {
      title: "Microsoft Power BI Data Analyst",
      image: "./images/Microsoft-power-Bi.png",
      provider: "Microsoft",
      type: "Professional Certificate",
      aiSkills: true,
    },
    {
      title: "Google AI Essentials",
      image: "./images/introduction to generative ai.png",
      provider: "Google",
      type: "Course",
      aiSkills: true,
    },
    {
      title: "Microsoft Excel",
      image: "./images/microsoft-excel.png",
      provider: "Microsoft",
      type: "Professional Certificate",
      aiSkills: false,
    },
    {
      title: "Generative AI in Marketing",
      image: "./images/generative-ai-in-marketing.png",
      provider: "University of Virginia Darden School",
      type: "Specialization",
      aiSkills: true,
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>New on Coursera</h2>
      <p className={styles.subheading}>
      Explore our newest programs, focused on delivering in-demand skills.
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
    </div>
  );
};

export default NewOnCoursera;