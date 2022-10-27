import React from 'react';
import { Container, Table } from 'react-bootstrap';
import Header from '../../components/header/Header';

function StudentEnrollmentScreen() {
  return (
    <div>
      <Header page="Enrollment / Registration" />
      <Container>
        <div className="mb-2">Student ID:</div>
        <div className="mb-2">Full Name on Records:</div>
        <div className="mb-2">Track / Section:</div>
        <div className="mb-2">Year Level:</div>
        <div className="mb-2">School Year:</div>
        <div className="mb-2">Semester:</div>
        <div className="mb-2">Curriculum Ref. No.:</div>
        <div className="mb-2">Subject Schedule</div>
        <div className="ms-5 mb-2">Block Section:</div>
        <div className="ms-5 mb-3">Load Section:</div>
        <Table bordered>
          <thead>
            <tr>
              <th>STAT</th>
              <th>CLASS CODE</th>
              <th>SUBJECT</th>
              <th>UNITS</th>
              <th>UNIT HOURS</th>
              <th>FROM</th>
              <th>TO</th>
              <th>DAYS</th>
              <th>ROOM</th>
            </tr>
          </thead>
        </Table>
      </Container>
    </div>
  );
}

export default StudentEnrollmentScreen;
