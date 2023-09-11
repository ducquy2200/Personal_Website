import React from 'react'
import logo from "./media/logo.png";
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="logo..." /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color:"#fff" }}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <Link smooth={true} offset={-110} to="home" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} offset={-110} to="about" className="nav-link">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} offset={-110} to="experience" className="nav-link">Experiences</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} offset={-110} to="project" className="nav-link">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} offset={-110} to="reference" className="nav-link">References</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} offset={-110} to="contact" className="nav-link">Contacts</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
