import styles from "./BusinessSection.module.css";

const BusinessSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h1 className={styles.heading}>
          Drive your business forward by empowering your talent
        </h1>
        <p className={styles.subtext}>
          Train teams with industry-leading experts and universities, enhanced by AI<br/> tools and recognized credentials.
        </p>
        <button className={styles.primaryButton}>Discover Coursera for Business</button>
        <p className={styles.smallText}>
          Upskill a small team?{" "}
          <a
            href="https://www.coursera.org/teams"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Check out Coursera for Teams
          </a>{" "}
          <span>↗</span>
        </p>
      </div>
      <div className={styles.logoGrid}>
        <div className={styles.logoItem}><img src="./images/loreal.png" alt="L'Oréal" /></div>
        <div className={styles.logoItem}><img src="./images/p&g.png" alt="P&G" /></div>
        <div className={styles.logoItem}><img src="./images/tata.png" alt="Tata" /></div>
        <div className={styles.logoItem}><img src="./images/danone.png" alt="Danone" /></div>
        <div className={styles.logoItem}><img src="./images/Emirates_NBD.png" alt="Emirates NBD" /></div>
        <div className={styles.logoItem}><img src="./images/Reliance.png" alt="Reliance Industries Limited" /></div>
        <div className={styles.logoItem}><img src="./images/capgemini.png" alt="Capgemini" /></div>
        <div className={styles.logoItem}><img src="./images/petrobras.png" alt="Petrobras" /></div>
        <div className={styles.logoItem}><img src="./images/General_Electric_logo.png" alt="GE" /></div>
      </div>
    </div>
  );
};

export default BusinessSection;