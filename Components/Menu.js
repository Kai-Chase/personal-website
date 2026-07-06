import styles from '../styles/Menu.module.css'
import Link from 'next/link'
import { userinfo, ctaTexts, headings } from '../Constants/userinfo'

//menu data structure:
// MenuOption: {option, description, price}

const Menu = ({ currentTheme, menu }) => {
    return (
        <>
            <h1 className={styles.heading} data-aos="fade-up">{headings.menu}</h1>
            <div className={styles.menuList} style={{ color: currentTheme.subtext }}>
                <div className={styles.menuListSpacer}></div>
                <ul className={styles.menuListContainer} data-aos="fade-up">
                    {
                        menu.map((item) => {
                            return (
                                <div key={item.option}  className={styles.menuItem}>
                                    <div className={styles.menuItemHeading}>{item.option}</div>
                                    <div>{item.description}</div>
                                    <div>{item.price}</div>
                                </div>
                            )
                        })
                    }
                </ul>
                <div className={styles.menuListSpacer}></div>
            </div>
        </>
    );
}

export default Menu 
