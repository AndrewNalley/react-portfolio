import React from 'react';

function Resume() {
    // pdf from google drive - editable google doc undesireably affected by responsive design
    // search 'share google pdf on webpage' to update
    const currentResPDF = 'https://drive.google.com/file/d/1zSvf_86TA5x9ACX2DLnQOAVqJD0FV3CY/preview';
    const pdfDownloadLink = 'https://drive.google.com/uc?export=download&id=1zSvf_86TA5x9ACX2DLnQOAVqJD0FV3CY';

    return (
        <>
            <h4 className="heading-center">Resume</h4>
            <div className='iframe-container'>
                <iframe
                    className='responsive-iframe'
                    title='Google Doc'
                    src={currentResPDF}
                ></iframe>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <a
                    href={pdfDownloadLink}
                    role="button"
                    className="secondary"
                    download="AndrewNalleyResume.pdf"
                    style={{ display: 'inline-block', textAlign: 'center' }}
                >
                    Download Resume
                </a>
            </div>
        </>
    )
}

export default Resume;