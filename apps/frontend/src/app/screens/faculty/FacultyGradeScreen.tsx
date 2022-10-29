import React, { useState } from 'react';
import { Button, Container, Nav, NavDropdown, Table } from 'react-bootstrap';
import Header from '../../components/header/Header';

function FacultyGradeScreen() {
  const [gradeLvl, setGradeLvl] = useState('Grade Level');
  const [section, setSection] = useState('Strand/Track/Section');
  const [subjCode, setSubjCode] = useState('Subject Code');
  const [term, setTerm] = useState('Term');

  return (
    <div>
      <Header page="Grade Module" />
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
            <NavDropdown.Item onClick={() => setSection('Section-1-HUMSS')}>
              Section-1-HUMSS
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setSection('Section-1-ABM')}>
              Section-1-ABM
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setSection('Section-1-GAS')}>
              Section-1-GAS
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setSection('Section-1-STEM')}>
              Section-1-STEM
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setSection('Section-1-ICT')}>
              Section-1-ICT
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setSection('Section-1-HE')}>
              Section-1-HE
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setSection('Section-1-COOKERY')}>
              Section-1-COOKERY
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setSection('Section-1-SPORTS')}>
              Section-1-SPORTS
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title={subjCode}>
            <NavDropdown.Item onClick={() => setSubjCode('Elect-101')}>
              Elect-101
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setSubjCode('Elect-102')}>
              Elect-102
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setSubjCode('Elect-103')}>
              Elect-103
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title={term}>
            <NavDropdown.Item onClick={() => setTerm('1st sem')}>
              1st sem
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setTerm('2nd sem')}>
              2nd sem
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Item className="ms-auto">
            <Button className="me-2">Load Data</Button>
            <Button className="me-2">Print Preview</Button>
            <Button>Close</Button>
          </Nav.Item>
        </Nav>
        <Table bordered className="mt-5" responsive="md">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Name</th>
              <th>Subject Code</th>
              <th>Title</th>
              <th>Units</th>
              <th>1st Q</th>
              <th>2nd Q</th>
              <th>Average</th>
              <th>Remarks</th>
              <th>Term</th>
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

export default FacultyGradeScreen;
