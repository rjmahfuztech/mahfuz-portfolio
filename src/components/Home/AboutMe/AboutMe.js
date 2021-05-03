import React from 'react';
import './AboutMe.css';
import '../../Shared/All.css';
import profile from '../../../images/my-pic.png';
import { useHistory } from 'react-router';
import Fade from 'react-reveal/Fade';

const AboutMe = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/about');
    }
    return (
        <div className="text-white">
            <div className="margin text-center">
                <Fade left>
                    <h3 className="bottom-border">ABOUT ME</h3>
                </Fade>
            </div>
            <Fade bottom cascade>
                <div className="row align-items-center">
                    <div className="col-md-6 text-center">
                        <img src={profile} className="my-image" alt="" />
                    </div>
                    <div className="col-md-6">
                        <p className="about-me">Hi there, this is Mahfuz. Always love to do programming and try to learn new thing about programming. I count myself among the hardworking person. My goal is to become a world-class web developer and to accept the challenge of developing a project.</p>
                        <button onClick={handleClick} className="btn btn-outline-success">MORE ABOUT ME</button>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default AboutMe;