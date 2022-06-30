import React from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';

function Contact() {
  return (
    <div className='container contact-container'>
      <h1>Contact me</h1>
      <div className="contact-links">

        <a href="samuelsotto7@gmail.com" className="contact Mail">
        <AiOutlineMail className='icon'/>
          <h2>E-Mail</h2>
        </a>

        <a href="https://www.linkedin.com/in/ssotto/" rel='noreferrer' target="_blank" className="contact Linkedin">
        <AiOutlineLinkedin className='icon' />
          <h2>Linkedin</h2>
        </a>

        <a href="https://github.com/Sam-sotto" rel='noreferrer' target="_blank" className="contact GitHub">
        <AiOutlineGithub className='icon' />
          <h2>Github</h2>
        </a>

      </div>
    </div>
  )
}

export default Contact;