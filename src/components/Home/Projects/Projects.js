import React from 'react';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import './Projects.css';
import projects from '../../../Data/projects';
import { useHistory } from 'react-router';

const Projects = () => {
    const someProject = projects.slice(0,4);
    const history = useHistory();
    const handleClick = () => {
        history.push('/project');
    }
    return (
        <div className="text-white text-center">
            <div className="margin">
                <h3>MY PROJECTS</h3>
            </div>
            <div className="project-width">
                <div className="row mt-5">
                    {
                        someProject.map((project, index) => <ProjectInfo key={index} project={project}></ProjectInfo>)
                    }
                </div>
                <button onClick={handleClick} className="btn btn-success mt-4">SEE MORE PROJECTS</button>
            </div>
        </div>
    );
};

export default Projects;