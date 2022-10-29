import React from 'react';
import { Container, Table } from 'react-bootstrap';
import Header from '../../components/header/Header';

function FacultyScheduleScreen() {
  return (
    <div>
      <Header page="Faculty Schedule" />
      <Container>
        <Table bordered>
          <thead>
            <tr className="text-center">
              <th>Type</th>
              <th>Subject</th>
              <th>Day</th>
              <th>Time</th>
              <th>Grade/Section/Strand/Track</th>
            </tr>
          </thead>
          <tbody>
            <tr>
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

export default FacultyScheduleScreen;
