import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import NavBar from './components/Navbar';
import Header from './components/Header';
import Particles from 'react-particles-js';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Project from './components/Project';

function App() {
  return (
    <>
      <Particles
      className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 900
              },
            },
            shape: {
              type: "star",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            },
            size: {
              value: 3
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              }
            }
          }
        }} />
      <NavBar/>
      <Header/>
      <AboutMe/>
      <Experience/>
      <Project/>
    </>
  );
}

export default App;
