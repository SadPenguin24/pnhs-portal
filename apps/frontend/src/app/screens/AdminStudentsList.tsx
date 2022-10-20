import React from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
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

        {/* <Table bordered>
          <thead>
            <tr>
              <th>Name</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1. Dan Villadolid</td>
              <td>
                <Button variant="outline-primary">View Profile</Button>
              </td>
              <td>
                <Button variant="outline-danger">Delete</Button>
              </td>
            </tr>
            <tr>
              <td>2. Carl Salanga</td>
              <td>
                <Button variant="outline-primary">View Profile</Button>
              </td>
              <td>
                <Button variant="outline-danger">Delete</Button>
              </td>
            </tr>
            <tr>
              <td>3. Gregory Babela </td>
              <td>
                <Button variant="outline-primary">View Profile</Button>
              </td>
              <td>
                <Button variant="outline-danger">Delete</Button>
              </td>
            </tr>
          </tbody>
        </Table> */}
      </Container>
    </div>
  );
}

export default AdminStudentsList;
