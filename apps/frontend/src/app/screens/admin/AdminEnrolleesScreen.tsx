import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import Header from '../../components/header/Header';
import '../../components/tables/tables.scss';

function AdminEnrolleesScreen() {
  return (
    <div>
      <style>{'body { background-color: #dcf7b0; }'}</style>
      <Header page="Strand/Enrollees/Subject" redirect="/admin/strand" />
      <Container>
        <div className="d-flex mb-3">
          <div
            style={{
              backgroundColor: '#ffe4a0',
              border: '#eaaa79 solid',
              width: '500px',
            }}
            className="me-2"
          >
            Grade/Section
          </div>
          <Button>Search</Button>
        </div>
        <Table bordered className="tableColor mb-3">
          <thead style={{ backgroundColor: '#2a6fd6' }}>
            <tr className="text-center">
              <th>Name</th>
              <th>Grade Level</th>
              <th>Section</th>
              <th>Adviser</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>sample</td>
              <td>sample</td>
              <td>sample</td>
              <td>sample</td>
            </tr>
          </tbody>
        </Table>
        <div className="text-center">
          <Button className="me-3">View Subject</Button>
          <Button variant="danger">Exit</Button>
        </div>
      </Container>
    </div>
  );
}

export default AdminEnrolleesScreen;
