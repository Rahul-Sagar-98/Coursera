import styles from './TakeNextStep.module.css';

const TakeNextStep = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageSection}>
          <img
            src="./images/Take-Next-Step.png" 
            alt="Smiling person in a workspace"
            className={styles.image}
          />
        </div>
        <div className={styles.textSection}>
          <h1 className={styles.heading}>
            Take the next step toward your personal and professional goals with Coursera.
          </h1>
          <p className={styles.subtext}>
            Join now to receive personalized recommendations from the full Coursera catalog.
          </p>
          <button className={styles.joinButton}>Join for Free</button>
        </div>
      </div>
      <div className={styles.footer}>
        <p className={styles.footerText}>
          * Employment, Wages, and Projected Change in Employment by Typical Entry-level Education: U.S. Bureau of Labor Statistics. Sept. 2022, www.bls.gov/emp/tables/education-summary.htm<br />
          ** Median salary and job opening data are sourced from United States Lightcast™ Job Postings Report. Data for job roles relevant to featured programs (7/1/2022 - 6/30/2023)<br />
          Median salary (median with 0-2 years experience for UX Designer) and job opening data are sourced from United States Lightcast™ Job Postings Report. Data for job roles relevant to featured programs (7/1/2022 - 6/30/2023)<br />
          *** Growth rate data is sourced from United States Lightcast™ Job Postings Report. Data for job roles relevant to featured programs (7/1/2022 - 6/30/2023)
        </p>
      </div>
    </div>
  );
};

export default TakeNextStep;