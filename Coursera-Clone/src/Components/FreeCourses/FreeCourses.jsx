import styles from './FreeCourses.module.css';

const FreeCourses = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Start learning with free courses</h2>
      <p className={styles.subheading}>
        Explore free online courses from the world's top universities and companies.
      </p>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img
            src="./images/introduction-to-statistics.png" 
            alt="Stanford University"
            className={styles.cardImage}
          />
          <div className={styles.freeBadge}>Free</div>
          <h3 className={styles.cardTitle}>Introduction to Statistics</h3>
          <p className={styles.cardSubtitle}>Stanford University</p>
          <p className={styles.cardFooter}>Course</p>
        </div>
        <div className={styles.card}>
          <img
            src="./images/algorithem.png" 
            alt="Princeton University"
            className={styles.cardImage}
          />
          <div className={styles.freeBadge}>Free</div>
          <h3 className={styles.cardTitle}>Algorithms, Part I</h3>
          <p className={styles.cardSubtitle}>Princeton University</p>
          <p className={styles.cardFooter}>Course</p>
        </div>
        <div className={styles.card}>
          <img
            src="./images/introduction to generative ai.png" 
            alt="Google Cloud"
            className={styles.cardImage}
          />
          <h3 className={styles.cardTitle}>Introduction to Generative AI</h3>
          <p className={styles.cardSubtitle}>Google Cloud</p>
          <p className={styles.cardFooter}>Course</p>
        </div>
        <div className={styles.card}>
          <img
            src="./images/financial market.png" 
            alt="Yale University"
            className={styles.cardImage}
          />
          <div className={styles.freeBadge}>Free</div>
          <h3 className={styles.cardTitle}>Financial Markets</h3>
          <p className={styles.cardSubtitle}>Yale University</p>
          <p className={styles.cardFooter}>Course</p>
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button}>Show 8 more</button>
        <button className={styles.button}>View all</button>
      </div>
    </div>
  );
};

export default FreeCourses;