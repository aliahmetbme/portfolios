
import React from 'react';
import '../styles';
import profileImage from '../assests/profile.jpg';
import { Container, Button } from 'react-bootstrap'; // Assuming you are using react-bootstrap
import {  FaGithub, FaLinkedin , FaFileAlt, FaFilePdf} from 'react-icons/fa';

const openWebsite = (url) => {
  url == "linkedin" ? window.open('https://www.linkedin.com/in/ali-ahmet-erdogdu/', '_blank') : window.open("https://github.com/aliahmetbme","_blank");
 
};


const Home = () => (

  <section className='home' style={{ marginTop: 50, }}>
    <img src={profileImage} alt="Profile" style={{ width: '200px', borderRadius: '50%' , marginBottom:20 }} />
    <h2 style={{fontSize:40, fontFamily:"sans-serif", fontWeight:"bold"}}>Merhaba, ben Ali Ahmet Erdoğdu. Mobil gelişim konusunda ilgili bir üniversite öğrencisiyim ve kendimi çeşitli alanlarda sürekli olarak geliştiriyorum.</h2>
    <div className="box">
      <button className='button' onClick={() => openWebsite("linkedin")}>
        <FaLinkedin className="icon" />
      </button>
      <button className='button' onClick={() => openWebsite()}>
        <FaGithub className="icon" />
      </button>
      <Button style={{backgroundColor:"white",borderRadius:30, fontSize:20 ,color:"black", borderColor:"white"}} onClick={()=>{window.open("CV.pdf","_blank")}}>
        CV'mi İncleyin{" "}
        <FaFilePdf size={30}></FaFilePdf>
      </Button>
    </div>
  </section>
);

export default Home;


