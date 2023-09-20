import React, { useState } from 'react';
import dreamscape from '../images/dreamscape.png';
import employeeTracker from '../images/employee-tracker-photo.png';
import weatherDashboard from '../images/weather-dashboard.png';
import pokemonGame from '../images/pokemon-game.png';
import logoMaker from '../images/logo-maker.png';
import noteTaker from '../images/note-taker.png';
import portfolioPhoto from '../images/portfolio.png';


function Portfolio() {
    return (
        <>
            <h4 className="heading-center">Portfolio</h4>
            <article className="grid">
                <div>
                    <img src={dreamscape} alt='dreamscape' />
                    <div className="project-title"><a href="https://whispering-crag-58704-755d34513186.herokuapp.com/">Dreamscape</a>
                        <p>Create calming and inspirational environments</p>
                    </div>
                </div>
                <div>
                    <img src={employeeTracker} alt='employee-tracker' />
                    <div className="project-title"><a href="https://github.com/AndrewNalley/employee-tracker">Employee
                        Tracker</a>
                        <p>Command-line employee tracking application</p>
                    </div>
                </div>
                <div>
                    <img src={weatherDashboard} alt='weather-dashboard' />
                    <div className="project-title"><a href="https://andrewnalley.github.io/weather-dashboard/">Weather
                        Dashboard</a>
                        <p>Five-day weather forecast using two different APIs</p>
                    </div>
                </div>
            </article>
            <article className="grid">
                <div>
                    <img src={pokemonGame} alt='pokemon-game' />
                    <div className="project-title"><a href="https://2meng.github.io/Whos-that-pokemon/">Who's
                        that Pokémon?!</a>
                        <p>Test your pokémon knowledge!</p>
                    </div>
                </div>
                <div>
                    <img src={logoMaker} alt='logo-maker' />
                    <div className="project-title"><a href="https://github.com/AndrewNalley/logo-maker">Logo
                        Maker</a>
                        <p>Simple logos are so hot right now. Quickly generate an SVG logo!</p>
                    </div>
                </div>
                <div>
                    <img src={noteTaker} alt='note-taker' />
                    <div className="project-title"><a
                        href="https://aqueous-springs-29735-51eb1397bb8e.herokuapp.com/">Note
                        Taker</a>
                        <p>Use to write and save notes</p>
                    </div>
                </div>
                <div>
                    <img src={portfolioPhoto} alt='portfolio' />
                    <div className="project-title"><a
                        href="https://github.com/AndrewNalley/react-portfolio">Portfolio Repository</a>
                        <p>See the code used for this webpage!</p>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Portfolio;