import React from 'react';
import './HeaderMain.css';
import profile from '../../../images/me.png';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';


const HeaderMain = () => {
    return (
        <div className="row mt-5 align-items-center">
            <div className="col-md-6 text-white">
                <Zoom bottom cascade>
                    <h4>Hi There, I'm</h4>
                    <h2 className="my-name font-2">Mahfuz Islam</h2>
                    <h2 className="text-info">
                        <Typewriter
                            options={{
                                strings: ['A Web Developer,', 'React Developer', 'Programmer', 'And Tech Learner.'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>
                    <div>
                        <Link className="social-link" target="blank" to="//github.com/rjmahfuztech"><FontAwesomeIcon className='first-icon icon' icon={faGithub} /></Link>
                        <Link className="social-link" target="blank" to="//linkedin.com/in/mahfuz-islam/"><FontAwesomeIcon className='icon' icon={faLinkedin} /></Link>
                        <Link className="social-link" target="blank" to="//facebook.com/profile.php?id=100025242424389"><FontAwesomeIcon className='icon' icon={faFacebook} /></Link>
                        <Link className="social-link" target="blank" to="//twitter.com/MahfuzI87236451"><FontAwesomeIcon className='icon' icon={faTwitter} /></Link>
                    </div>
                    <Link target="blank" to="//drive.google.com/u/0/uc?id=1GC8u-okBprnWivRCrDoteSEpnl91a-Ge&export=download">
                        <button className="btn btn-outline-success mb-4">GET MY RESUME</button>
                    </Link>
                </Zoom>
            </div>
            <div className="col-md-6 text-center">
                <Zoom>
                    <img src={profile} className="img-fluid" alt="" />
                </Zoom>
            </div>
        </div>
    );
};

export default HeaderMain;