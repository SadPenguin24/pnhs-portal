import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../../components/header/Header';

function FacultyHomeScreen() {
  return (
    <div>
      <Header page="Portal Main Menu" />
      <Container>
        <Row>
          <Col md="6" className="text-center mb-3 clickable">
            <div className="admin-box"></div>
            Faculty Schedule
          </Col>
          <Col md="6" className="text-center mb-3 clickable">
            <div className="admin-box"></div>
            Faculty Profile
          </Col>
          <Col md="6" className="text-center mb-3 clickable">
            <div className="admin-box"></div>
            SHS Grade Module
          </Col>
          <Col md="6" className="text-center mb-3 clickable">
            <div className="admin-box"></div>
            Faculty Class List
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FacultyHomeScreen;
