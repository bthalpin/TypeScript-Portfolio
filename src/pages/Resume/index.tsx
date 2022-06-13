import React from 'react';
import './resume.css';

const Resume = () => {
    return (
        <div className="resumePage">
            <div className="resumeBackground">

                <div className="resumeContainer">
                    <a className="resumeLink" href="/documents/Brian-Halpin-Resume-2022.pdf" download>
                        
                        <p>DOWNLOAD RESUME</p>
                        <img src="/images/Resume.png" alt="Resume"></img>
                        
                    </a>

                </div>
            </div>

            <div className="skillContainer">
                <div className="skills">
                    <h2>Technical Skills</h2>
                    <p className="skill"><span className="skillLevel">Front-End:</span> HTML, CSS, Bootstrap, JavaScript, jQuery, React</p>
                    <p className="skill"><span className="skillLevel">Back-End:</span> Node, Express, Django, Flask</p>
                    <p className="skill"><span className="skillLevel">Database:</span> MongoDB, Mongoose, GraphQL, MySQL, Sequelize, Postgres, Knex </p>
                    <p className="skill"><span className="skillLevel">Other:</span> Python, JSON Web Tokens, bcrypt, socket.io, Heroku, Git, Bash, Microsoft Office Suite</p>
                   
                </div>
               
            </div>
        </div>
    )
}

export default Resume;