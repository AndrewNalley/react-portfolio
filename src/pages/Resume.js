import React, { useState } from 'react';

function Resume() {
    const googleDocUrl = 'https://docs.google.com/document/d/e/2PACX-1vTgFYVw8ekGHvoLmS2altl2RAAFT1qEpMvnx-wKA0rs5Y-S1nEgFCcvmUyBEBtQR3sFmZUgvslmP0GX/pub?embedded=true';
    return (
        <>
            <div style={{ width: '100vw'}}>
                <iframe
                    title="Google Doc"
                    src={googleDocUrl}
                    width="600"
                    height="800"
                    style={{ display: 'flex' }}
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