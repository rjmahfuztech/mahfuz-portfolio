import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Slide from 'react-reveal/Slide';
import Roll from 'react-reveal/Roll';
import myLogo from '../../../images/Mahfuz.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="mt-5 footer-bg">
            <div className="container">
                <div className="pt-5 pb-5 row">
                    <div className="col-md-4 col-sm-6">
                        <Slide left>
                            <ul>
                                <li>
                                    <h4>My Logo</h4>
                                </li>
                                <li className="mt-3">
                                    <img src={myLogo} className="w-25" alt="" />
                                </li>
                            </ul>
                        </Slide>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <Roll bottom cascade>
                            <ul>
                                <li>
                                    <h4>Quick Links</h4>
                                </li>
                                <li>
                                    <Link className="quick-link" to="/home">Home</Link>
                                </li>
                                <li>
                                    <Link className="quick-link" to="/blog">Blog</Link>
                                </li>
                                <li>
                                    <Link className="quick-link" to="/project">Projects</Link>
                                </li>
                                <li>
                                    <Link className="quick-link" to="/about">About</Link>
                                </li>
                            </ul>
                        </Roll>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <Slide right>
                            <ul>
                                <li>
                                    <h4>Let's contact with me</h4>
                                </li>
                                <li className="mt-3">
                                    <Link className="btn btn-info" to="/contact">Contact</Link>
                                </li>
                                <li>
                                    <Link className="social-link" target="blank" to="//github.com/rjmahfuztech"><FontAwesomeIcon className='first-icon icon' icon={faGithub} /></Link>
                                    <Link className="social-link" target="blank" to="//linkedin.com/in/mahfuz-islam/"><FontAwesomeIcon className='icon' icon={faLinkedin} /></Link>
                                    <Link className="social-link" target="blank" to="//facebook.com/profile.php?id=100025242424389"><FontAwesomeIcon className='icon' icon={faFacebook} /></Link>
                                    <Link className="social-link" target="blank" to="//twitter.com/MahfuzI87236451"><FontAwesomeIcon className='icon' icon={faTwitter} /></Link>
                                </li>
                            </ul>
                        </Slide>
                    </div>
                </div>
                <div className="text-center text-white pb-2">
                    <p>Copyright © {new Date().getFullYear()} by Mahfuz</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;