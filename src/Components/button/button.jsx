import './button.css';

function Button() {
  return (
    <div className='container button-container'>
        <a href="#about" className='btn pri'>
            Learn more
        </a>
        <a href="https://www.linkedin.com/in/ssotto/"  rel="noreferrer" target="_blank"  className="btn sec">
            Get in Touch
        </a>
    </div>
  )
}

export default Button;
