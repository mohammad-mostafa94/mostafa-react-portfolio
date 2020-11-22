import React from 'react';
// import Carousel from "react-bootstrap/Carousel";
// import ScrollDown from '../GoDown/GoDown';
import './carousel.css' 

import { Button, Col, Container, Row } from "react-bootstrap";
import Typing from "react-typing-animation";
import Spin from "react-reveal/Spin";
import Slide from "react-reveal/Slide";


const HomeCarousel = () => {
    return (
        <div id="home" className= 'color-dark'>
            {/* <Carousel controls={false} indicators interval={2500} pause={false}>
                <Carousel.Item>
                    <img className="d-block w-100 custom-img" src={'https://i.ibb.co/FgS8KMZ/react-carosel.jpg'} alt="react slide" />
                </Carousel.Item>
            </Carousel>
            <ScrollDown /> */}

<Container>
        <Row>
          <Col md={6}>
            <Row>
              <Col md={12} className="text-center">
                <h1 className="mb-3">
                  Hello, I'm <br />
                  <Typing>
                    <span className="name-color">Golam Mostafa</span>
                  </Typing>
                </h1>
                <Spin>
                  <h2>I'm a Forntend web developer</h2>
                </Spin>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center mt-5 ">
                <Slide left>
                  <Button
                    style={{ color: "white", marginBottom: "25px" }}
                    href="https://www.linkedin.com/in/gm-shakil-bhuiyan-42306817a/"
                    variant="outline-primary"
                  >
                    View My Linkedin Profile
                    <img className=" ml-1" src={"https://i.ibb.co/VJg3Jcb/linkedin-1.png"} alt="" />
                  </Button>
                </Slide>
                <Slide right>
                  <Button
                    style={{ color: "white", marginBottom: "25px" }}
                    variant="outline-info"
                    href="https://github.com/MdGolamMostafa"
                  >
                    View My GitHub Profile
                    <img className=" ml-1" src={"https://i.ibb.co/yFzJwNr/github.png"} alt="" />
                  </Button>
                </Slide>
                <Slide bottom> 
                  <Button
                    style={{ color: "white" }}
                    variant="outline-success"
                    href="https://stackexchange.com/users/15054529/g-m-shakil-bhuiyan"
                  >
                    Stack Overflow
                    <img className="svg-icon" src={"https://i.ibb.co/nPt2TnZ/stack-overflow.png"} alt="" />
                  </Button>
                  <br/>
                </Slide>
              </Col>
            </Row>
          </Col>
          <Col md={6} className="d-flex  justify-content-center my-image">
            <img style={{ height: "70%" }} className="img-fluid" src={"https://i.ibb.co/bv1LgFQ/shakil-febicon.png"} alt="picture" />
          </Col>
        </Row>
      </Container>
    </div>
    );
};

export default HomeCarousel;