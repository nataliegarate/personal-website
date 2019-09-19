import React from 'react';
import './App.css';
import Navigation from './Navigation'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'

function App() {
  return (
    <div>
      <Navigation/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
