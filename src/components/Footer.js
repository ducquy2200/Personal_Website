import React from 'react';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, RedditShareButton, RedditIcon, LinkedinShareButton, LinkedinIcon } from 'react-share';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <a href="http://maps.google.com/?q=Unit%20107%2C%20271%20Westcourt%20Place%2C%20Waterloo%20N2L%202R8%2C%20Ontario%2C%20Canada" target="_blank" rel="noopener noreferrer">Address: Unit 107, 271 Westcourt Place, Waterloo N2L 2R8, Ontario, Canada</a>
                        </div>
                        <div className="d-flex">
                            <a href="tel:+12268991314">Tel: +1(226)899-1314</a>
                        </div>
                        <div className="d-flex">
                            <a href="mailto:ducquy2200@gmail.com">Email: ducquy2200@gmail.com</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <Link smooth={true} offset={-110} to="home" className="footer-nav" href="/#">Home</Link>
                                <br/>
                                <Link smooth={true} offset={-110} to="about" className="footer-nav" href="/#">About Me</Link>
                                <br/>
                                <Link smooth={true} offset={-110} to="experience" className="footer-nav" href="/#">Experiences</Link>
                            </div>
                            <div className="col">
                                <Link smooth={true} offset={-110} to="project" className="footer-nav" href="/#">Projects</Link>
                                <br/>
                                <Link smooth={true} offset={-110} to="reference" className="footer-nav" href="/#">References</Link>
                                <br/>
                                <Link smooth={true} offset={-110} to="contact" className="footer-nav" href="/#">Contacts</Link>
                            </div>
                            <div className="col">
                                <a className="footer-nav" href="https://www.linkedin.com/in/ducquy2200/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                <br />
                                <a className="footer-nav" href="https://github.com/ducquy2200" target="_blank" rel="noopener noreferrer">GitHub</a>
                                <br />
                                <a className="footer-nav" href="https://www.facebook.com/tony.quy.2200/" target="_blank" rel="noopener noreferrer">Facebook</a>
                                <br />
                                <a className="footer-nav" href="https://twitter.com/ducquy2200" target="_blank" rel="noopener noreferrer">Twitter</a>
                                <br />
                                <a className="footer-nav" href="https://www.instagram.com/ducquy2200/" target="_blank" rel="noopener noreferrer">Instagram</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col.md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton url={"https://www.ddq.com"} quote={"Quy Duc Do - Software Engineer Personal Website"}>
                                <FacebookIcon className="mx-3" size={36}/>
                            </FacebookShareButton>
                            <TwitterShareButton url={"https://www.ddq.com"} quote={"Quy Duc Do - Software Engineer Personal Website"}>
                                <TwitterIcon className="mx-3" size={36} />
                            </TwitterShareButton>
                            <RedditShareButton url={"https://www.ddq.com"} quote={"Quy Duc Do - Software Engineer Personal Website"}>
                                <RedditIcon className="mx-3" size={36} />
                            </RedditShareButton>
                            <LinkedinShareButton url={"https://www.ddq.com"} quote={"Quy Duc Do - Software Engineer Personal Website"}>
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;| All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
