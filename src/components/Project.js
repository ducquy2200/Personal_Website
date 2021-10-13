import React from 'react';
import project1 from './media/stockPlatform.gif';
import project2 from './media/looRider.gif';
import project3 from './media/q-chat.gif';
import project4 from './media/dj-manager.gif';
import project5 from './media/2048.gif';
import project6 from './media/Insta-bot.gif';
import project7 from './media/flappy-bird.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

const Project = () => {
    const openPopupboxProject1 = () => {
        const content = (
            <>
                <img className="project-image-popupbox" src={project1} alt="project1" />
                <p>
                    <ul>
                        <li>A web application which features real time stock statistics and makes possible predictions based on past and current prices</li>
                        <li>Data is scrapped from Yahoo Finance using <b>Pandas and Beautiful Soup</b>, displayed basic info on browser using <b>Matplotlib and Mplfinance</b>, and used <b>Long Short Term Memory</b> (<b>LSTM</b> – implemented using <b>Tensorflow</b>) to predict future stock prices</li>
                    </ul>
                </p>
                <b>GitHub: </b>
                <a className="hyper-link" onClick={() => window.open("https://github.com/ducquy2200/Stock_Webapp", "_blank")} href='/#'>https://github.com/ducquy2200/Stock_Webapp</a>
            </>
        )
        PopupboxManager.open({content})
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: "Stock Price Prediction Web Application"
                },
                faseIn: true,
                faseInSpeed: 500
            }
        })
    }

    const openPopupboxProject2 = () => {
        const content = (
            <>
                <img className="project-image-popupbox" src={project2} alt="project2" />
                <p>
                    <ul>
                        <li>A model of how an autonomous car can be directed by a satellite using computer vision to optimize the path taken by vehicles</li>
                        <li>A self-driving Arduino car which finds the shortest path by using <b>OpenCV</b> to analyzing the picture of the map and uses <b>A-star algorithm</b> to find the most efficient path in addition to a visualization using <b>Pygame</b></li>
                    </ul>
                </p>
                <b>GitHub: </b>
                <a className="hyper-link" onClick={() => window.open("https://github.com/ducquy2200/LooRider", "_blank")} href='/#'>https://github.com/ducquy2200/LooRider</a>
            </>
        )
        PopupboxManager.open({ content })
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: "LooRider - Autonomous Arduino Car"
                },
                faseIn: true,
                faseInSpeed: 500
            }
        })
    }

    const openPopupboxProject3 = () => {
        const content = (
            <>
                <img className="project-image-popupbox" src={project3} alt="project3" />
                <p>
                    <ul>
                        <li>A web application which allows multiple users to send texts and make friends with each other</li>
                        <li>Front end is developed using <b>HTML/CSS and Python</b> with user friendly interaction and the back end is built using <b>SocketIO, Flask and Javascript</b> with a secure connection to <b>Heroku database</b></li>
                    </ul>
                </p>
                <b>Demo: </b>
                <a className="hyper-link" onClick={() => window.open("https://qchat-application.herokuapp.com", "_blank")} href='/#'>https://qchat-application.herokuapp.com</a>
                <br/>
                <b>GitHub: </b>
                <a className="hyper-link" onClick={() => window.open("https://github.com/ducquy2200/qchat-app", "_blank")} href='/#'>https://github.com/ducquy2200/qchat-app</a>
            </>
        )
        PopupboxManager.open({ content })
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: "QChat Web Application with SocketIO"
                },
                faseIn: true,
                faseInSpeed: 500
            }
        })
    }

    const openPopupboxProject4 = () => {
        const content = (
            <>
                <img className="project-image-popupbox" src={project4} alt="project4" />
                <p>
                    <ul>
                        <li>A web application which allows users to manage clients, events, etc (especially designed for DJs)</li>
                        <li>Front end is developed with Javascript using <b>Vue.js framework</b> (very user friendly) and the back end is built using <b>PHP with MySQL database</b> with RESTful API built from scratch and hosted through <b>FTP</b> on <b>cPanel</b></li>
                    </ul>
                </p>
                <b>Demo: </b>
                <a className="hyper-link" onClick={() => window.open("https://app.discjockeymanager.com", "_blank")} href='/#'>https://app.discjockeymanager.com</a>
            </>
        )
        PopupboxManager.open({ content })
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: "DJ Jockey Manager - Web Application for client management"
                },
                faseIn: true,
                faseInSpeed: 500
            }
        })
    }

    const openPopupboxProject5 = () => {
        const content = (
            <>
                <img className="project-image-popupbox" src={project5} alt="project5" />
                <p>
                    <ul>
                        <li>A full-fledged functional 2048 game built under principle of OOP</li>
                        <li>The game was built using <b>Java</b> with <b>Flask framework</b> to give visual appeal and user-friendly vibes</li>
                    </ul>
                </p>
                <b>GitHub: </b>
                <a className="hyper-link" onClick={() => window.open("https://github.com/ducquy2200/2048", "_blank")} href='/#'>https://github.com/ducquy2200/2048</a>
            </>
        )
        PopupboxManager.open({ content })
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: "2080 - Java edition"
                },
                faseIn: true,
                faseInSpeed: 500
            }
        })
    }

    const openPopupboxProject6 = () => {
        const content = (
            <>
                <img className="project-image-popupbox" src={project6} alt="project6" />
                <p>
                    <ul>
                        <li>A simple but function Instagram bot which can be used to track who you follow but do not follow you back</li>
                        <li>The application was built using <b>Python</b> and <b>Selenium framework with Chrome Webdriver</b> to be fully automated</li>
                    </ul>
                </p>
                <b>GitHub: </b>
                <a className="hyper-link" onClick={() => window.open("https://github.com/ducquy2200/Insta_Bot", "_blank")} href='/#'>https://github.com/ducquy2200/Insta_Bot</a>
            </>
        )
        PopupboxManager.open({ content })
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: "Insta Bot - Best tool to know who does not follow you back"
                },
                faseIn: true,
                faseInSpeed: 500
            }
        })
    }

    const openPopupboxProject7 = () => {
        const content = (
            <>
                <img className="project-image-popupbox" src={project7} alt="project7" />
                <p>
                    <ul>
                        <li>A mock-up of the famous game Flappy Bird with fully functional and 100% match with original sounds and animations</li>
                        <li>The game was built using <b>Python with Pygame</b> while also is planned to have <b> Tensorflow AI/ML NEAT</b> to make it play by itself</li>
                    </ul>
                </p>
                <b>GitHub: </b>
                <a className="hyper-link" onClick={() => window.open("https://github.com/ducquy2200/Flappy_Bird", "_blank")} href='/#'>https://github.com/ducquy2200/Flappy_Bird</a>
            </>
        )
        PopupboxManager.open({ content })
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: "Flappy Bird - Pygame exploration with infinite future AI application"
                },
                faseIn: true,
                faseInSpeed: 500
            }
        })
    }

    return (
        <div id="project" className="project-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Projects</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="project-image-box" onClick={openPopupboxProject1}>
                        <img className="project-image" src={project1} alt="project1"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="project-icon" icon={faSearchPlus}/>
                    </div>
                    <div className="project-image-box" onClick={openPopupboxProject2}>
                        <img className="project-image" src={project2} alt="project2"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
                    </div>
                    <div className="project-image-box" onClick={openPopupboxProject3}>
                        <img className="project-image" src={project3} alt="project3"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
                    </div>
                    <div className="project-image-box" onClick={openPopupboxProject4}>
                        <img className="project-image" src={project4} alt="project4" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
                    </div>
                    <div className="project-image-box" onClick={openPopupboxProject5}>
                        <img className="project-image" src={project5} alt="project5"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
                    </div>
                    <div className="project-image-box" onClick={openPopupboxProject6}>
                        <img className="project-image" src={project6} alt="project6" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
                    </div>
                    <div className="project-image-box" onClick={openPopupboxProject7}>
                        <img className="project-image" src={project7} alt="project7" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer/>
        </div>
    )
}

export default Project
