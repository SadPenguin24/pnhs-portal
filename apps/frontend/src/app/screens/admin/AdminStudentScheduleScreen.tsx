import React from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import Header from '../../components/header/Header';

function AdminStudentScheduleScreen() {
  return (
    <div>
      <div>
        <style>{'body { background-color: #dcf7b0; }'}</style>
        <Header page="Student Schedule" redirect="/admin/home" />
        <Container>
          <Row>
            <Col
              style={{
                backgroundColor: '#ffe4a0',
                border: '#eaaa79 solid',
              }}
              className="me-2"
            >
              Grade Level & Section
            </Col>
            <Col
              style={{
                backgroundColor: '#ffe4a0',
                border: '#eaaa79 solid',
              }}
              className="me-2"
            >
              Strand/Track
            </Col>
            <Col
              style={{
                backgroundColor: '#ffe4a0',
                border: '#eaaa79 solid',
              }}
              className="me-2"
            >
              S.Y. & Term
            </Col>
            <Col className="d-grid gap-2">
              <Button variant="secondary">Load</Button>
            </Col>
          </Row>
          <div className="text-end my-3">
            <Button className="me-5">Add</Button>
            <Button className="me-5">Edit</Button>
            <Button>Save</Button>
          </div>
          <Table bordered className="tableColor">
            <thead>
              <tr className="text-center">
                <th>Subject</th>
                <th>Time</th>
                <th>Teacher</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>sample</td>
                <td>sample</td>
                <td>sample</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    </div>
  );
}

export default AdminStudentScheduleScreen;
