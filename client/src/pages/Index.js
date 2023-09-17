import React, { useState, useEffect } from 'react';
import { useLocation, Routes, Route } from "react-router-dom";
import HomeAbout from './HomeAbout';
import Contact from './Contact';
import Project from './Portfolio';
import Resume from './Resume';
import PageNotFound from "./PageNotFound";

function Index() {
// for page transition effect
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransistionStage] = useState("fadeIn");

    useEffect(() => {
        if (location !== displayLocation) setTransistionStage("fadeOut");
    }, [location, displayLocation]);

    return (
        <div
            className={`${transitionStage}`}
            onAnimationEnd={() => {
                if (transitionStage === "fadeOut") {
                    setTransistionStage("fadeIn");
                    setDisplayLocation(location);
                }
            }}
        >
            <Routes location={displayLocation}>
                <Route path='/' element={<HomeAbout />} />
                <Route path='/projects' element={<Project />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </div>
    )
}

export default Index;