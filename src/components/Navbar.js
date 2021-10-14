import React from 'react'
import logo from "./media/logo.png";
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">
                <a class="navbar-brand" href="/#"><img className="logo" src={logo} alt="logo..." /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color:"#fff" }}/>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item active">
                            <Link smooth={true} offset={-110} to="home" class="nav-link">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link smooth={true} offset={-110} to="about" class="nav-link">About Me</Link>
                        </li>
                        <li class="nav-item">
                            <Link smooth={true} offset={-110} to="experience" class="nav-link">Experiences</Link>
                        </li>
                        <li class="nav-item">
                            <Link smooth={true} offset={-110} to="project" class="nav-link">Projects</Link>
                        </li>
                        <li class="nav-item">
                            <Link smooth={true} offset={-110} to="reference" class="nav-link">References</Link>
                        </li>
                        <li class="nav-item">
                            <Link smooth={true} offset={-110} to="contact" class="nav-link">Contacts</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
