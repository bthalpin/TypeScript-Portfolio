import React,{FunctionComponent} from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css'
type NavProps = {
    navLink: string;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav: FunctionComponent<NavProps> =  ({navLink, setOpen}) => {

    return (
        <NavLink onClick={() => setOpen(false)} className={({isActive})=>isActive?`${styles.selected} ${styles.navLink}`:styles.navLink} to={navLink==='About Me'?'/':`/${navLink}/`} >
            {navLink}
        </NavLink>
    )
}

export default Nav;