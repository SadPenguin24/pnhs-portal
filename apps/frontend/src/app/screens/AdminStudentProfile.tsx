import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Header from '../components/header/Header';

function AdminStudentProfile() {
  return (
    <div>
      <Header page="Edit Student Profile" />
      <Container>
        <div className="mx-auto mb-2" style={{ width: '50%' }}>
          <div
            style={{ width: '100px', height: '100px', border: 'solid' }}
            className="mx-auto mb-2"
          >
            Picture
          </div>
          <div>
            <div className="mb-2">
              <strong>Last Name:</strong> Villadolid
            </div>
            <div className="mb-2">
              <strong>First Name:</strong> Dan Hendrix
            </div>
            <div className="mb-2">
              <strong>Middle Name:</strong> Frayre
            </div>
            <div className="mb-2">
              <strong>Grade Level:</strong> 11
            </div>
            <div className="mb-2">
              <strong>Age:</strong> 23
            </div>
            <div className="mb-2">
              <strong>Learner Reference Number:</strong> 123456789000
            </div>
            <div className="mb-2">
              <strong>Date of Birth:</strong> May 24, 1999
            </div>
            <div className="mb-2">
              <strong>Place of Birth:</strong> Cainta, Rizal
            </div>
            <div className="mb-2">
              <strong>Contact Number:</strong> 09999999999
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Button variant="outline-primary" size="lg" className="me-5">
              Edit
            </Button>
            <Button variant="outline-primary" size="lg">
              Save
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AdminStudentProfile;
