import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">\
                <h1>i'm quy duc do</h1>
                <h1>welcome everyone to my personal website</h1>
                <Typed
                    className="typed-text"
                    strings={["Software Engineer", "Full Stack Developer", "Mobile Developer", "Machine Learning Enthusiast"]}
                    typeSpeed={40}
                    backspeed={60}
                    loop
                />
                <a href="/#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header
