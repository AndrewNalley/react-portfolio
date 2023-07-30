import React from 'react';

function Resume() {
    const googleDocUrl = 'https://drive.google.com/file/d/1SwqqGxAmTE46XrJirI9tHqM4btmLYcfl/preview';

    return (
        <>
            <div className='iframe-container'>
                <iframe
                    className='responsive-iframe'
                    title='Google Doc'
                    src={googleDocUrl}
                ></iframe>
            </div>
            <a
                href="https://docs.google.com/document/d/1s-cFFvgDVXacxeHFOLWv4atzeLtoByBnQx--7XlKWt8/edit?usp=sharing"
                role="button"
                className="secondary"
            >
                Resume
            </a>
        </>
    )
}

export default Resume;