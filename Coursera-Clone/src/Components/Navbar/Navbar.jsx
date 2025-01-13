import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        {/* Logo */}
        <div className={styles.logo}>coursera</div>

        {/* Explore Button */}
        <button className={styles.exploreBtn}>
          Explore <span className={styles.arrowDown}>▼</span>
        </button>

        {/* Search Box */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="What do you want to learn?"
            className={styles.searchInput}
          />
          <button className={styles.searchBtn}>🔍</button>
        </div>
      </div>

      <div className={styles.rightSection}>
        {/* Links */}
        <a href="#online-degrees" className={styles.navLink}>
          Online Degrees
        </a>
        <a href="#careers" className={styles.navLink}>
          Careers
        </a>
        <a href="#login" className={styles.navLink}>
          Log In
        </a>

        {/* Join Button */}
        <a href="#join" className={styles.joinBtn}>
          Join for Free
        </a>
      </div>
    </nav>
  );
};

export default Navbar;