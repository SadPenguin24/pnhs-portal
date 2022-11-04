import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Header from '../../components/header/Header';
import '../../components/tables/tables.scss';

function AdminStudentMasterlist() {
  return (
    <div>
      <style>{'body { background-color: #dcf7b0; }'}</style>
      <Header page="Student Masterlist" redirect="/admin/home" />
      <Container>
        <div className="d-flex justify-content-md-end mb-3">
          <div
            style={{
              backgroundColor: '#ffe4a0',
              border: '#eaaa79 solid',
              width: '500px',
            }}
            className="me-2"
          >
            Enter Student Name:
          </div>

          <LinkContainer to="/admin/student">
            <Button variant="danger">Create New</Button>
          </LinkContainer>
        </div>
        <Table bordered className="tableColor" responsive="lg">
          <thead style={{ backgroundColor: '#2a6fd6' }}>
            <tr className="text-center">
              <th className="textWhite">Actions</th>
              <th className="textWhite">Student No.</th>
              <th className="textWhite">Last Name</th>
              <th className="textWhite">First Name</th>
              <th className="textWhite">Middle Name</th>
              <th className="textWhite">Grade Level</th>
              <th className="textWhite">Age</th>
              <th className="textWhite">Birthdate</th>
              <th className="textWhite">Birthplace</th>
              <th className="textWhite">Contact #</th>
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
              <td>sample</td>
              <td>sample</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default AdminStudentMasterlist;
