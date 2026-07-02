import styles from '../styles/Home.module.css'
import Link from 'next/link'
import HomeProject from './HomeProject'
import Skills from './Skills'
import { projects } from '../Constants/projects'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { userinfo, ctaTexts, headings } from '../Constants/userinfo'
import Education from './Education'

const HomePage = ({ currentTheme }) => {
    return (
        <div>
            <div className={styles.homeheading} style={{ backgroundColor: currentTheme.secondary }}>
                {/* <h1 className={styles.heading}>{userinfo.greeting.title}</h1> */ /** keeping this just in case */}
                <h2 className={styles.subheading} style={{ color: currentTheme.subtext }}>{userinfo.greeting.subtitle}</h2>
                <Link
                    href="/contact"
                    className={styles.cta1}
                    style={{ backgroundColor: currentTheme.accent, color: currentTheme.contrastText, boxShadow: currentTheme.boxShadow }}>{ctaTexts.contactCTA}</Link>
            </div>

            <div id="skills" className={styles.homeSkillSection} style={{ backgroundColor: currentTheme.secondary }}>
                <Skills currentTheme={currentTheme} />
            </div>
            <div>
                {/** Add testimonials here */}
            </div>
        </div>
    );
}

export default HomePage
