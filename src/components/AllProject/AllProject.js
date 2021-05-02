import React from 'react';
import AllProjectInfo from '../AllProjectInfo/AllProjectInfo';
import allProject from '../../Data/projects';
import Footer from '../Shared/Footer/Footer';

const AllProject = () => {
    console.log(allProject);
    return (
        <div className="text-white">
            <div className="container text-center">
                <div className="pt-5">
                    <h3>MY ALL PROJECTS</h3>
                </div>
                <div className="project-width">
                    <div className="row pt-5">
                        {
                            allProject.map((project, index) => <AllProjectInfo key={index} project={project}></AllProjectInfo>)
                        }
                    </div>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AllProject;