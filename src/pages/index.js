import React from 'react';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import HomeAbout from './HomeAbout';
import Contact from './Contact';
import Project from './Portfolio';
import Resume from './Resume';



function PageContainer(props) {
    return (
        <Router>
            <Routes>
                <Route exact path='/' exact element={<HomeAbout />} />
                <Route path='/projects' element={<Project />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/resume' element={<Resume />} />
            </Routes>
        </Router>
    )
}

export default PageContainer;