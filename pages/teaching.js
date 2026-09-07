import Head from 'next/head'
import HeadTag from '../Components/HeadTag';
import styles from '../styles/Teaching.module.css'

//TeachingSample model: header, subheader, date range, description, reviews (array of string)

const teaching = ({ currentTheme }) => {
    const borderColor = currentTheme.text
    const backgroundColor = currentTheme.name === 'light' ? '#fafafa' :
        'transparent'
    return (
        <>
            <HeadTag page='Teaching' />
            <div className={styles.teachingFullDiv}>
                <div className={styles.teachingSampleBox} style={{ borderColor, backgroundColor }}>
                    <div className={styles.teachingSampleHeader}>SOC 101: Lorum Ipsum For Good</div>
                    <div className={styles.teachingSampleSubheader}>Instructor \ Teaching Assistant: Some Guy \ Fall 2023/24</div>
                    <div className={styles.teachingSampleBody}>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div className={styles.teachingSampleBox} style={{ borderColor, backgroundColor }}>
                    <div className={styles.teachingSampleHeader}>ODA 103: Intro to One Piece</div>
                    <div className={styles.teachingSampleSubheader}>Instructor \ Fall and Winter 2022/23</div>
                    <div className={styles.teachingSampleBody}>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default teaching
