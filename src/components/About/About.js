// import { useSpring } from '@react-spring/core';
// import { animated } from '@react-spring/web';
// import React, { useRef } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import myProfile from '.././../images/my-pic.png';
import Footer from '../Shared/Footer/Footer';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';

const About = () => {
    // const n = useRef(0)
    // const styles = useSpring({
    //     from: { x: 0 },
    //     config: { duration: 1000 },
    //     loop: {
    //         x: 100,
    //     },
    // })
    return (
        <div>
            <div className="container">
                <div className="text-center mt-5">
                    <Zoom cascade>
                        <h3 className="bottom-border text-white">WHO AM I</h3>
                    </Zoom>
                </div>
                <div className="row text-white mt-5 pt-5 align-items-center">
                    <div className="col-md-6">
                        <Fade bottom cascade>
                            <img src={myProfile} className="my-image" alt="" />
                        </Fade>
                    </div>
                    <div className="col-md-6">
                        <Slide bottom>
                            <p>
                                Hi there, this is Mahfuz. Always love to do programming and try to learn new thing about programming. I count myself among the hardworking person. My goal is to become a world-class web developer and to accept the challenge of developing a project.</p>
                            <Link target="blank" to="//drive.google.com/u/0/uc?id=1Kru71UcHbn4e04HOB7fViYUq8wTsovrZ&export=download">
                                <button className="btn btn-outline-success">DOWNLOAD MY RESUME</button>
                            </Link>
                        </Slide>
                    </div>
                </div>
                <div className="mt-5">
                    <h3 className="text-white text-center">MY SKILL</h3>
                    {/* <div>
                        <animated.div
                            style={{
                                width: 80,
                                height: 80,
                                backgroundColor: '#46e891',
                                borderRadius: 16,
                                ...styles,
                            }}
                        />
                    </div> */}
                    <div className="row mt-5 text-white">
                        <div className="col-md-6">
                            <h5 className="mt-3">HTML</h5>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{ width: '97%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">97%</div>
                            </div>
                            <h5 className="mt-3">CSS</h5>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{ width: '95%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">95%</div>
                            </div>
                            <h5 className="mt-3">BOOTSTRAP</h5>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{ width: '96%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">96%</div>
                            </div>
                            <h5 className="mt-3">MATERIAL UI</h5>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">85%</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h5 className="mt-3">JAVASCRIPT</h5>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{ width: '87%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">87%</div>
                            </div>
                            <h5 className="mt-3">REACT</h5>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{ width: '91%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">91%</div>
                            </div>
                            <h5 className="mt-3">NODE JS</h5>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                            </div>
                            <h5 className="mt-3">FIREBASE</h5>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{ width: '72%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">72%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default About;