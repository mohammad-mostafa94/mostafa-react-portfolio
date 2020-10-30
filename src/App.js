
import './App.css';
import HomeCarousel from './components/Carosel/HomeCarousel';
import TitleMessage from './components/MyTitleMessage/TitleMessage';
import MyNavbar from './components/Navbar/Navbar.jsx'
import About from './pages/AboutMe/AboutMe';
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar/>
      <TitleMessage></TitleMessage>
      <HomeCarousel></HomeCarousel>
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          // bgImage={require("https://i.ibb.co/jvQn7nn/background-reverse.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default App;
