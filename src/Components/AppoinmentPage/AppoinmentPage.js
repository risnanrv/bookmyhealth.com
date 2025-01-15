import React, { useEffect } from 'react';
import './AppoinmentPage.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function AppoinmentPage() {
  const location = useLocation();
  
  // Get the doctors data from location.state or fallback to an empty array
  const doctor = location.state?.doctor || null;

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on mount
  }, []);

  if (!doctor) {
    return (
      <div>
        <h3>No doctor details found</h3>
        <p>Please go back and select a doctor.</p>
      </div>
    );
  }

  return (
    <Container>
      <Row>
        <Col md={4} sm={12}>
          <div className="docter-image-container">
            <img src={doctor.image} alt={doctor.name} className="docter-image" />
          </div>
        </Col>
        <Col md={8} sm={12}>
          <div className="docter-details-container">
            <h3>{doctor.name}</h3>
            <div style={{display:"flex",flexDirection: "row"}}>
              <p>{doctor.speciality}</p>
              <button className=" exp-button border text-xs rounded-full">
                {doctor.experience}
              </button>
            </div>
            <h5>About</h5>
            <p>{doctor.about}</p>
            <h5>
              Appointment fee: <span>{doctor.fees}$</span>
            </h5>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AppoinmentPage;
