import styles from '../styles/Work.module.css'
import { headings, userinfo } from '../Constants/userinfo'
import Head from 'next/head'
import HeadTag from '../Components/HeadTag';
import WorkSample from '../Components/WorkSample';

const work = ({ currentTheme }) => {
    return (
        <>
            <HeadTag page='Work' />
            <div className={styles.workHeading}>{headings.workMainPage}</div>
            <div className={styles.workmain} style={{ color: currentTheme.subtext }}>
                {
                    userinfo.workSamples.map((sample, index) => {
                        return (
                            <WorkSample key={index} currentTheme={currentTheme} sample={sample} id={index} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default work
