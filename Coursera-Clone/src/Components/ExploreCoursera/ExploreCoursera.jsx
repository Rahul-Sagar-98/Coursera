import styles from "./ExploreCoursera.module.css";

const ExploreCoursera = () => {
  const categories = [
    { id: 1, image: "./images/data_science.png", title: "Data Science", courses: 425 },
    { id: 2, image: "./images/business.png", title: "Business", courses: 1095 },
    { id: 3, image: "./images/computer_science.png", title: "Computer Science", courses: 668 },
    { id: 4, image: "./images/health.png", title: "Health", courses: 471 },
    { id: 5, image: "./images/social_sciences.png", title: "Social Sciences", courses: 401 },
    { id: 6, image: "./images/personal_development.png", title: "Personal Development", courses: 137 },
    { id: 7, image: "./images/arts_and_humanities.png", title: "Arts and Humanities", courses: 338 },
    { id: 8, image: "./images/physical_science_and_engineering.png", title: "Physical Science and Engineering", courses: 413 },
    { id: 9, image: "./images/language_learning.png", title: "Language Learning", courses: 150 },
    { id: 10, image: "./images/information_technology.png", title: "Information Technology", courses: 145 },
    { id: 11, image: "./images/math_and_logic.png", title: "Math and Logic", courses: 70 },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Explore Coursera</h2>
      <div className={styles.grid}>
        {categories.map((category) => (
          <div key={category.id} className={styles.card}>
            <img
              src={category.image}
              alt={category.title}
              className={styles.image}
            />
            <div className={styles.info}>
              <h3 className={styles.title}>{category.title}</h3>
              <p className={styles.courses}>{category.courses} courses</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCoursera;