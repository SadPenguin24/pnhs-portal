import React from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import Header from '../../components/header/Header';

function AdminFacultySchedule() {
  return (
    <div>
      <Header page="Schedule of Faculty" />
      <Container>
        <Row className="mb-4">
          <Col></Col>
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
              <th>Grade & Section</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>General Mathematics</td>
              <td>10:00AM - 12:00PM</td>
              <td>ABM</td>
            </tr>
            <tr>
              <td>Biology</td>
              <td>1:00PM - 3:00PM</td>
              <td>STEM</td>
            </tr>
            <tr>
              <td>Chemistry</td>
              <td>3:00PM - 5:00PM</td>
              <td>STEM</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default AdminFacultySchedule;
