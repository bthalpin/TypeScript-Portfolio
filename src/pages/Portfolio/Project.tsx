import React, {FunctionComponent} from 'react';
import {Link} from 'react-router-dom';
import styles from './projects.module.css';

type ProjectProps = {
    projectInfo:{
        name:string;
        deployed:string;
        github:string;
        class:string;
        shortDescription:string;
        summary:string;
        technology:string;
        disclaimer:string;
    };
    id:number;
}
const Project:FunctionComponent<ProjectProps> = ({projectInfo,id}) => {
console.log(projectInfo)
    
    return ( 
        <>
            <Link to={`/Project/${id}`}>
                <div className={`${styles.projectCard} ${styles[projectInfo.class]}`} >  
                    <section className={styles.projectCardInfo}>
                            
                            <div>
                                <h2 className={styles.projectName}>{projectInfo.name}</h2>
                            </div>
                            
            <div className={styles.projectSummary}>
                <p  className={styles.projectSummaryText}>{projectInfo.shortDescription}</p>
                <p>Technology: {projectInfo.technology}</p>
            </div>
                    </section>
                
                </div>
            </Link>
        </>  
        )
}

export default Project;