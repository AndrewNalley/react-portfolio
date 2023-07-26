import React, { useState } from 'react';
import headshot from '../images/headshot.jpg';
import employeeTracker from '../images/employee-tracker-photo.png';
import weatherDashboard from '../images/weather-dashboard.png';
import pokemonGame from '../images/pokemon-game.png';
import logoMaker from '../images/logo-maker.png';
import noteTaker from '../images/note-taker.png';

// project variables
// const project1 = <div className="div1">
// <img src={employeeTracker} alt='employee-tracker' />
// <div className="project-title"><a href="https://github.com/AndrewNalley/employee-tracker">Employee
//     Tracker</a>
//     <p>Command-line employee tracking application</p>
// </div>
// </div>

function Project() {
    return (
        <div>
            <section className="container" id="about-me">
                <h1 className="heading-center">About Me</h1>
                <article className="grid">
                    <img className="headshot" src={headshot} alt='headshot' />
                    <div>
                        <blockquote>I am a Full-stack Web Developer earning a certificate from the University of Minnesota
                            Coding Boot Camp, with previous experience as an Administrator and Opera Singer.
                            <br>
                            </br>
                            As a solutions-driven professional with a flair for the aesthetic side of things, I have been
                            drawn to the many techniques of development and design.
                        </blockquote>
                        <blockquote>
                            My approach to development:<br></br>
                            <ul className="left-align">
                                <li>Tenacious problem solving</li>
                                <li>Continuous refinement</li>
                                <li>Curiosity and creativity</li>
                            </ul>

                            I can't wait to bring my skills and years of professional experience to your
                            project!
                        </blockquote>
                    </div>
                </article>
            </section>
            <section id="portfolio">
                <h1 className="heading-center">Portfolio</h1>
                <article className="grid">
                    <div className="div1">
                        <img src={employeeTracker} alt='employee-tracker' />
                        <div className="project-title"><a href="https://github.com/AndrewNalley/employee-tracker">Employee
                            Tracker</a>
                            <p>Command-line employee tracking application</p>
                        </div>
                    </div>
                    <div className="div2">
                        <img src={weatherDashboard} alt='weather-dashboard' />
                        <div className="project-title"><a href="https://andrewnalley.github.io/weather-dashboard/">Weather
                            Dashboard</a>
                            <p>Five-day weather forecast using two different APIs</p>
                        </div>
                    </div>
                    <div className="div3">
                        <img src={pokemonGame} alt='pokemon-game' />
                        <div className="project-title"><a href="https://2meng.github.io/Whos-that-pokemon/">Who's
                            that Pokémon?!</a>
                            <p>Test your pokémon knowledge!</p>
                        </div>
                    </div>
                    <div className="div4">
                        <img src={logoMaker} alt='logo-maker' />
                        <div className="project-title"><a href="https://github.com/AndrewNalley/logo-maker">Logo
                            Maker</a>
                            <p>Simple logos are so hot right now. Quickly generate an SVG logo!</p>
                        </div>
                    </div>
                    <div className="div5">
                        <img src={noteTaker} alt='note-taker'/>
                        <div className="project-title"><a
                            href="https://aqueous-springs-29735-51eb1397bb8e.herokuapp.com/">Note
                            Taker</a>
                            <p>Use to write and save notes</p>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    )
}
// code here
export default Project;