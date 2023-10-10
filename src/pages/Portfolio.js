import React, { useState } from 'react';

import dreamscape from '../images/dreamscape.png';
import employeeTracker from '../images/employee-tracker-photo.png';
import weatherDashboard from '../images/weather-dashboard.png';
import pokemonGame from '../images/pokemon-game.png';
import logoMaker from '../images/logo-maker.png';
import noteTaker from '../images/note-taker.png';
import portfolioPhoto from '../images/portfolio.png';
const proj1Link = "https://whispering-crag-58704-755d34513186.herokuapp.com/";
const proj2Link = "https://github.com/AndrewNalley/employee-tracker";
const proj3Link = "https://andrewnalley.github.io/weather-dashboard/";
const proj4Link = "https://2meng.github.io/Whos-that-pokemon/";
const proj5Link = "https://github.com/AndrewNalley/logo-maker";
const proj6Link = "https://aqueous-springs-29735-51eb1397bb8e.herokuapp.com/";
const proj7Link = "https://github.com/AndrewNalley/react-portfolio";


function Portfolio() {
    return (
        <>
            <h4 className='heading-center'>Portfolio</h4>
            <article className='grid'>
                <a id='proj-1' href={proj1Link}>
                    <h5>Dreamscape</h5>
                    <img src={dreamscape} alt='dreamscape' />
                    <p>Create calming and inspirational environments</p>
                </a>
                <a id='proj-2' href={proj2Link}>
                    <h5>Employee Tracker</h5>
                    <img src={employeeTracker} alt='employee-tracker' />
                    <p>Command-line employee tracking application</p>
                </a>
                <a id='proj-3' href={proj3Link}>
                    <h5>Weather Dashboard</h5>
                    <img src={weatherDashboard} alt='weather-dashboard' />
                    <p>Five-day weather forecast using two different APIs</p>
                </a>
            </article>
            <article className='grid'>
                <a id='proj-4' href={proj4Link}>
                    <h5>Who's that Pokémon?!</h5>
                    <img src={pokemonGame} alt='pokemon-game' />
                    <p>Test your pokémon knowledge!</p>
                </a>
                <a id='proj-5' href={proj5Link}>
                    <h5>Logo Maker</h5>
                    <img src={logoMaker} alt='logo-maker' />
                    <p>Simple logos are so hot right now. Quickly generate an SVG logo!</p>
                </a>
                <a id='proj-6' href={proj6Link}>
                    <h5>Note Taker</h5>
                    <img src={noteTaker} alt='note-taker' />
                    <p>Use to write and save notes</p>
                </a>
                <a id='proj-7' href={proj7Link}>
                    <h5>Portfolio Repository</h5>
                    <img src={portfolioPhoto} alt='portfolio' />
                    <p>See the code used for this webpage!</p>
                </a>
            </article>
        </>
    )
}

export default Portfolio;