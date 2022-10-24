import React from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import Header from '../components/header/Header';

function AdminStudentScheduleScreen() {
  return (
    <div>
      <Header page="Schedule of ABM Student" />
      <Container>
        <Row className="mb-4">
          <Col>
            <h4>Section 1</h4>
          </Col>
          <Col lg={{ span: 4, offset: 4 }} className="text-end">
            <Button variant="outline-primary" className="me-2">
              Edit
            </Button>
            <Button variant="outline-danger">Delete</Button>
          </Col>
        </Row>
        <Table bordered>
          <thead>
            <tr className="text-center">
              <th>Subject</th>
              <th>Time</th>
              <th>Teacher</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>General Mathematics</td>
              <td>10:00AM - 12:00PM</td>
              <td>Ramsy Boy</td>
            </tr>
            <tr>
              <td>Biology</td>
              <td>1:00PM - 3:00PM</td>
              <td>Ovaltine</td>
            </tr>
            <tr>
              <td>Chemistry</td>
              <td>3:00PM - 5:00PM</td>
              <td>Thanos</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default AdminStudentScheduleScreen;
