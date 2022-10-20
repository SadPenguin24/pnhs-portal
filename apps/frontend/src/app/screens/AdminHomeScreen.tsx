import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import '../styles/adminHome.scss';

import Header from '../components/header/Header';

function AdminHomeScreen() {
  return (
    <>
      <Header page={'home'} />
      <Container>
        <Row>
          <LinkContainer to="/admin/profile">
            <Col lg="3" md="4" sm="6" className="text-center">
              <div className="admin-box"></div>
              Admin Profile
            </Col>
          </LinkContainer>
          <LinkContainer to="/admin/enroll">
            <Col lg="3" md="4" sm="6" className="text-center">
              <div className="admin-box"></div>
              Enrollment Process
            </Col>
          </LinkContainer>
          <Col lg="3" md="4" sm="6" className="text-center">
            <div className="admin-box"></div>
            Student Account
          </Col>
          <Col lg="3" md="4" sm="6" className="text-center">
            <div className="admin-box"></div>
            Faculty Account
          </Col>
          <Col lg="3" md="4" sm="6" className="text-center">
            <div className="admin-box"></div>
            Strand / Enrolees
          </Col>
          <Col lg="3" md="4" sm="6" className="text-center">
            <div className="admin-box"></div>
            Schedule of Student
          </Col>
          <Col lg="3" md="4" sm="6" className="text-center">
            <div className="admin-box"></div>
            Schedule of Faculty
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdminHomeScreen;
