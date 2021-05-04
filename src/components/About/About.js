import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import myProfile from '.././../images/my-pic.png';
import Footer from '../Shared/Footer/Footer';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import lottie from 'lottie-web';

const About = () => {

    const element = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: element.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../animation/skill.json')
        });
    }, []);

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
                            <Link target="blank" to="//drive.google.com/u/0/uc?id=1GC8u-okBprnWivRCrDoteSEpnl91a-Ge&export=download">
                                <button className="btn btn-outline-success">DOWNLOAD MY RESUME</button>
                            </Link>
                        </Slide>
                    </div>
                </div>
                <div className="text-center text-white mt-5 mb-5">
                    <h3 className="bottom-border">MY SKILLS</h3>
                </div>
                <div className="row mt-5">
                    <div className="col-md-5 half-colum">
                        <div className="text-white">
                            <h5 className="skill-name">Expertise:</h5>
                             <div className="row ml-2 mt-2 mb-2">
                                 <span className="skill-style">HTML5</span>
                                 <span className="skill-style">CSS3</span>
                                 <span className="skill-style">JavaScript(ES6)</span>
                                 <span className="skill-style">React</span>
                                 <span className="skill-style">React Bootstrap</span>
                                 <span className="skill-style">React Router</span>
                                 <span className="skill-style">Bootstrap4</span>
                                 <span className="skill-style">Material UI</span>
                             </div>
                             <h5 className="skill-name">Comfortable:</h5>
                             <div className="row ml-2 mt-2 mb-2">
                                 <span className="skill-style">Node.js(CURD)</span>
                                 <span className="skill-style">MongoDB</span>
                                 <span className="skill-style">Firebase</span>
                                 <span className="skill-style">Rest API</span>
                             </div>
                             <h5 className="skill-name">Familiar:</h5>
                             <div className="row ml-2 mt-2 mb-2">
                                 <span className="skill-style">Express.js</span>
                                 <span className="skill-style">Redux</span>
                                 <span className="skill-style">React Stripe</span>
                             </div>
                             <h5 className="skill-name">Tools:</h5>
                             <div className="row ml-2 mt-2 mb-2">
                                 <span className="skill-style">Git</span>
                                 <span className="skill-style">Chrome Dev Tool, VsCode</span>
                                 <span className="skill-style">Github</span>
                                 <span className="skill-style">Netlify</span>
                                 <span className="skill-style">Heroku</span>
                             </div>
                             <h5 className="skill-name">Others:</h5>
                             <div className="row ml-2 mt-2 mb-2">
                                 <span className="skill-style">WordPress</span>
                                 <span className="skill-style">MS Word</span>
                                 <span className="skill-style">Adobe Illustrator</span>
                             </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div ref={element}>
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