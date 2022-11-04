import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import Header from '../../components/header/Header';
import '../../components/tables/tables.scss';

function AdminStudentEnrolledlist() {
  return (
    <div>
      <style>{'body { background-color: #dcf7b0; }'}</style>
      <Header page="Student Enrolled Masterlist" redirect="/admin/home" />
      <Container>
        <Row>
          <Col className="d-flex">
            School Year:
            <div
              className="ms-3"
              style={{
                backgroundColor: '#ffe4a0',
                border: '#eaaa79 solid',
                width: '300px',
                height: '30px',
              }}
            />
          </Col>
          <Col className="d-flex">
            Total:
            <div
              className="ms-3"
              style={{
                backgroundColor: '#1aca4c',
                width: '200px',
                height: '30px',
              }}
            />
          </Col>
        </Row>
        <Table bordered className="tableColor my-3" responsive="md">
          <thead style={{ backgroundColor: '#2a6fd6' }}>
            <tr className="text-center">
              <th className="textWhite">Student No.</th>
              <th className="textWhite">Full Name</th>
              <th className="textWhite">Term</th>
              <th className="textWhite">Strand</th>
              <th className="textWhite">Grade Level</th>
              <th className="textWhite">Section</th>
              <th className="textWhite">Date</th>
              <th className="textWhite">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>sample</td>
              <td>sample</td>
              <td>sample</td>
              <td>sample</td>
              <td>sample</td>
              <td>sample</td>
              <td>sample</td>
              <td>sample</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default AdminStudentEnrolledlist;
