import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';
import { setCookie } from 'cookies-next';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
// import { setCredentials } from '../redux/slice/authSlice';
// import { useLoginMutation } from '../redux/slice/authApiSlice.js';
import { setCredentials } from '../redux/slice/authSlice';
import { useLoginMutation } from '../redux/api/authApiSlice';

import '../styles/login.scss';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      console.log('I LOVE YOU CARL');
      const { user, access_token } = await login({ email, password }).unwrap();
      dispatch(setCredentials({ user }));

      setCookie('access_token', access_token, {
        sameSite: 'strict',
      });

      setEmail('');
      setPassword('');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* change background color to green */}
      <style>{'body { background-color: #66DA43; }'}</style>
      <Container style={{ textAlign: 'center' }}>
        <Image
          src="../../assets/images/pnhs-logo.png"
          alt="pnhs-logo"
          width={'20%'}
          roundedCircle
          className="my-4"
        />
        <h1 className="mb-4">
          <strong>WELCOME TO YOUR PORTAL</strong>
        </h1>
        <div className="p-4 mx-auto box">
          <Form onSubmit={onSubmitHandler}>
            <Row style={{ textAlign: 'start' }}>
              <Col md="2">
                <Form.Label>Select Role:</Form.Label>
              </Col>
              <Col md="10" className="mb-4">
                <Form.Group>
                  <Form.Check
                    inline
                    type="radio"
                    label="Student"
                    id="student"
                    name="role"
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Employee"
                    id="employee"
                    name="role"
                  />
                </Form.Group>
              </Col>
              <Form.Group className="mb-3">
                <Row>
                  <Col md="2">
                    <Form.Label>Email: </Form.Label>
                  </Col>
                  <Col md="10">
                    <Form.Control
                      type="email"
                      id="email"
                      value={email}
                      name="email"
                      className="borderColor"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3">
                <Row>
                  <Col md="2">
                    <Form.Label>Password: </Form.Label>
                  </Col>
                  <Col md="10">
                    <Form.Control
                      type="password"
                      id="password"
                      value={password}
                      name="password"
                      className="borderColor"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Col>
                </Row>
              </Form.Group>

              <Col md="2"></Col>
              <Col md="10" className="mb-3">
                <Button
                  variant="outline-primary"
                  size="lg"
                  className=" me-4"
                  type="submit"
                >
                  Login
                </Button>
                <Button variant="outline-primary" size="lg">
                  Reset
                </Button>
              </Col>
              <Col md="2"></Col>
              <Col md="10">
                <Link style={{ color: '#045933' }} to="#">
                  Forgot Password?
                </Link>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default LoginScreen;
