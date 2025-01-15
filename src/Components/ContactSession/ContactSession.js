import React from 'react'
import './ContactSession.css'
import { Container, Row , Col} from 'react-bootstrap'
import ContactImage from '../../assets_frontend/contact_image.png'
function ContactSession() {
  return (
   <Container>
    <h3 className='contactus-heading'>CONTACT US</h3>
    <Row>
    <Col md={6} sm={12} className='contact-image'>
           <img src={ContactImage} alt='contact-Image'></img>
        </Col >
        <Col  md={6} sm={12} className='contact-text' style={{marginTop:"70px"}}>
       

  <h5>Address</h5>
  <p>Sunrise Tower, Level 3<br/>456 Wellness Avenue, India</p>

  <h5>Phone</h5>
  <p>+1 (800) 123-4567</p>

  <h5>Email</h5>
  <p>support@bookmyhealth.com</p>

  <h5>Hours of Operation</h5>
  <p>
    Monday to Friday: 9:00 AM - 6:00 PM<br/>
    Saturday: 10:00 AM - 4:00 PM<br/>
    Sunday: Closed
  </p>
        </Col>
    </Row>
   </Container>
  )
}

export default ContactSession
