import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Header from '../../components/header/Header';

function FacultyProfileScreen() {
  return (
    <div>
      <Header page="My Profile" />
      <Container>
        <div className="text-center mb-3">Image</div>

        <div className="d-md-flex justify-content-md-between">
          <div className="mb-3">First Name: sample</div>
          <div className="mb-3">Middle Name: sample</div>
          <div className="mb-3">Last Name: sample</div>
        </div>
        <div className="d-md-flex justify-content-md-between">
          <div className="mb-3">Age: sample</div>
          <div className="mb-3">Address: sample</div>
          <div className="mb-3">Birthdate: sample</div>
        </div>
        <div className="d-md-flex justify-content-md-between">
          <div className="mb-3">Birth Place: sample</div>
          <div className="mb-3">Religion: sample</div>
          <div className="mb-3">Contact No.: sample</div>
        </div>
        <div className="text-center">
          <Button>Edit</Button>
        </div>
      </Container>
    </div>
  );
}

export default FacultyProfileScreen;
