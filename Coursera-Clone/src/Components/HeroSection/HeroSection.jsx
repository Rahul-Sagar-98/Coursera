import Herocss from './HeroSection.module.css';

function HeroSection() {
    return (
        <div className={Herocss.container}>
            <div className={Herocss.textSection}>
                <img className={Herocss.logo} src="./images/coursera-plus.png" alt="Coursera Plus" />
                <h1>New year. Big goals. Bigger savings.</h1>
                <p>
                    Reach your career goals with a year of unlimited access to 10,000+ learning programs 
                    from Google, Microsoft, IBM, and more—now INR 7,499.
                </p>
                <div className={Herocss.buttons}>
                    <button className={Herocss.saveButton}>Save now</button>
                    <button className={Herocss.teamButton}>Get 50% off teams</button>
                </div>
            </div>
            <div className={Herocss.imageSection}>
                <img className={Herocss.heroImage} src="./images/hero-section.png" alt="Hero Section" />
            </div>
        </div>
    );
}

export default HeroSection;