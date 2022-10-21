import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Header from '../components/header/Header';

function AdminFacultyList() {
  return (
    <div>
      <Header page="Name of Faculty" />
      <Container>
        <Row>
          <Col className="p-2" xs="8">
            Name
          </Col>
          <Col xs="4" className="text-center p-2">
            Actions
          </Col>

          <Col className="p-2" xs="8">
            1. Ovaltine
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
            2. Thanos
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
            3. Ramsy Boy
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

export default AdminFacultyList;
