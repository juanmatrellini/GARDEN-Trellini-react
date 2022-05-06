import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

function NavBar(props) {
    return (
        <nav className='header'>
            <div className='logo'>
                <h1><NavLink to='/'>GARDEN</NavLink></h1>
            </div>
            <div className='nav'>
                <ul className='list'>
                    <li className='navLink link1'><NavLink to='/'>Home</NavLink></li>
                    <li className='navLink'><NavLink to='/category/gin'>Gins</NavLink></li>
                    <li className='navLink'><NavLink to='/category/minibox'>Minibox</NavLink></li>
                    <li className='navLink'><NavLink to='/category/box'>Box de madera</NavLink></li>
                    <li className='navLink'><NavLink to='/category/accesorio'>Accesorios</NavLink></li>
                    <li className='navLink'><NavLink to='/category/tonica'>Tonicas</NavLink></li>
                    <li className='navLink'><CartWidget/></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;