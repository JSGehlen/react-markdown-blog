import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Styles = styled.div`
@media screen and (max-width: 800px) {
    .navbar {
        display: ${({open}) => open ? 'flex' : 'none'};
    }
}

.menu-btn__burger {
    transform: ${({open}) => open ? 'translateX(-50px)' : 'translateX(0)'};
    background:  ${({open}) => open ? 'transparent' : '#fff'};
    box-shadow: ${({open}) => open ? 'none': '0 0.2rem 0.5rem rgba(255,101,47,0.2)'};

    &::before {
        transform:  ${({open}) => open ? 'rotate(45deg) translate(3.5rem, -3.5rem)' : '-0.8rem'};
   }

   &::after {
    transform:  ${({open}) => open ? 'rotate(-45deg) translate(3.5rem, 3.5rem)' : '0.8rem'};

}
}

`

const Navbar = () => {

    const [open, setOpen] = useState(false);

    
    return (
        <Styles open={open}>
        <div className="main-container">
            <header>
            <a href="https://jeremygehlen.com" className="logo">Jeremy Gehlen</a>
            <nav className="navbar">
                <ul className="nav__links">
                    <li><a href="https://jeremygehlen.com/">Home</a></li>
                    <li><Link to="/">Posts</Link></li>
                    <li><a href="https://jeremygehlen.com/about">About</a></li>
                </ul>
            <a className="cta" href="https://jeremygehlen.com/contact"><button>Contact</button></a>
            </nav>
            <div className="menu-btn" onClick={() => setOpen(!open)}>
                <div className="menu-btn__burger"></div>
            </div> 
            </header>

        </div>
        </Styles>
    )
}

export default Navbar