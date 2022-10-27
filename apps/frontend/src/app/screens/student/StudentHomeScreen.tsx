import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Header from '../../components/header/Header';

function StudentHomeScreen() {
  return (
    <>
      <Header page="Portal Main Menu" />
      <Container>
        <Row>
          <LinkContainer to="/student/enrollment">
            <Col md="6" className="text-center mb-3 clickable">
              <div className="admin-box"></div>
              Enrollment / Registration
            </Col>
          </LinkContainer>
          <Col md="6" className="text-center mb-3 clickable">
            <div className="admin-box"></div>
            Student Profile
          </Col>
          <LinkContainer to="/student/reportcard">
            <Col md="6" className="text-center mb-3 clickable">
              <div className="admin-box"></div>
              Report Card
            </Col>
          </LinkContainer>
          <Col md="6" className="text-center mb-3 clickable">
            <div className="admin-box"></div>
            Schedule / Subjects
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default StudentHomeScreen;
