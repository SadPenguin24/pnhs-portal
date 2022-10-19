import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';
import { setCookie } from 'cookies-next';
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  ListGroup,
  Row,
} from 'react-bootstrap';

import { setCredentials } from '../redux/slice/authSlice';

import { useLoginMutation } from '../redux/slice/authApiSlice.js';

import '../styles/login.scss';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('EMAIL: ', email);
    console.log('PASSWORDss: ', password);

    try {
      const { user, access_token } = await login({ email, password }).unwrap();
      dispatch(setCredentials({ user, access_token }));
      setCookie('access_token', access_token, {
        sameSite: 'strict',
      });
      console.log('process.env.NEXT_PUBLIC_COOKIE_TIME: ', access_token, {
        sameSite: 'strict',
      });
      setEmail('');
      setPassword('');
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Container style={{ textAlign: 'center' }}>
        <Image
          src="../../assets/images/pnhs-logo.png"
          alt="pnhs-logo"
          roundedCircle
          style={{ width: '20%' }}
          className="my-4"
        />
        <h1 className="mb-4">
          <strong>WELCOME TO YOUR PORTAL</strong>
        </h1>
        <div
          className="p-4 mx-auto"
          style={{ backgroundColor: '#C6F6D8', width: '70%' }}
        >
          <Form>
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
                      type="text"
                      id="email"
                      name="email"
                      className="borderColor"
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
                      name="password"
                      className="borderColor"
                    />
                  </Col>
                </Row>
              </Form.Group>

              <Col md="2"></Col>
              <Col md="10" className="mb-3">
                <Button
                  variant="outline-success"
                  size="lg"
                  className="buttons me-4"
                >
                  Login
                </Button>
                <Button variant="outline-success" size="lg" className="buttons">
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
