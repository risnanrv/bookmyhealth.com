import React from 'react';
import './TopDocters.css';
import { Col, Container, Row, Card } from 'react-bootstrap';
import { FaCircle } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { doctors } from '../../assets_frontend/assets.js';
import { useNavigate } from 'react-router-dom';
function TopDocters({doctor}) {
     const navigate = useNavigate();
    
     const handleCardClick = (doctor) => {
        navigate('/appoinment', { state: { doctor } });
      };
       
    // Limit the doctors array to the first 8 entries
    const topDoctors = doctors.slice(0, 8);

    return (
        <Container className='main-docters'>
            <div className="heading">
                <h3 className='text-center'>Top Doctors To Book</h3>
                <p className='text-center'>Effortlessly explore our comprehensive directory of reliable and experienced doctors</p>
            </div>
            <Row>
                {
                    topDoctors.map((doctor) => (
                        <Col md={3} sm={12} xs={12} key={doctor._id}>
                            <Card className="doctor-card" style={{ width: "250px", height: "350px", marginTop: "20px" }}   onClick={() => handleCardClick(doctor)}>
                                <div className="image-container" style={{ background: "rgb(234 239 255)" }}>
                                    <Card.Img variant="top" src={doctor.image} style={{ width: "267px", height: "250px", marginLeft: "-10px" }} />
                                </div>
                                <Card.Body>
                                    <p style={{ color: "green", fontSize: "14px" }}>
                                        <FaCircle /> Available
                                    </p>
                                    <Card.Title style={{
                                        marginTop: "-11px",
                                        fontSize: "20px",
                                        fontWeight: "bold"
                                    }}>{doctor.name}</Card.Title>
                                    <p>{doctor.speciality}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <button className='more-button'>More <IoMdArrowDropright /></button>
            </div>
        </Container>
    );
}

export default TopDocters;
