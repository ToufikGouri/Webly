import React, { useEffect, useRef, useState } from 'react'
import Webly_Logo from "../assets/Webly_Logo.svg"
import { NavLink } from 'react-router-dom'
import { MenuIcon, XIcon } from 'lucide-react'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef(null)

    useEffect(() => {

        const handleClickOutside = (e) => {
            if (!menuRef?.current.contains(e.target)) {
                setIsMenuOpen(false)    // close the menu if user clicked outside of it
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        // cleanup on component unmount
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <>
            <nav className='h-12 w-full bg-bodyBg fixed top-0 z-50 flex justify-between md:justify-around max-md:px-4'>
                {/* Logo */}
                <NavLink to="/">
                    <img src={Webly_Logo} alt="Webly" className='h-full' />
                </NavLink>

                {/* Nav-links */}
                <ul className='nav-bs w-2/4 max-md:hidden uppercase flex justify-around items-center'>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/blogs">Blog</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>

                {/* For smaller screens */}
                <button className='md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <XIcon /> : <MenuIcon />} </button>
                <ul ref={menuRef} onClick={() => setIsMenuOpen(false)} className={`nav-ss w-2/4 h-screen md:hidden text-xl uppercase bg-bodyBg duration-200 absolute z-40 top-12 ${isMenuOpen ? "right-0" : "-right-96"}`}>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/blogs">Blog</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar