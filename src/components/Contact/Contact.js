import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import emailjs from 'emailjs-com';

const Contact = () => {
    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm('sendmail', 'template_aohh9wf', e.target, 'user_olSdnmTSJd55d19AXxoDs')
            .then((result) => {
                if(result){
                    alert('Your email send successfully')
                }
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    }
    return (
        <div className="text-white">
            <div className="container">
                <div className="text-center">
                    <Zoom left cascade>
                        <h2 className="bottom-border mt-2 mb-5">Let's Contact With Me</h2>
                    </Zoom>
                </div>
                <Bounce top cascade>
                    <form className="from-style" onSubmit={sendEmail}>
                        <div className="mb-3">
                            <label className="form-label">Your Name</label>
                            <input type="text" name="name" className="form-control" placeholder="Enter your name" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Your Email</label>
                            <input type="email" name="email" className="form-control" placeholder="Enter your email" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Your Subject</label>
                            <input type="text" name="subject" className="form-control" placeholder="Enter your subject" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Send Me Message</label>
                            <textarea name="message" id="" className="form-control" rows="8" placeholder="Enter message here" required></textarea>
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