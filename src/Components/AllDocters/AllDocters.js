import React from 'react'
import { Container , Row, Col, Card} from 'react-bootstrap'
import { doctors } from '../../assets_frontend/assets.js';
import { FaCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
function AllDocters({ doctor }) {

    const navigate = useNavigate();
    const handleCardClick = (doctor) => {
        navigate('/appoinment', { state: { doctor } });
      };
      

  return (
  <Container>
  <Row>
      {
          doctors.map((doctor) => (
              <Col md={3} sm={12} xs={12} key={doctor._id}>
                  <Card className="doctor-card" style={{ width: "250px", height: "350px", marginTop: "20px" }}  onClick={() => handleCardClick(doctor)} >
                      <div className="image-container" style={{ background: "rgb(234 239 255)" }}>
                          <Card.Img variant="top" src={doctor.image} style={{ width: "267px", height: "250px", marginLeft: "-10px" }} key={doctor.id} doctor={doctor} />
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
  </Container>
  )
}

export default AllDocters
