import styles from '../styles/Home.module.css'
import Head from 'next/head'
import HeadTag from '../Components/HeadTag';
import { userinfo, ctaTexts, headings } from '../Constants/userinfo'
import Timeline from '../Components/Timeline';

const about = ({ currentTheme }) => {
    return (
        <>
            <HeadTag page='About'/>
            <div id="about" className={styles.homeAboutSection} style={{ backgroundColor: currentTheme.secondary }}>
                <h1 className={styles.workheading} data-aos="fade-up">{headings.about}</h1>
                <p className={styles.aboutText} style={{ color: currentTheme.subtext }} data-aos="fade-up">{userinfo.about.content}</p>
                <div data-aos="fade-up" style={{ textAlign: 'center', padding: '1rem 0', margin: '1rem 0', position: 'relative', display: 'flex', color: currentTheme.subtext }}/>
            </div>
            <div className={styles.homeWorkSection} id="work">
                <Timeline currentTheme={currentTheme} headerText={headings.aboutPageAwardsSection} timelineList={userinfo.about.awardsGrantsFellowships} /> 
            </div>
        </>
    )
}

export default about
