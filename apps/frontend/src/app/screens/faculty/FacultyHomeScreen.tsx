import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Header from '../../components/header/Header';

function FacultyHomeScreen() {
  return (
    <div>
      <Header page="Portal Main Menu" />
      <Container>
        <Row>
          <LinkContainer to="/faculty/schedule">
            <Col md="6" className="text-center mb-3 clickable">
              <div className="admin-box"></div>
              Faculty Schedule
            </Col>
          </LinkContainer>
          <LinkContainer to="/faculty/profile">
            <Col md="6" className="text-center mb-3 clickable">
              <div className="admin-box"></div>
              Faculty Profile
            </Col>
          </LinkContainer>
          <LinkContainer to="/faculty/grademodule">
            <Col md="6" className="text-center mb-3 clickable">
              <div className="admin-box"></div>
              SHS Grade Module
            </Col>
          </LinkContainer>
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
