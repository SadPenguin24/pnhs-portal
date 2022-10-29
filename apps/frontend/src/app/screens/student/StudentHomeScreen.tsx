import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Header from '../../components/header/Header';

function StudentHomeScreen() {
  return (
    <>
      <Header page="Menu" />
      <Container>
        <Row>
          <LinkContainer to="/student/enrollment">
            <Col md="6" className="text-center mb-3 clickable">
              <div className="admin-box"></div>
              Enrollment / Registration
            </Col>
          </LinkContainer>
          <LinkContainer to="/student/profile">
            <Col md="6" className="text-center mb-3 clickable">
              <div className="admin-box"></div>
              Student Profile
            </Col>
          </LinkContainer>
          <LinkContainer to="/student/reportcard">
            <Col md="6" className="text-center mb-3 clickable">
              <div className="admin-box"></div>
              Report Card
            </Col>
          </LinkContainer>
          <LinkContainer to="/student/schedule">
            <Col md="6" className="text-center mb-3 clickable">
              <div className="admin-box"></div>
              Schedule / Subjects
            </Col>
          </LinkContainer>
        </Row>
      </Container>
    </>
  );
}

export default StudentHomeScreen;
