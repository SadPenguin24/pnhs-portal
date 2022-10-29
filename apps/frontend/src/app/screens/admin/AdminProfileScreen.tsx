import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Header from '../../components/header/Header';

function AdminProfileScreen() {
  return (
    <div>
      <Header page="View Admin Profile" redirect="/admin/home" />
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
              <strong>Sex:</strong> Male
            </div>
            <div className="mb-2">
              <strong>Age:</strong> 23
            </div>
            <div className="mb-2">
              <strong>Role:</strong> Admin
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

export default AdminProfileScreen;
