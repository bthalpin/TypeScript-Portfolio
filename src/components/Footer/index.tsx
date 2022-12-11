import React from 'react';
import styles from './footer.module.css';


const Footer = () => {

    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <a href="https://github.com/bthalpin">
                    <img className={styles.githubLogo} src="/images/github-logo.png" alt="GitHub Logo"></img> 
                </a>
                <a href="https://www.linkedin.com/in/brian-halpin/">
                    <img className={styles.linkedInLogo} src="/images/linkedin-logo.png" alt="LinkedIn Logo"></img> 
                </a>
                <a href="mailto:brian.t.halpin@gmail.com">
                    <img className={styles.emailLink} src="/images/mail.png" alt="Email icon"></img> 
                </a>
            </div>
        </div>
    )
}

export default Footer;