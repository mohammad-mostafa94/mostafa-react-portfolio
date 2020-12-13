import React from 'react';
import './carousel.css' 
import Particles from 'react-particles-js';
import { Button, Col, Container, Row } from "react-bootstrap";
import Typing from "react-typing-animation";
import Spin from "react-reveal/Spin";
import Slide from "react-reveal/Slide";
import github from './github.png';
import linkedin from './linkedin (1).png';
import stackOevrflow from './stack-overflow.png';

const HomeCarousel = () => {
    return (
        <div id="home" className= 'color-dark'>

            <Container>
                    <Row>
                      <Col md={6}>
                        <Row>
                          <Col md={12} className="text-center">
                              <h1 id="font-hello" className="mb-3">
                                  Hello, I'm <br />
                                      <Typing>
                                          <span id="google-font-name" className="name-color">Golam Mostafa</span>
                                      </Typing>
                              </h1>
                                    <Spin>
                                      <h2 id = "google-font-title">I'm a Front-End Developer</h2>
                                    </Spin>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={12} className="text-center mt-5 ">
                            <Slide left>
                              <Button
                                style={{ color: "white", marginBottom: "10px", }}
                                href="https://www.linkedin.com/in/gm-shakil-bhuiyan-42306817a/"
                                variant="outline-primary"
                              >
                                View My LinkedIn Profile
                                <img className=" ml-1" src={linkedin} alt="" />
                              </Button>
                            </Slide>
                            <Slide right>
                              <Button
                                style={{ color: "white", marginBottom: "15px" }}
                                variant="outline-info"
                                href="https://github.com/MdGolamMostafa"
                              >
                                View My GitHub Profile
                                <img className=" ml-1" src={github} alt="" />
                              </Button>
                            </Slide>
                            <Slide bottom> 
                              <Button
                                style={{ color: "white" }}
                                variant="outline-success"
                                href="https://stackexchange.com/users/15054529/g-m-shakil-bhuiyan"
                              >
                                Stack Overflow
                                <img className="svg-icon" src={stackOevrflow} alt="" />
                              </Button>
                              
                            </Slide>
                          </Col>
                        </Row>
                      </Col>
                    
                      <Col md={6} className="mt-5 mb-5 d-flex  justify-content-center my-image">
                    
                        <img style={{ height: "100%" }} className="img-fluid" src={"https://i.ibb.co/bv1LgFQ/shakil-febicon.png"} alt="picture" />
                      </Col>
                    </Row>
                  </Container>
      <Particles
      
        height="40vh"
        width="100%"
        params={{
          "particles": {
            "number": {
              "value": 40
            },
            "size": {
              "value": 3
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            }
          }
        }} >
        </Particles>

    </div>
    );
};

export default HomeCarousel;