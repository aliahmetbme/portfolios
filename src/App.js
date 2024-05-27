import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import './App.css';

function App() {

  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };
  return (
    <div className='container'>
      <nav className='navigation'>
        <ul>
          <li><button onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</button></li>
          <li><button onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</button></li>
          <li><button onClick={() => scrollToSection('education')} className={activeSection === 'education' ? 'active' : ''}>Education</button></li>
          <li><button onClick={() => scrollToSection('experience')} className={activeSection === 'experience' ? 'active' : ''}>Experince</button></li>
          <li><button onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</button></li>
          <li><button onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</button></li>
          
        </ul>
      </nav>

      <div id="home" className="section">
        <Home></Home>
      </div>

      <div id="about" className="section">
        <About></About>
      </div>

      <div id="education" className="section">
        <Contact></Contact>
      </div>

      <div id="experience" className="section">
        <Contact></Contact>
      </div>

      <div id="skills" className="section">
        <Contact></Contact>
      </div>

      <div id="projects" className="section">
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
