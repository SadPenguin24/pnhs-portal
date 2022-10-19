import React from 'react';

import '../styles/adminHome.scss';

import Header from '../components/header/Header';
import { Col, Container, Row } from 'react-bootstrap';

function AdminHomeScreen() {
  return (
    <>
      <Header page={'home'} />
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6" className="text-center">
            <div
              style={{ width: '100%', height: '100px', border: 'solid' }}
            ></div>
            Admin Profile
          </Col>
          <Col lg="3" md="4" sm="6" className="text-center">
            <div
              style={{ width: '100%', height: '100px', border: 'solid' }}
            ></div>
            Enrollment Process
          </Col>
          <Col lg="3" md="4" sm="6" className="text-center">
            <div
              style={{ width: '100%', height: '100px', border: 'solid' }}
            ></div>
            Student Account
          </Col>
          <Col lg="3" md="4" sm="6" className="text-center">
            <div
              style={{ width: '100%', height: '100px', border: 'solid' }}
            ></div>
            Faculty Account
          </Col>
          <Col lg="3" md="4" sm="6" className="text-center">
            <div
              style={{ width: '100%', height: '100px', border: 'solid' }}
            ></div>
            Strand / Enrolees
          </Col>
          <Col lg="3" md="4" sm="6" className="text-center">
            <div
              style={{ width: '100%', height: '100px', border: 'solid' }}
            ></div>
            Schedule of Student
          </Col>
          <Col lg="3" md="4" sm="6" className="text-center">
            <div
              style={{ width: '100%', height: '100px', border: 'solid' }}
            ></div>
            Schedule of Faculty
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdminHomeScreen;
