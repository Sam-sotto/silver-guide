
import './App.css';
import Header from './Components/header/header';
import Navbar from './Components/nav/nav';
import Contact from './Components/contact/contact';
import Footer from './Components/footer/footer';
import Home from './Components/home/home';
import About from './Components/about/about';
import Projets from './Components/projects/projects';

function App() {
  return (
    <div className="App">
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
    <Header/>
    <Navbar/>
    <Home/>
    <About/>
    <Projets/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
