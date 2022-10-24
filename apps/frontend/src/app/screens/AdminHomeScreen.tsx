import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import '../styles/adminHome.scss';

import Header from '../components/header/Header';

function AdminHomeScreen() {
  return (
    <>
      <Header page="Menu" />
      <Container>
        <Row>
          <LinkContainer to="/admin/profile">
            <Col lg="3" md="4" xs="6" className="text-center">
              <div className="admin-box"></div>
              Admin Profile
            </Col>
          </LinkContainer>
          <LinkContainer to="/admin/enroll">
            <Col lg="3" md="4" xs="6" className="text-center">
              <div className="admin-box"></div>
              Enrollment Process
            </Col>
          </LinkContainer>
          <LinkContainer to="/admin/studentlist">
            <Col lg="3" md="4" xs="6" className="text-center">
              <div className="admin-box"></div>
              List of Students
            </Col>
          </LinkContainer>
          <LinkContainer to="/admin/facultylist">
            <Col lg="3" md="4" xs="6" className="text-center">
              <div className="admin-box"></div>
              List of Faculty
            </Col>
          </LinkContainer>
          <LinkContainer to="/admin/strandenrollees">
            <Col lg="3" md="4" xs="6" className="text-center">
              <div className="admin-box"></div>
              Strand / Enrollees
            </Col>
          </LinkContainer>
          <LinkContainer to="/admin/studentschedule">
            <Col lg="3" md="4" xs="6" className="text-center">
              <div className="admin-box"></div>
              Schedule of Student
            </Col>
          </LinkContainer>
          <Col lg="3" md="4" xs="6" className="text-center">
            <div className="admin-box"></div>
            Schedule of Faculty
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdminHomeScreen;
