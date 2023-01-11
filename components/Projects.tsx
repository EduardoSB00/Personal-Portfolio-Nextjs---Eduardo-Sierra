import { useState } from "react";
import ProjectComponent from "./ProjectComponent";
import ProjectComponent2 from "./ProjectComponent2";
import ProjectComponent3 from "./ProjectComponent3";

const Projects = () => {
    

    return ( 
        <section className="projects-component" id="projects">
            <div className="projects-container">
                <h2 className="projects__title">Proyectos</h2>
                <div className="projects__items">
                    <ProjectComponent/>
                    <ProjectComponent2/>
                    <ProjectComponent3/>
                </div>     
            </div>
            <div style={{height:150}}></div>

        </section>
     );
}
 
export default Projects; 