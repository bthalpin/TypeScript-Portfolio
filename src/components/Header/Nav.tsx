import React,{FunctionComponent} from 'react';
import { NavLink } from 'react-router-dom';

type NavProps = {
    navLink: string
}

const Nav: FunctionComponent<NavProps> =  ({navLink}) => {

    return (
        <NavLink className={({isActive})=>isActive?'navLink selected':'navLink'} to={navLink==='About Me'?'/':`/${navLink}/`} >
            {navLink}
        </NavLink>
    )
}

export default Nav;