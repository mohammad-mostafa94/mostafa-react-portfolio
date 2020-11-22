import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import  "./Navbar.css"

const MyNavbar = () => {
  return (
    <div >
      <div  className="bg-dark sticky-top">
            <div className="container">
            <nav class="navbar navbar-expand-lg navbar-dark">
                <Nav.Link class="navbar-brand" href="#home"><h1>GM </h1></Nav.Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Nav.Link class="nav-link cool_link active" to="/home">Home</Nav.Link>
                        </li>
                        <li class="nav-item">
                            <Nav.Link class="nav-link cool_link" href="#about">About</Nav.Link>
                        </li>
                        <li class="nav-item">
                            <Nav.Link class="nav-link cool_link" to="/service">Service</Nav.Link>
                        </li>
                        <li class="nav-item">
                            <Nav.Link class="nav-link cool_link" href="#projects">Projects</Nav.Link>
                        </li>
                        <li class="nav-item">
                            <Nav.Link class="nav-link cool_link" href="#blogs">Blog</Nav.Link>
                        </li>
                        <li class="nav-item">
                            <Nav.Link class="nav-link cool_link" href="#contact">Contact</Nav.Link>
                        </li>
                        <li class="nav-item">
                        <a href="https://drive.google.com/file/d/10NhKKzpXqeZfIxNF1N_-UsEWHAWps8L1/view?usp=sharing" target="_blank" rel="noreferrer"><button className="btn btn-outline-primary">Get Resume</button></a>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
       </div>


      {/*
      
      <Navbar
        fixed="top"
        variant="dark"
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
      >
        <div>
          <Navbar.Brand href="#home"> */}
            {/* <img className="logo" src={'https://i.ibb.co/t4RkDb4/gm-logo.png'} alt="" /> */}
          {/* </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="https://drive.google.com/file/d/10NhKKzpXqeZfIxNF1N_-UsEWHAWps8L1/view?usp=sharing">Resume</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#blogs">Blogs</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar> */}


    </div> 
  );
};

export default MyNavbar;
