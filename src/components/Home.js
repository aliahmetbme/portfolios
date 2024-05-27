
import React from 'react';
import '../styles';
import profileImage from '../assests/profile.jpg';
import { Container, Button } from 'react-bootstrap'; // Assuming you are using react-bootstrap
import {  FaGithub, FaLinkedin } from 'react-icons/fa';

const openWebsite = () => {
  //window.open('https://www.linkedin.com/in/ali-ahmet-erdogdu/', '_blank');
   // CV dosyasının yolunu belirtin (örneğin assets klasöründe)
   const cvPath = '/portfolios/src/assests/CV.pdf';
   // CV dosyasını indirmek için yeni bir pencere açın
   window.open(cvPath, '_blank');
 
};


const Home = () => (

  <section className='home' style={{ marginTop: 50 }}>
    <img src={profileImage} alt="Profile" style={{ width: '200px', borderRadius: '50%' }} />
    <h2>Hello, I am Ali Ahmet Erdoğdu.I am a junior student who is interested in mobile development, and I keep improving myself in various fields.</h2>
    <div className="box">
      <button className='button' onClick={openWebsite}>
        <FaLinkedin className="icon" />
      </button>
      <button className='button'>
        <FaGithub className="icon" />
      </button>
      <a href="../assests/CV.pdf" download="../assests/CV.pdf">CV'yi İndir</a>


    </div>
  </section>
);

export default Home;
// Apply styles in your components


