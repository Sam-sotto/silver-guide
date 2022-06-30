import React from 'react'
import './projects.css'


function Projects() {


  return (
    <div id='projects' className='container projects-container'>
      <h1 className='projects-txt'>Projects</h1>

      <div className="project project-01">
        <div className='project-img' id='movie' ></div>
          <div className="project-info">
          <h1 className='name'>Movies</h1>
          <h3 className="tecnology">REACT JS / CSS</h3>
          <h4 className="about">This is a movie web site here i used api to catch the movies to the app.</h4>
          <a href="https://the-show-web.web.app/" target="_blank"  rel='noreferrer'  className="repo-git">
            <span>Let's see it</span>
          </a>
          </div>
    </div>

    <div className="project project-02">
        <div className='project-img' id='travel'></div>
          <div className="project-info">
          <h1 className='name'>Travel</h1>
          <h3 className="tecnology">REACT JS / CSS</h3>
          <h4 className="about">This is a Travel web site is like a airbnb here we have a clean web with responsive styles.</h4>
          <a href="https://travel-app-f6473.web.app/" className="repo-git" target="_blank"  rel='noreferrer'>
            <span>Let's see it</span>
          </a>
          </div>
    </div>

    <div className="project project-03">
        <div className='project-img' id='bitz'></div>
          <div className="project-info">
          <h1 className='name'>E-Commerce</h1>
          <h3 className="tecnology">JAVASCRIPT / CSS</h3>
          <h4 className="about">This is a E-commerce web beautiful desing and simple sometimes less is more .</h4>
          <a href="https://sam-sotto.github.io/V-14-Project/" className="repo-git"  target="_blank"  rel='noreferrer'>
            <span>Let's see it</span>
          </a>
          </div>
    </div>

    <div className="project project-04">
        <div className='project-img' id='xypo'></div>
          <div className="project-info">
          <h1 className='name'>E-Learning</h1>
          <h3 className="tecnology"> JAVASCRIPT / CSS</h3>
          <h4 className="about">This is my fisrt project is a e-learning landing page .</h4>
          <a href="https://sam-sotto.github.io/Learning-web/" className="repo-git" target="_blank"  rel='noreferrer'>
            <span>Let's see it</span>
          </a>
          </div>
    </div>

    <div className="project project-05">
        <div className='project-img' id='old'></div>
          <div className="project-info">
          <h1 className='name'>Old-Portfolio</h1>
          <h3 className="tecnology">JAVASCRIPT / CSS</h3>
          <h4 className="about">My fists path in the web desing but is a responsive web  that remind me the roots </h4>
          <a href="https://sam-sotto.github.io/V13-Project/" className="repo-git" target="_blank"  rel='noreferrer'>
            <span>Let's see it</span>
          </a>
          </div>
    </div>

    </div>
  )
}

export default Projects;