import React, { useState } from 'react';

function Contact() {
    return (
        <>
            <h4 className="heading-center">Contact Me</h4>
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
        </>
    )
}

export default Contact;