import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <header>
            <a href="https://jeremygehlen.com" className="logo">Jeremy Gehlen</a>
            <nav className="navbar">
                <ul className="nav__links">
                    <li><Link to="/">Home</Link></li>
                    <li><a href="https://jeremygehlen.com/about">About</a></li>
                </ul>
            </nav>
            <a className="cta" href="https://jeremygehlen.com/contact"><button>Contact</button></a>
            </header>
        </div>
    )
}

export default Navbar