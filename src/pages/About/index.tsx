import React from 'react';
import './about.css';

function About () {
    
    return (
        <div className="aboutContainer">
            <div className="portraitContainer">
                <div className="portrait">
                    <img src='/images/Brian-portrait.png' alt="Brian Halpin portrait"></img>
                </div>
                
            </div>
            <section>
                    <p>Hi, I'm</p> 
                    <p id="name">Brian Halpin</p> 
                    <p id="statement">
                        I am a full stack software developer specializing in MERN stack.  
                        Since the moment I was exposed to programming, it was all I ever wanted to do.  
                        I have always had a passion for problem solving, but thought my love of logic 
                        puzzles would be something I would only ever do as a hobby. Software development 
                        has given me an avenue to not only do what I love, but also to engage me and 
                        challenge me to always improve my skills.
                    </p>    
                    <p id="statement">
                        I earned a certificate in Full Stack Web Development from Rutgers University.  
                        Before starting the program I took it upon myself to learn as much as I could, 
                        even developing a real time chat application using React, Node, Express, Knex, 
                        Postgres, and socket.io.  In my time working through the program, I was able to 
                        hone my skills as a React developer, learn the importance of folder structure, 
                        and learn new technologies like GraphQL.  One of my most important experiences 
                        was collaborating with other developers throughout the program, and in some 
                        instances, using my many years of supervisory experience to help lead the team 
                        to complete the project effectively and efficiently.  
                    </p>    
                    <p id="statement">
                        My love of problem solving, my drive to always improve, and my strong collaborative 
                        skills make me an advantageous candidate for any team.

                    </p>    

                </section>
        </div>
    )
}

export default About;