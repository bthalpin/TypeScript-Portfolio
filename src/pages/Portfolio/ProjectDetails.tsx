import React from 'react';
import styles from './projects.module.css';
import { projectData } from './projectData';
import {useParams} from 'react-router-dom';

type ProjectParams = {
    id:string;
}
function ProjectDetails () {
    const {id} =useParams<ProjectParams>()
    
    const numId = id!==undefined?parseInt(id):0;
    return(
        <div className={styles.projectDetailContainer} >
            
            <h2 className={styles.projectTitle}>
                 {projectData[numId].name}
            </h2>

            <div className={styles.projectDetailCardContainer}>
                <div className={styles.projectDetailCard}>  
                    {numId===6?
                        <div className={`${styles.projectPicture} ${styles[projectData[numId].class]}`}></div>
                    :
                    <a href={projectData[numId].deployed}>
                        <div className={`${styles.projectPicture} ${styles[projectData[numId].class]}`}></div>
                    </a>
                    }
        
                    <div className={styles.projectBtnContainer}>
                        {projectData[numId].deployed === '#/Project/7'?
                        <></>
                        :
                        <div>
                            <button onClick={()=>window.location.href=projectData[numId].deployed} className={styles.projectBtn}>Demo</button>
                        </div>
                        }

                        <div>
                            <button onClick={()=>window.location.href=projectData[numId].github} className={styles.projectBtn}>Code</button>
                        </div>
                    </div>
                </div>

                <div className={styles.projectInfo}>  
                    <div className={styles.s}>
                        <p>{projectData[numId].summary}</p>
                        <p id="disclaimer">{projectData[numId].disclaimer}</p>
                    </div>

                    <div className={styles.projectTech}>
                        <h3>Technology Used:</h3>
                        <div className={styles.techList}>
                            <p>{projectData[numId].technology}</p>
                        </div>
                    </div>     
                </div>
            </div>   
        </div>
        )
}

export default ProjectDetails;