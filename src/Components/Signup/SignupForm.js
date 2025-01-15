import React from 'react';
import './SignupForm.css';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SignupForm() {
  return (
    <Container>
      <Form className="form-container">
        <h3>Create Account</h3>
        <p>Please sign up to book appointment</p>

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>

        <button className="submit-btn" type="submit">SignUp</button>

        <p className="login-p">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </Form>
    </Container>
  );
}

export default SignupForm;
