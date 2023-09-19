import React from 'react';
import { HashRouter } from 'react-router-dom';

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
import Navigation from './components/NavBar';
import Index from './pages/Index';
import Footer from './components/Footer';


function App() {

  return (
    <>
      <HashRouter>
        <Header />
        <Navigation />
        <Index />
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;