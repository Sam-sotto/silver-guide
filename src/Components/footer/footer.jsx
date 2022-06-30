import React from 'react'
import './footer.css'
import {BsMouse} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {TiSocialDribbble} from 'react-icons/ti'
import {TiSocialGithub} from 'react-icons/ti'

function Footer() {
  return (
    <div id='footer'className='container footer-container'>
      <h1>That's all  <a href="#home"><h2><BsMouse/>-Scroll Up- </h2></a></h1>

      <div className="social-links">

        <a href="#home">
          <BsInstagram className='social'/>
        </a>

        <a href="#home">
        <TiSocialDribbble className='social'/>
        </a>

        <a href="#home">
          <TiSocialGithub className='social'/>
        </a>

      </div>
    </div>
  )
 }


export default Footer;