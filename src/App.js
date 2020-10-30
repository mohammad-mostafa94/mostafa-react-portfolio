
import './App.css';
import HomeCarousel from './components/Carosel/HomeCarousel';
import TitleMessage from './components/MyTitleMessage/TitleMessage';
import MyNavbar from './components/Navbar/Navbar.jsx'
function App() {
  return (
    (<div className="App">
      <MyNavbar/>
      <TitleMessage></TitleMessage>
      <HomeCarousel></HomeCarousel>
     
    </div>)
  );
}

export default App;
