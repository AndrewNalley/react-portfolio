import React, { useState } from 'react';

function Footer() {
    return (
        <div className="grid">
            <h1 className="heading-center"><br/>Contact</h1>
            <nav className="heading-center">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/andrew-nalley/" role="button" className="contrast">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://github.com/AndrewNalley/" role="button" className="contrast">Github</a>
                    </li>
                    <li>
                        <a href="mailto:awnalley@gmail.com" role="button" className="contrast">Email</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
// code here
export default Footer;