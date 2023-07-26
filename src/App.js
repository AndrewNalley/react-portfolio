import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navbar/Navigation';
import PageContainer from './pages';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <PageContainer />
      <Footer />
    </>
  );
}

export default App;
