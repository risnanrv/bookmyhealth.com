import React from 'react'
import { Container, Col} from 'react-bootstrap';
import './SignupContainer.css'
import {assets} from '../../Assets/assets'
import { Link } from 'react-router-dom';
function SignupContainer() {
  return (
   <Container className='signup-header' style={{marginTop:"50px"}}>
          
          <div className="Row main">
          <Col md={6} xs={12} className="content">
         <h3>Book Appointment 

With 100+ Trusted  Doctors</h3>
<Link to="/signup">
      <button className='appoinment-button-2'>SignUp</button>
    </Link>
  
          </Col>
          <Col md={6} xs={12} className="image">
              <img src={assets.appointment_img} alt="" className='d-none d-md-flex show-image'/>
              
          </Col>
          </div>
      </Container>
  )
}

export default SignupContainer