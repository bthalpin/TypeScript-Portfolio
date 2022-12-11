import React from 'react';
import styles from './resume.module.css';

const Resume = () => {
    return (
        <div className={styles.resumePage}>
            <div className={styles.resumeBackground}>

                <div className={styles.resumeContainer}>
                    <a className={styles.resumeLink} href="/documents/Brian-Halpin-Resume.pdf" download>
                        
                        <p>DOWNLOAD RESUME</p>
                        <img src="/images/Resume.png" alt="Resume"></img>
                        
                    </a>

                </div>
            </div>

            <div className={styles.skillContainer}>
                <div className={styles.skills}>
                    <h2>Technical Skills</h2>
                    <p className={styles.skill}><span className="skillLevel">Front-End:</span> HTML, CSS, Bootstrap, JavaScript, TypeScript, jQuery, React, React-Native, Redux</p>
                    <p className={styles.skill}><span className="skillLevel">Back-End:</span> Node, Express, Handlebars, Django</p>
                    <p className={styles.skill}><span className="skillLevel">Database:</span> MongoDB, Mongoose, GraphQL, Apollo, MySQL, Sequelize, Postgres, Knex </p>
                    <p className={styles.skill}><span className="skillLevel">Other:</span> Python, JSON Web Tokens, bcrypt, socket.io, Heroku, Git, Bash, Insomnia, MongoDb Compass, Microsoft Office Suite</p>
                   
                </div>
               
            </div>
        </div>
    )
}

export default Resume;