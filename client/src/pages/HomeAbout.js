import React, { useState } from 'react';
import headshot from '../images/headshot.jpg';

function HomeAbout() {
    return (
        <section className="container" id="about-me">
            <h4 className="heading-center">About Me</h4>
            <article className="grid">
                <img className="headshot" src={headshot} alt='headshot' />
                <div>
                    <blockquote>I am a Full-stack Web Developer earning a certificate from the University of Minnesota
                        Coding Boot Camp, with previous experience as an Administrator and Opera Singer.
                    </blockquote>
                    <blockquote>
                        As a creative and driven professional with a flair for the aesthetic side of things, I have been
                        drawn to the many facets of development and design.
                    </blockquote>
                    <blockquote>
                        I approach development with curiousity, tenacious problem solving, and continuous refinement.
                    </blockquote>
                    <blockquote>
                        I can't wait to bring my skills and years of professional experience to your
                        project!
                    </blockquote>
                </div>
            </article>
        </section>
    )
}
export default HomeAbout;