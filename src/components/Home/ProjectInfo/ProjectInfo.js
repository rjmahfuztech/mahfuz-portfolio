import React from 'react';
import './ProjectInfo.css';

const ProjectInfo = (props) => {
    const { name, img, description, live, github } = props.project;
    return (
        <div className="col-md-6">
            <div className="card-width text-center">
                <img src={img} className="card-img-top project-image" alt="Project pic" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <div className="">
                        <a target="_blank" href={live} className="mr-2 btn btn-success">Live Site</a>
                        <a target="_blank" href={github} className="ml-2 btn btn-success">Github</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectInfo;