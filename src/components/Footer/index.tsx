import React from 'react';
import './footer.css';


const Footer = () => {

    return (
        <div className="footer">
            <div className="footerContainer">
                <a href="https://github.com/bthalpin">
                    <img className="githubLogo" src="/images/github-logo.png" alt="GitHub Logo"></img> 
                </a>
                <a href="https://www.linkedin.com/in/brian-halpin/">
                    <img className="linkedInLogo" src="/images/linkedin-logo.png" alt="LinkedIn Logo"></img> 
                </a>
                <a href="mailto:brian.t.halpin@gmail.com">
                    <img className="emailLink" src="/images/mail.png" alt="Email icon"></img> 
                </a>
            </div>
        </div>
    )
}

export default Footer;