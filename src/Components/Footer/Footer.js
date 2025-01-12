import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import Logo from '../../Assets/Logo.png'
import './Footer.css'
function Footer() {
  return (
   <footer>
    <Container  className='footer-section'>
        <Row>
           <Col md={6} sm={12} className='footer-left'>
           <img src={Logo} alt='Logo' className='logo-image'></img>
           <p>BookMyHealth is a platform for booking doctor appointments across various categories, offering a seamless way to schedule consultations tailored to your health needs.</p>

           </Col>
           
           <Col md={3} sm={12} className='company'>
           <h4>COMPANY</h4>
           <div className="footer-options justify-content-center">
    <a href="#" className="footer-link">HOME</a>
    <a href="#" className="footer-link">DOCTORS</a>
    <a href="#" className="footer-link">ABOUT</a>
    <a href="#" className="footer-link">CONTACT</a>
  </div>
           </Col>
           <Col md={3} sm={12} className='contact'>
           <h4>Talk to Us</h4>
           <div className="footer-options justify-content-center">
    <a href="#" className="footer-link">+0-000-000-000</a>
    <a href="#" className="footer-link">BookMyHealth@help.com</a>
  </div>
           </Col>
           <div className=' copyright  ' >
       
       <span>
       © 2025 Copyright : <a className='text-dark' href='https://risnanrv.github.io/bookmyhealth.com/'>
        bookmyhealth.com
        </a> 
        
        </span> 
      </div>
           
           

        </Row>
    </Container>
   </footer>
  )
}

export default Footer
