import React from 'react';
import { Button, Container, FormControl } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Header from '../../components/header/Header';
import { MasterlistTable } from '../../components/tables/Tables';

function AdminStudentMasterlist() {
  return (
    <div>
      <style>{'body { background-color: #dcf7b0; }'}</style>
      <Header page="Student Masterlist" redirect="/admin/home" />
      <Container>
        <div className="d-flex justify-content-end mb-3">
          <div className="w-50 me-3">
            <FormControl
              style={{ backgroundColor: '#ffe4a0', border: '#eaaa79 solid' }}
              placeholder="Enter Student Name"
            ></FormControl>
          </div>

          <LinkContainer to="/admin/student">
            <Button variant="danger">Create New</Button>
          </LinkContainer>
        </div>
        <MasterlistTable headerColor="#2a6fd6" student={true} />
      </Container>
    </div>
  );
}

export default AdminStudentMasterlist;
