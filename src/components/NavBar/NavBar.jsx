import React from 'react';
import './NavBar.css';
// import CartWidget from '../CartWidget/CartWidget';
import CartWidget2 from '../CartWidget/CartWidget';

function NavBar(props) {
    return (
        <nav className='header'>
            <div className='logo'>
                <h1>GARDEN</h1>
            </div>
            <div className='nav'>
                <ul className='list'>
                    <li className='navLink'><a href="#">Home</a></li>
                    <li className='navLink'><a href="#">Productos</a></li>
                    <li className='navLink'><a href="#">Contacto</a></li>
                    <li className='navLink'><CartWidget2/></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;