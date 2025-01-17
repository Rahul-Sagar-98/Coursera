import styles from './DegreePrograms.module.css';

const DegreePrograms = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Get a head start on a degree today</h2>
      <p className={styles.subheading}>
        With these programs, you can build valuable skills, earn career credentials, and make progress toward a degree before you even enroll.
      </p>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img
            src="./images/masters in electrical engineering.png"  
            alt="University of Colorado Boulder"
            className={styles.cardImage}
          />
          <h3 className={styles.cardTitle}>Master of Science in Electrical Engineering</h3>
          <p className={styles.cardSubtitle}>University of Colorado Boulder</p>
          <p className={styles.cardLink}>Earn a degree</p>
        </div>
        <div className={styles.card}>
          <img
            src="./images/masters in engineering management.png" 
            alt="University of Colorado Boulder"
            className={styles.cardImage}
          />
          <h3 className={styles.cardTitle}>Master of Engineering in Engineering Management</h3>
          <p className={styles.cardSubtitle}>University of Colorado Boulder</p>
          <p className={styles.cardLink}>Earn a degree</p>
        </div>
        <div className={styles.card}>
          <img
            src="./images/mastres in computer science.png" 
            alt="University of Colorado Boulder"
            className={styles.cardImage}
          />
          <h3 className={styles.cardTitle}>Master of Science in Computer Science</h3>
          <p className={styles.cardSubtitle}>University of Colorado Boulder</p>
          <p className={styles.cardLink}>Earn a degree</p>
        </div>
        <div className={styles.card}>
          <img
            src="./images/masters in business administration.png" 
            alt="University of Illinois Urbana-Champaign"
            className={styles.cardImage}
          />
          <h3 className={styles.cardTitle}>Master of Business Administration (iMBA)</h3>
          <p className={styles.cardSubtitle}>University of Illinois Urbana-Champaign</p>
          <p className={styles.cardLink}>Earn a degree</p>
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button}>Show 8 more</button>
        <button className={styles.button}>View all</button>
      </div>
    </div>
  );
};

export default DegreePrograms;