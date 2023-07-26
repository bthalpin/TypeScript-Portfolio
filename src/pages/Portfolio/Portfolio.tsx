import React, { useRef } from 'react';
import { useDraggable } from "react-use-draggable-scroll";

import Project from './Project';
import {projectData} from './projectData';
import styles from './projects.module.css';


interface ProjectData {
    name:string;
    deployed:string;
    github:string;
    class:string;
    shortDescription:string;
    summary:string;
    technology:string;
    disclaimer:string;
}
const Portfolio = () =>{
    const projectRef = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>
    const { events } = useDraggable(projectRef, {
        applyRubberBandEffect: true
    })
    // Returns each project in the projectData.js
    return (
        <div className={styles.projectContainer} {...events} ref={projectRef}>
            {projectData.map((projectInfo:ProjectData,index:number)=>
                <div key={index}>
                    <Project projectInfo={projectInfo} id={index}/>
                </div>
                )}
        </div>
    )
}

export default Portfolio;