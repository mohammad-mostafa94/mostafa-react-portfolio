import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";

import "./Projects.css"; 

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center  pb-3">RECENT PROJECTS</h1>
      <Timeline>
        <Events>
        
{/* Project:  Creative Agency */}
<ImageEvent
            date="Sep-09-2020"
            className="text-center"
            text="Creative Agency"
            src={'https://i.ibb.co/zJ4J2YB/Creative-Agency.png'}
            alt="Creative Agency"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Full-stack Complete website for developer company   
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>It is a full-stack and responsive agency management web application for admin and any users. </li>
                          <li>Admin can add desired services and show dashboard also showing to user his/her dashboard. </li>
                          
                          <li>	User can give his/her feedback and it will be shown on website. </li>
                          <li>
                              Added three different services like Graphics, Web and Mobile Application, Web developer. 
                          </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material-UI
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GIT}
                                alt="Github API"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              GitHub API
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href=":https://github.com/MdGolamMostafa/creative-agency"
                  target="_blank"
                >
                  GITHUB(Client)
                </UrlButton>
                <UrlButton
                  href="https://creative-agency-5d297.web.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href=":https://github.com/MdGolamMostafa/creative-agency-server"
                  target="_blank"
                >
                  GITHUB(Server)
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Volunteer Network */}
          <ImageEvent
            date="Aug-11-2020"
            className="text-center"
            text="Volunteer Network"
            src={'https://i.ibb.co/h9T06M0/volunteer-Network-Home.png'}
            alt="Volunteer Network"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Full-stack Complete Responsive website for Volunteer Organization’s  
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>It is a full-stack responsive  volunteer network web application. </li>
                          <li>User can resister his/her any event/task. </li>
                          <li>Used Rest API and 3 out of 4 CRUD operations in this website. </li>
                          <li>Admin can add specific event  for any of his/her volunteer task. </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material-UI
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GIT}
                                alt="Github API"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              GitHub API
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                
                <UrlButton
                  href="https://github.com/MdGolamMostafa/volunteer-network-client"
                  target="_blank"
                >
                  GITHUB(Client)
                </UrlButton>

                <UrlButton
                  href="https://volunteer-network-6272e.web.app/"
                  target="_blank"
                >
                  GO LIVE
                </UrlButton>

                <UrlButton
                  href="https://github.com/MdGolamMostafa/volunteer-network-server"
                  target="_blank"
                >
                  GITHUB(Server)
                </UrlButton>
              
              </div>
            </div>
          </ImageEvent>
          {/* Project: Doctor Portal */}
          <ImageEvent
            date="Jul-11-2020"
            className="text-center"
            text="Doctors Portal"
            src={'https://i.ibb.co/wyz2n39/Doctor-Portal.png'}
            alt="Doctors Portal"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Full-stack Complete Responsive website for Hospital management  
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>It is a full-stack responsive  Hospital management web application. </li>
                          <li>User can take one appointment his/her any times. </li>
                          <li>Used Rest API and 3 out of 4 CRUD operations in this website. </li>
                          <li>Admin can add specific services  for any  his/her patient or Doctors. </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material-UI
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GIT}
                                alt="Github API"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              GitHub API
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                
                <UrlButton
                  href="https://github.com/MdGolamMostafa/volunteer-network-client"
                  target="_blank"
                >
                  GITHUB(Client)
                </UrlButton>

                <UrlButton
                  href="https://volunteer-network-6272e.web.app/"
                  target="_blank"
                >
                  GO LIVE
                </UrlButton>

                <UrlButton
                  href="https://github.com/MdGolamMostafa/volunteer-network-server"
                  target="_blank"
                >
                  GITHUB(Server)
                </UrlButton>
              
              </div>
            </div>
          </ImageEvent>

          {/* Project: Travel Guru With MUI */}
        <ImageEvent
            date="Apr-10-2020"
            className="text-center"
            text="Travel Guru"
            src={'https://i.ibb.co/b5bW950/Home.png'}
            alt="Travel Guru"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Complete website for traveler   booking space 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>It is a responsive hotel management web application. </li>
                          <li>User can book his/her desired space.  </li>
                          <li>Added Google map for searching specific places by three different types sign-in authentication.  </li>
                          <li>Traveler can add his/her desired space of specific date. </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material-UI
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href=" https://travel-guru-b89cb.web.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/MdGolamMostafa/travel-guru"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
