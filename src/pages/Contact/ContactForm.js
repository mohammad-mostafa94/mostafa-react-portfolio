import React from 'react';
import './ContactForm.css';
import Button from "react-bootstrap/Button";
const Contact = () => {
    return (
        <section id="contact" className="contact my-5 py-5">
            <div className="container">
                <div className="section-header text-center text-white mb-5">
                    <br/>
                    <h1 className="text-primary">Contact Me</h1>
                    
                </div>
                <div className="col-md-9 mx-auto">
                    <form action="">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter Your Name * "/>
                        </div>
                        <div className="form-group">
                           <input type="text" className="form-control" placeholder="Enter Your Email Address *"/>
                        </div>
                        
                        <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                        </div>
                        <div className="form-group text-center">
                            <a href="mailto:gmshakilbhuiyan@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="gmshakilbhuiyan@gmail.com">
                  <i className="fas fa-envelope-square"></i> SEND
                </Button>
              </a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;