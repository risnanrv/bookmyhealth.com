import React from 'react'
import './LoginForm.css'
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function LoginForm() {
  return (
    <Container>
    <Form className="form-container-2">
    <h3>Login</h3>
    <p>Please log in to book appointment</p>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </div>

      <button className="submit-btn" type="submit">Login</button>

      <p className="login-p">
      Create an new account? <Link to="/signup">Signup here</Link>
      </p>
    </Form>
  </Container>
  )
}

export default LoginForm
