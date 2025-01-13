import styles from './NewOnCoursera.module.css';

const courses = [
  {
    title: "Microsoft Power BI Data Analyst",
    image: "./images/Microsoft-power-Bi.png",
    provider: "Microsoft",
    type: "Professional Certificate",
    aiSkills: true,
  },
  {
    title: "Google AI Essentials",
    image: "./images/googl-ai-essentials.png",
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

const NewOnCoursera = () => {
  return (
    <section className={styles.newOnCoursera}>
      <h2>New on Coursera</h2>
      <p>Explore our newest programs, focused on delivering in-demand skills.</p>
      <div className={styles.courseGrid}>
        {courses.map((course, index) => (
          <div key={index} className={styles.courseCard}>
            {course.aiSkills && <div className={styles.aiSkillsBadge}>+ AI Skills</div>}
            <img src={course.image} alt={course.title} className={styles.courseImage} />
            <h3>{course.title}</h3>
            <div className={styles.courseDetails}>
              <div className={styles.provider}>{course.provider}</div>
              <div className={styles.courseType}>{course.type}</div>
            </div>
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

export default NewOnCoursera;