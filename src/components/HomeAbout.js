import React, { useState } from 'react';
import headshot from '../images/headshot.jpg';

function HomeAbout() {
    return (
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
    )
}
export default HomeAbout;