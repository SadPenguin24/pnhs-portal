import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/header/Header';

function AdminStrandStudentList() {
  return (
    <div>
      <Header page="strandList" />
      <Container>
        <h2 className="text-center">List of All ABM Students</h2>
        <h4>1. Dan Villadolid</h4>
        <h4>2. Gregory Babela</h4>
        <h4>3. Carl Salanga</h4>
      </Container>
    </div>
  );
}

export default AdminStrandStudentList;
