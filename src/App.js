import React from 'react';
import './App.css';
import Navigation from './Navigation'
import About from './About'
import Projects from './Projects'
import Footer from './Footer'

function App() {
  return (
    <div>
      <Navigation/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
