import React from 'react'
import './MainHeader.css'
import { Container, Col} from 'react-bootstrap';
import HeaderImage from '../../Assets/header_img.png'
import { FaLongArrowAltRight } from "react-icons/fa";
function MainHeader() {
  const scrollToDoctors = () => {
    const element = document.querySelector('.main-docters');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Container className='header'>
        
        <div className="Row main">
        <Col md={6} xs={12} className="content">
        <h3>
            Connect With Expert <br></br> Healthcare Professionals
        </h3>
        <p>Browse a curated selection of expert healthcare professionals and book appointments easily, tailored to your needs.</p>
        <button  onClick={scrollToDoctors} className='appoinment-button'>Book Now <FaLongArrowAltRight /></button>

        </Col>
        <Col md={6} xs={12} className="image">
            <img src={HeaderImage} alt='HeaderImage' className='header-image'></img>
            
        </Col>
        </div>
    </Container>
  )
}

export default MainHeader