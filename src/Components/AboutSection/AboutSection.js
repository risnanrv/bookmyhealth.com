import React from 'react'
import './AboutSection.css'
import { Col, Container, Row } from 'react-bootstrap'
import AboutImage from '../../Assets/about_image.png'
function AboutSection() {
  return (
   <Container>
    <h3 className='aboutus-heading'>ABOUT US</h3>
    <Row>
        <Col md={4} sm={12} className='about-image'>
           <img src={AboutImage} alt='About-Image'></img>
        </Col>
        <Col md={8} sm={12} >
        <div className="about-text">
        <p>Welcome to BookMyHealth, your reliable partner in managing healthcare needs with ease and efficiency. At BookMyHealth, we understand the challenges that come with scheduling doctor appointments and keeping track of health records.</p>

        <p>We are dedicated to providing top-notch healthcare technology. Our platform is constantly evolving, integrating the latest advancements to enhance the user experience and offer outstanding service. Whether you're booking your first appointment or managing ongoing care, BookMyHealth is here to support you at every stage.</p>

        <h5>Our Vision</h5>

        <p>At BookMyHealth, our vision is to create a seamless healthcare experience for every individual. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, precisely when you need it.</p>

        </div>
        </Col>
    </Row>
   </Container>
  )
}

export default AboutSection
