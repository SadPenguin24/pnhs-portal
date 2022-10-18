import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
          style={{ width: '25%' }}
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
              <Col sm="2">
                <Form.Label>Select Role:</Form.Label>
              </Col>
              <Col sm="10" className="mb-4">
                <Form.Check inline type="radio" label="Student" />
                <Form.Check inline type="radio" label="Employee" />
              </Col>
              <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                  Email:{' '}
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" id="email" name="email" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                  Password:{' '}
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="password" id="password" name="password" />
                </Col>
              </Form.Group>

              <Col sm="2"></Col>
              <Col sm="10">
                <Button className="me-5">Login</Button>
                <Button>Reset</Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default LoginScreen;
