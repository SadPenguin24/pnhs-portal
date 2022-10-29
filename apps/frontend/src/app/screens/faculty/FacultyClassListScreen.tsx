import React, { useState } from 'react';
import { Button, Container, Nav, NavDropdown, Table } from 'react-bootstrap';
import Header from '../../components/header/Header';

function FacultyClassListScreen() {
  const [gradeLvl, setGradeLvl] = useState('Grade Level');
  const [section, setSection] = useState('Strand/Track/Section');
  const [subjCode, setSubjCode] = useState('Subject Code');
  return (
    <div>
      <Header page="Class List" redirect="/faculty/home" />
      <Container>
        <Nav>
          <Nav.Item className="my-auto">Filter by</Nav.Item>
          <NavDropdown title={gradeLvl}>
            <NavDropdown.Item onClick={() => setGradeLvl('11')}>
              11
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setGradeLvl('12')}>
              12
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title={section}>
            <NavDropdown.Item onClick={() => setSection('TVL1-ICT1')}>
              TVL1-ICT1
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setSection('TVL1-ICT2')}>
              TVL1-ICT2
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setSection('TVL1-ICT3')}>
              TVL1-ICT3
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title={subjCode}>
            <NavDropdown.Item onClick={() => setSubjCode('COM-101')}>
              COM-101
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setSubjCode('COM-102')}>
              COM-102
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setSubjCode('COM-103')}>
              COM-103
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Item className="ms-auto">
            <Button>Load</Button>
          </Nav.Item>
        </Nav>

        <Table bordered className="mt-5">
          <thead>
            <tr>
              <th>Student No.</th>
              <th>Full Name</th>
              <th>Address</th>
              <th>Contact No.</th>
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
      </Container>
    </div>
  );
}

export default FacultyClassListScreen;
