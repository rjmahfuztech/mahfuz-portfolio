import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';

const Contact = () => {
    return (
        <div className="text-white mt-5">
            <div className="container">
                <div className="text-center">
                    <Zoom left cascade>
                        <h2 className="bottom-border mb-5">Let's Contact With Me</h2>
                    </Zoom>
                </div>
                <Bounce top cascade>
                    <form className="from-style">
                        <div class="mb-3">
                            <label class="form-label">Your Name</label>
                            <input type="text" class="form-control" placeholder="Enter your name" required />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Your Email</label>
                            <input type="email" class="form-control" placeholder="Enter your email" required />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Send Me Message</label>
                            <textarea name="" id="" className="form-control" rows="8" placeholder="Enter message here" required></textarea>
                        </div>
                        <div className="text-right">
                            <button type="submit" class="btn btn-info">SEND MESSAGE</button>
                        </div>
                    </form>
                </Bounce>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Contact;