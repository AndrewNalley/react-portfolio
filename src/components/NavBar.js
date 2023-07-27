import React, { useState } from "react";
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/" role="button" className="contrast" >Home</Link>
                    </li>
                    <li>
                        <Link to="/projects" role="button" className="contrast" >Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact" role="button" className="contrast" >Contact</Link>
                    </li>
                    <li>
                        <Link to="/resume" role="button" className="contrast" >Resume</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navigation;
