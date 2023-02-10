import hamburger from './img/Vector.png';
import search from './img/Vector (1).png';
import cart from './img/Vector (2).png';
import ellipse from './img/Ellipse 3.png';
import './cssfiles/header.css';
import Navbar from './navbar';
import { useState } from 'react';



export default function Header(){

    const [isOpen, setIsOpen] = useState(false);

    function openNav(){
        setIsOpen(!isOpen);
    }
    return(
        <header>
            
            <img src={hamburger} alt="hamburger" onClick={openNav}/>
            <h2>ARTSY.</h2>
            <aside>
                <img src={search} alt="search-icon" />
                <div className='ellipse-container'>
                    <img src={cart} alt="ellipse"/>
                   <img src={ellipse} alt="cart" className='ellipse' /> 
                </div>       
            </aside>
            <nav>
               {isOpen ? <Navbar setIsOpen={setIsOpen} isOpen={isOpen} /> : "" }
               
            </nav>
            
        </header>
    )
}