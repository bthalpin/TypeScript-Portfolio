import React from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav';
import styles from './header.module.css';
import {navigationLinks} from './navigationData';

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header: React.FC<Props> = ({ open, setOpen }) => {

    const handleClose = (e:React.MouseEvent<HTMLDivElement>) => {
        
        const targetEl = e.target as Element;
        const target = targetEl.classList[0];
        if (target.includes('navContainerOpen')) {
            setOpen(false)
        }
    }

    return (
        <div className={open ? styles.navContainerOpen : ''} onClick={(e)=> handleClose(e)}>
            <div  className={styles.navContainer}>
                <Link to='/' className={styles.navName}>
                    
                        HALPIN

                </Link>
                <div className={open ? styles.navLinkOpen : styles.navLinkContainer}>  

                    {/* Navigation Links mapped from the navagationData.js file */}
                    {navigationLinks.map((navLink,index)=>
                        <div key={index}>
                            <Nav navLink={navLink} setOpen={setOpen}/>
                        </div>
                    )}
                </div>
                <div className={open ? styles.menu_open : styles.menu_container} onClick={()=>setOpen(!open)}>
                    <div className={styles.menu} >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;