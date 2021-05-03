import React from 'react';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import './Projects.css';
import projects from '../../../Data/projects';
import { useHistory } from 'react-router';
import Fade from 'react-reveal/Fade';

const Projects = () => {
    const someProject = projects.slice(0, 4);
    const history = useHistory();
    const handleClick = () => {
        history.push('/project');
    }
    return (
        <div className="text-white text-center">
            <div className="margin">
            <Fade right>
                <h3 className="bottom-border">MY PROJECTS</h3>
            </Fade>
            </div>
            <div className="project-width">
                <div className="row mt-5">
                    {
                        someProject.map((project, index) => <ProjectInfo key={index} project={project}></ProjectInfo>)
                    }
                </div>
                <button onClick={handleClick} className="btn btn-outline-success mt-4">SEE MORE PROJECTS</button>
            </div>
        </div>
    );
};

export default Projects;