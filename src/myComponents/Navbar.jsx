import React from 'react'
import Webly_Logo from "../assets/Webly_Logo.svg"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='h-12 w-full bg-bodyBg fixed top-0 z-50 flex justify-around'>
                {/* Logo */}
                <NavLink to="/">
                    <img src={Webly_Logo} alt="Webly" className='h-full' />
                </NavLink>

                {/* Nav-links */}
                <ul className='w-2/4 uppercase flex justify-around items-center'>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar