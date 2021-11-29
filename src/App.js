import './App.css';
import HomeCarousel from './components/Carosel/HomeCarousel';
import TitleMessage from './components/MyTitleMessage/TitleMessage';
import MyNavbar from './components/Navbar/Navbar.jsx'
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import Experience from './pages/EXPERIENCE/Experience';
import TimeLine from './components/Projects/Projects';
import ContactForm from './pages/Contact/ContactForm';
import FooterPanel from './components/Footer/Footer';
// import Contact from './pages/Contact/ContactForm';
import ContactLink from './pages/Contact/Contact';
import Blogs from './pages/Blogs/Blogs';

// import StarfieldAnimation from "react-starfield-animation";

function App() {
  return (
    <div
      // <StarfieldAnimation
      // style={{
      //   position: "fixed",
      //   width: "100%",
      //   height: "100%",
      // }}
      // />

      className=" bg-success" >
      <MyNavbar />
      <TitleMessage></TitleMessage>

      <HomeCarousel></HomeCarousel>

      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TimeLine />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <Blogs />
        </Fade>
      </Container>

      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <hr />

                <Experience />
              </Fade>
            </Container>
          </div>

        </Parallax>
      </div>

      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>
      <hr />
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactLink />
        </Fade>
      </Container>
      <hr />
      <FooterPanel />
    </div>
  );
}

export default App;
