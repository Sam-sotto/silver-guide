import './home.css';
import img from '../props/image-01.jpg'
import Button from '../button/button';
import {BsMouse} from 'react-icons/bs'
import { useState } from 'react';





function Home() {
   const  [toggle,setToggle] = useState(false);

   const ToggleSwitch = () => {
      toggle ? setToggle(false) : setToggle(true);
   }

   console.log(toggle);
  return (
      <div id='home' className='container home-container'>
        <div className="logo">
          <div className={toggle ? "main-img active" : "main-img"}  onClick={ToggleSwitch}>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
          </div>
          <img src={img} alt="" />
        </div>
        <a href="#footer" className="scroll-down">
          <hr />|
          <h5>Scroll Down</h5>
          <BsMouse classname="scroll" ></BsMouse>
          <hr />
        </a>

        <h2><span>About Me</span> <br />
        <p>Hello, in this letter section you will know a little bit about me as a person and as a professional front end developer. <br /> <br />
        
         First of all I am a young student of programming and a future software engineer, I’m still studying but now I got some interesting abilities that you might be interested like fluent management of CSS, Sass, React Js , databases and a good knowledge of Git repositories among others. <br /> <br />
         
          I’m a crative person that love make good design for the web and at the same time I would like learn more, these are some of the atributes that I can shere as a person and as developer. So? What are you waiting for? Contact me and let's make that project you have in mind</p>
        </h2>
          <Button/>
      </div>
  )
}




export default Home;