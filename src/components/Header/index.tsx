import React from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav';
import './header.css';
import {navigationLinks} from './navigationData';

const Header = () => {

    return (
        <div className="navContainer">

            <Link to='/' className="navName">
                
                    HALPIN

            </Link>
            <div className="navLinkContainer">  

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