import React from 'react';
import Project from './Project';
import {projectData} from './projectData';
import './projects.css';


interface ProjectData {
    name:string;
    deployed:string;
    github:string;
    class:string;
    summary:string;
    technology:string;
    disclaimer:string;
}
const Portfolio = () =>{
    
    // Returns each project in the projectData.js
    return (
        <div className='projectContainer' >
            {projectData.map((projectInfo:ProjectData,index:number)=>
                <div key={index}>
                    <Project projectInfo={projectInfo} id={index}/>
                </div>
                )}
        </div>
    )
}

export default Portfolio;