// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Home from './components/Home';
// import About from './components/About';
// import Projects from './components/Projects';
// import Skills from './components/Skills';
// import Experience from './components/Experience';
// import Education from './components/Education';
// import Contact from './components/Contact';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/skills" element={<Skills />} />
//         <Route path="/experience" element={<Experience />} />
//         <Route path="/education" element={<Education />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="skills"><Skills /></div>
      <div id="experience"><Experience /></div>
      <div id="education"><Education /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default App;
