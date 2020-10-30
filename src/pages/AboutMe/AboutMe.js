import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import "./about.styles.css";
// import Profile from "../../assets/img/profile/profile.webp";
import './AboutMe.css'
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="shakil Image" 
                src={"https://i.ibb.co/r5X535f/shakil-pic.png"} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details ">
                <h4> This is </h4> <h2><strong>&nbsp;MD. Golam Mostafa</strong></h2>
                I am a Front-End Developer.I had a great interest in 
                React web development from my childhood.I always 
                wondered how these web pages work. A passionate programmer
                 and a Learner, born and brought up in Bangladesh. I am a
                  React Web Developer with <strong>React.js, Redux, Express.js,
                   JavaScript, Node.js, and MongoDB as my tech stack.</strong> 
                

                Working with the clients, my goal is always
                 driven towards providing amazing experience
                  with the best level of quality and service to them.
                
                Along with that, I also help people as a COACH 
                on their journey of becoming a professional programmer. 
                I love learning about new technologies, 
                what problems are they solving and How can I use
                 them to build better and scalable products.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/10NhKKzpXqeZfIxNF1N_-UsEWHAWps8L1/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/MdGolamMostafa" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/gm-shakil-bhuiyan-42306817a/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
