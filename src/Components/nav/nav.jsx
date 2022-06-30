import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiMessageRoundedDots} from 'react-icons/bi';
import {BsArrowDownCircle} from 'react-icons/bs';


function Navbar() {
  return (
    <div className="navegation">

        <a href="#home">  
         <AiOutlineHome className="icon active-nav "></AiOutlineHome>
         </a>


        <a href="#about">
            <AiOutlineUser className="icon"></AiOutlineUser>
        
        </a>


        <a href="#projects">
            <BiMessageRoundedDots className="icon">
            </BiMessageRoundedDots>
        </a>


        <a href="#footer">
            <BsArrowDownCircle className="icon">
            </BsArrowDownCircle>
        </a>



    </div>
  )
}


    let Icons = document.querySelectorAll('.navegation .icon');
    Icons.forEach((icon) => {
        icon.addEventListener('click', () => {
            changeactive();
            icon.classList.add('active-nav')
        })
    })

    function changeactive(){
        Icons.forEach((icon) => {
            icon.classList.remove('active-nav')
        })
    }


export default Navbar;



