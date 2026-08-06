import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons"
import Link from 'next/link'

const WorkSample = ({ currentTheme, sample, id }) => {
    return (
        <div className={styles.workSampleMain} style={{borderColor: currentTheme.accent, borderRadius: id % 2 === 0 ? '50px 0 0 0' : '0 0 50px 0'}}>
            <div className={styles.workSampleContent}>
                <h1 className={styles.projectTitle} style={{color: currentTheme.text}}>{sample.name}</h1>
                <h2 className={styles.projectSubTitle} style={{color: currentTheme.subtext}}>{sample.description}</h2>
            </div>
        </div>
    );
}

export default WorkSample
