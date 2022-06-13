import React, {FunctionComponent} from 'react';
import {Link} from 'react-router-dom';
import './projects.css';

type ProjectProps = {
    projectInfo:{
        name:string;
        deployed:string;
        github:string;
        class:string;
        summary:string;
        technology:string;
        disclaimer:string;
    };
    id:number;
}
const Project:FunctionComponent<ProjectProps> = ({projectInfo,id}) => {

    
    return(   
        <Link to={`/Project/${id}`}>

        <div className={`projectCard ${projectInfo.class}`} >  
            <section className="projectCardInfo">
                    
                    <div>
                        <h2 className='projectName'>{projectInfo.name}</h2>
                    </div>
                   
            </section>
       
        </div>
                </Link>
        )
}

export default Project;