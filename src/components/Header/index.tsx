import React from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav';
import styles from './header.module.css';
import {navigationLinks} from './navigationData';

const Header = () => {

    return (
        <div className={styles.navContainer}>

            <Link to='/' className={styles.navName}>
                
                    HALPIN

            </Link>
            <div className={styles.navLinkContainer}>  

                {/* Navigation Links mapped from the navagationData.js file */}
                {navigationLinks.map((navLink,index)=>
                    <div key={index}>
                        <Nav navLink={navLink}/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header;