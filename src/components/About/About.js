import { useSpring } from '@react-spring/core';
import { animated } from '@react-spring/web';
import React, { useRef } from 'react';
import myProfile from '.././../images/my-pic.png';
import Footer from '../Shared/Footer/Footer';

const About = () => {
    const n = useRef(0)
  const styles = useSpring({
    from: { x: 0 },
    config: { duration: 1000 },
    loop: {
      x: 100,
    },
  })
    return (
        <div>
            <div className="container">
                <div className="row text-white mt-5 pt-5 align-items-center">
                    <div className="col-md-6">
                        <img src={myProfile} className="my-image" alt="" />
                    </div>
                    <div className="col-md-6">
                        <p>
                            Hi there, this is Mahfuz. Always love to do programming and try to learn new thing about programming. I count myself among the hardworking person. My goal is to become a world-class web developer and to accept the challenge of developing a project.</p>
                        <button className="btn btn-success">DOWNLOAD MY RESUME</button>
                    </div>
                </div>
                <div className="mt-5">
                    <h2 className="text-white text-center">MY SKILL</h2>
                    <div>
                    <animated.div
      style={{
        width: 80,
        height: 80,
        backgroundColor: '#46e891',
        borderRadius: 16,
        ...styles,
      }}
    />
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