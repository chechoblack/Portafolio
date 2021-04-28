import React from 'react'

function Navbar() {
    return (
        <>
            <div className="wrapper">
                <div className="logo">
                    <img src="./assets/logo_portafolio.png" alt="logo"></img>
                </div>
                <ul className="nav-area">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Services">Skills</a></li>
                    <li><a href="#Portfolio">Portfolio</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
