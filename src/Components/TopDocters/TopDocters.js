import React from 'react'
import './TopDocters.css'
import { Col, Container, Row ,Card} from 'react-bootstrap'
import { FaCircle } from "react-icons/fa";
import {assets} from '../../assets_frontend/assets.js'
import { IoMdArrowDropright } from "react-icons/io";
function TopDocters() {
    const doctors = [
        { id: 1, name: 'Dr. John Doe', specialty: 'Cardiologist', imageUrl: assets.doc1 },
        { id: 2, name: 'Dr. Emily Larson', specialty: 'Dermatologist', imageUrl: assets.doc2 },
        { id: 3, name: 'Dr. Alice Johnson', specialty: 'Pediatrician', imageUrl: assets.doc3 },
  { id: 4, name: 'Dr. Michael Brown', specialty: 'Orthopedic Surgeon', imageUrl: assets.doc4 },
  { id: 5, name: 'Dr. Jennifer Garcia', specialty: 'Neurologist', imageUrl: assets.doc5 },
  { id: 6, name: 'Dr. David Wilson', specialty: 'Dentist', imageUrl: assets.doc6 },
  { id: 7, name: 'Dr. Jennifer Garcia', specialty: 'Ophthalmologist', imageUrl: assets.doc7 },
  { id: 8, name: 'Dr. Daniel Clark', specialty: 'General Practitioner', imageUrl: assets.doc8 }
      ];
  return (
    <Container className='main-docters'>
        <div className="heading">
            <h3 className='text-center'>Top Docters To Book</h3>
            <p className='text-center'>Effortlessly explore our comprehensive directory of reliable and experienced doctors</p>
        </div>
        <Row>
            {
                doctors.map((doctor)=>(
                    <Col md={3} sm={6} xs={6} key={doctor.id}>
                         <Card style={{width:"250px",height:"350px",marginTop:"20px"}}>
        <div className="image-container" style={{background: "rgb(234 239 255)"}}>
        <Card.Img variant="top" src={doctor.imageUrl} style={{width:"267px",height:"250px",marginLeft:"-10px"}}/>
        </div>
        <Card.Body>
        <p style={{color:"green",fontSize:"14px"}}>  <FaCircle />  Available</p>
            <Card.Title style={{marginTop:" -11px",
    fontSize:" 20px",
    fontWeight:"bold"}}>{doctor.name}</Card.Title>
            <p>{doctor.specialty}</p>
        </Card.Body>

    </Card>
                    </Col>
                )) 
            }


        </Row>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <button className='more-button'>More <IoMdArrowDropright /></button>

        </div>
        
    </Container>
  )
}

export default TopDocters