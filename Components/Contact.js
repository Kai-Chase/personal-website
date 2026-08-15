import { Stack, Input, Textarea, useToast } from "@chakra-ui/react"
import { useState } from 'react'
import styles from '../styles/Contact.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link'
import { userinfo, headings, ctaTexts } from '../Constants/userinfo'

const Contact = ({ currentTheme }) => {

  const iconStyles = {
    backgroundColor: currentTheme.tertiary,
    color: '#101010',
    boxShadow: currentTheme.boxShadow,
  }


  return (
    <div className={styles.contactWrapper}>
      <div className={styles.contactHeading}>
        <h2 className={styles.contact}>{headings.contact}</h2>
      </div>
     <div style={{ textAlign: 'center', paddingTop: '0.5rem' }}>
        <Link href={`mailto:${userinfo.contact.email ? userinfo.contact.email : ''}`}>{userinfo.contact.email}</Link>
      </div>
      {
        userinfo.contact.phone ?
          <div style={{ textAlign: 'center', paddingTop: '0.2rem', color: currentTheme.tertiary }}>
            <Link href={`tel:${userinfo.contact.countrycode}${userinfo.contact.phone}`}>{`${userinfo.contact.countrycode}${userinfo.contact.phone}`}</Link>
          </div> : null
      }
      <div className={styles.socialIconDiv}>
        {userinfo.socials ?
          userinfo.socials.map((social, key) => {
            return (
              <div className={styles.socialIcon} style={iconStyles} key={key}>
                <Link href={social.link}><FontAwesomeIcon icon={social.icon} /></Link>
              </div>
            );
          }) : null
        }
      </div>
    </div>
  );
}

export default Contact
