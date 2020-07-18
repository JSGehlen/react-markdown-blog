import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__content">
                <a href="https:jeremygehlen.com/" target="_blank" rel="noopener noreferrer">Jeremy Gehlen</a>
                <p>Did you see something you like? Feel free to <a className="contact" href="https://jeremygehlen.com/contact" target="_blank" rel="noopener noreferrer">contact</a> me if you want to work with me</p>
            </div>
            <div className="footer__content">
                <h3>Follow me</h3>
                <ul className="footer__some">
                <li><a href="https://www.linkedin.com/in/jeremy-gehlen/" target="_blank" rel="noopener noreferrer" className="footer__some--links"><i className="lni lni-linkedin"></i></a></li>
                <li><a href="https://github.com/JSGehlen" target="_blank" rel="noopener noreferrer" className="footer__some--links"><i className="lni lni-github"></i></a></li>
                <li><a href="https://www.buymeacoffee.com/jeremygehlen" target="_blank" rel="noopener noreferrer" className="footer__some--links"><i className="lni lni-coffee-cup"></i></a></li>
            </ul>
            </div>
        </div>
    )
}

export default Footer