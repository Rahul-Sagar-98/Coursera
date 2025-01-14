import styles from './CareerPage.module.css';

function CareerPage() {
    return (
        <div className={styles.careerPage}>
            {/* Header Section */}
            <header className={styles.header}>
                <h1>Launch a new career in as little as 6 months</h1>
                <nav className={styles.navTabs}>
                    <span className={`${styles.navTab} ${styles.activeTab}`}>Project Manager</span>
                    <span className={styles.navTab}>Data Analyst</span>
                    <span className={styles.navTab}>Digital Marketer</span>
                    <span className={styles.navTab}>IT Support Specialist</span>
                    <span className={styles.navTab}>Business Analyst</span>
                    <span className={styles.navTab}>Cybersecurity</span>
                    <span className={styles.navTab}>Front-End Developer</span>
                    
                </nav>
            </header>

            {/* Project Manager Info Section */}
            <section className={styles.projectInfo}>
                <div className={styles.infoContainer}>
                    <h2>Project Manager</h2>
                    <p>Oversee the planning and execution of projects to ensure they’re successful</p>
                    <h3>Median Salary</h3>
                    <div className={styles.salaryComparison}>
                        <div className={styles.salaryBar}>
                            <span>All occupations</span>
                            <span>$37,960*</span>
                        </div>
                        <div className={`${styles.salaryBar} ${styles.highlight}`}>
                            <span>Project Manager</span>
                            <span>$102,800**</span>
                        </div>
                    </div>
                    <div className={styles.jobStats}>
                        <p>Job openings: <b>336,402</b>**</p>
                        <p>Projected 10 year growth: <b>+11.1%</b>**</p>
                    </div>
                </div>
            </section>

            {/* Recommended Professional Certificates */}
            <section className={styles.certificates}>
                <h2>Recommended Professional Certificates</h2>
                <div className={styles.certificatesList}>
                    {/* Certificate 1 */}
                    <div className={styles.certificate}>
                        <img src="./images/Project-management-professional-certificate.png" alt="Microsoft Project Management" />
                        <div className={styles.certificateDetails}>
                            <h3>Microsoft Project Management</h3>
                            <p>Skills you'll gain: Risk Management, Budgeting, Stakeholder Management, Planning...</p>
                            <p className={styles.reviews}>
                                <strong>4.7 ★</strong> (250 reviews)
                                <span>Beginner · Professional Certificate · 4 months</span>
                            </p>
                        </div>
                    </div>
                    {/* Certificate 2 */}
                    <div className={styles.certificate}>
                        <img src="./images/google-project-management- certificate.png" alt="Google Project Management" />
                        <div className={styles.certificateDetails}>
                            <h3>Google Project Management</h3>
                            <p>Skills you'll gain: Project Management, Change Management, Strategic Thinking...</p>
                            <p className={styles.reviews}>
                                <strong>4.8 ★</strong> (111K reviews)
                                <span>Beginner · Professional Certificate · 6 months</span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.certificate}>
                        <img src="./images/masters in business administration.png" alt="Google Project Management" />
                        <div className={styles.certificateDetails}>
                            <h3>Apple Project Management</h3>
                            <p>Skills you'll gain: Project Management, Change Management, Strategic Thinking...</p>
                            <p className={styles.reviews}>
                                <strong>4.8 ★</strong> (111K reviews)
                                <span>Beginner · Professional Certificate · 6 months</span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.certificate}>
                        <img src="./images/google-project-management- certificate.png" alt="Google Project Management" />
                        <div className={styles.certificateDetails}>
                            <h3>Facebook Project Management</h3>
                            <p>Skills you'll gain: Project Management, Change Management, Strategic Thinking...</p>
                            <p className={styles.reviews}>
                                <strong>4.8 ★</strong> (111K reviews)
                                <span>Beginner · Professional Certificate · 6 months</span>
                            </p>
                        </div>
                    </div>
                </div>
                <p className={styles.exploreMore}>Explore all certificates →</p>
            </section>

            {/* Testimonial Section */}
            <section className={styles.testimonial}>
                <img
                    src="./images/adrienne_testimonial_image.png"
                    alt="Testimonial"
                    className={styles.testimonialImage}
                />
                <p>
                    "Earning my Google Project Management: Professional Certificate is one of the biggest
                    accomplishments I’ve made in my education, and it was a key stepping stone to my new career."
                </p>
            </section>
        </div>
    );
}

export default CareerPage;