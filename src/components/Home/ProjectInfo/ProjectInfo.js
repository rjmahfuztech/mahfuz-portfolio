import React from 'react';
import './ProjectInfo.css';
import Roll from 'react-reveal/Roll';
import { Carousel } from 'react-bootstrap';

const ProjectInfo = (props) => {

    const { name, img, img2, img3, description, live, github } = props.project;
    return (
        <div className="col-md-6">
            <Roll left>
                <div className="card-width text-center">
                    {/* <img src={img} className="card-img-top project-image" alt="Project pic" /> */}
                    <Carousel>
                        <Carousel.Item interval={1000}>
                        <img src={img} className="card-img-top project-image" alt="Project pic" />
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                        <img src={img2} className="card-img-top project-image" alt="Project pic" />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img src={img3} className="card-img-top project-image" alt="Project pic" />
                        </Carousel.Item>
                    </Carousel>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <div className="">
                            <a target="_blank" href={live} className="mr-2 btn btn-outline-info">Live Site</a>
                            <a target="_blank" href={github} className="ml-2 btn btn-outline-info">Github</a>
                        </div>
                    </div>
                </div>
            </Roll>
        </div>
    );
};

export default ProjectInfo;