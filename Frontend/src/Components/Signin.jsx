import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

function SignInForm() {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <div className="text-center">
            <h2>Sign In</h2>
          </div>
          <Form>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter your username" />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>
            <Button variant="primary" type="submit" block>
              Sign In
            </Button>
          </Form>
          <div className="text-center mt-3">
            <p>
              Don't have an account? <a href="/signup">Sign Up</a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SignInForm;

