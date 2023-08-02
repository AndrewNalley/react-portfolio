import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
import Navigation from './components/NavBar';
import HomeAbout from './pages/HomeAbout';
import Contact from './pages/Contact';
import Project from './pages/Portfolio';
import Resume from './pages/Resume';
import Footer from './components/Footer';
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Router basename='/react-portfolio'>

        <Header />
        <Navigation />
        <Routes>
          <Route path='/' element={<HomeAbout />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />

      </Router>
    </>
  );
}

export default App;