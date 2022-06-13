import React from 'react';
import './projects.css';
import { projectData } from './projectData';
import {useParams} from 'react-router-dom';

type ProjectParams = {
    id:string;
}
function ProjectDetails () {
    const {id} =useParams<ProjectParams>()
    
    const numId = id!==undefined?parseInt(id):0;
    return(
        <div>
            
            <h2 className="projectTitle">
                 {projectData[numId].name}
            </h2>

            <div className="projectDetailContainer">
                <div className='projectDetailCard'>  
                    <a href={projectData[numId].deployed}>
                        <div className={`projectPicture ${projectData[numId].class}`}></div>
                    </a>
        
                    <div className="projectBtnContainer">
                        <div>
                            <button onClick={()=>window.location.href=projectData[numId].deployed} className="projectBtn">Demo</button>
                        </div>

                        <div>
                            <button onClick={()=>window.location.href=projectData[numId].github} className="projectBtn">Code</button>
                        </div>
                    </div>
                </div>

                <div className='projectInfo'>  
                    <div className='projectSummary'>
                        <p>{projectData[numId].summary}</p>
                        <p id="disclaimer">{projectData[numId].disclaimer}</p>
                    </div>

                    <div className='projectTech'>
                        <h3>Technology Used:</h3>
                        <div className="techList">
                            <p>{projectData[numId].technology}</p>
                        </div>
                    </div>     
                </div>
            </div>   
        </div>
        )
}

export default ProjectDetails;