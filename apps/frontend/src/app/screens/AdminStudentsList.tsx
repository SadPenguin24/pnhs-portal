import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Header from '../components/header/Header';

function AdminStudentsList() {
  return (
    <div>
      <Header page="List of Students Accounts" />
      <Container>
        <Row>
          <Col className="p-2" xs="8">
            Name
          </Col>
          <Col xs="4" className="text-center p-2">
            Actions
          </Col>

          <Col className="p-2" xs="8">
            1. Dan Villadolid
          </Col>
          <Col className="text-center p-2" xs="2">
            <LinkContainer to="/admin/editstudent">
              <Button variant="outline-primary" size="sm">
                Profile
              </Button>
            </LinkContainer>
          </Col>
          <Col className="text-center p-2" xs="2">
            <Button variant="outline-danger" size="sm">
              Delete
            </Button>
          </Col>

          <Col className="p-2" xs="8">
            2. Gregory Babela
          </Col>
          <Col className="text-center p-2" xs="2">
            <Button variant="outline-primary" size="sm">
              Profile
            </Button>
          </Col>
          <Col className="text-center p-2" xs="2">
            <Button variant="outline-danger" size="sm">
              Delete
            </Button>
          </Col>

          <Col className="p-2" xs="8">
            3. Carl Salanga
          </Col>
          <Col className="text-center p-2" xs="2">
            <Button variant="outline-primary" size="sm">
              Profile
            </Button>
          </Col>
          <Col className="text-center p-2" xs="2">
            <Button variant="outline-danger" size="sm">
              Delete
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminStudentsList;
