import React from 'react';
import project1 from './media/project1.jpg';
import project2 from './media/project2.jpg';
import project3 from './media/project3.jpg';
import project4 from './media/project4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

const Project = () => {
    const openPopupboxProject1 = () => {
        const content = (
            <>
                <img className="project-image-popupbox" src={project1} alt="project1" />
                <p>random</p>
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
                    text: "Project 1"
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
                <p>random</p>
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
                    text: "Project 2"
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
                <p>random</p>
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
                    text: "Project 3"
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
                <p>random</p>
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
                    text: "Project 4"
                },
                faseIn: true,
                faseInSpeed: 500
            }
        })
    }

    return (
        <div className="project-wrapper">
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
                        <img className="project-image" src={project4} alt="project4"/>
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
