import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../components/header/Header';
import { ReportCardTable } from '../../components/tables/Tables';

function StudentReportCardScreen() {
  return (
    <div>
      <Header page="Report Card" />
      <Container>
        <h3>Grade 11</h3>
        <h4>1ST SEMESTER</h4>
        <ReportCardTable />
        <h4>2ND SEMESTER</h4>
        <ReportCardTable />
        <h3 className="mt-5">Grade 12</h3>
        <h4>1ST SEMESTER</h4>
        <ReportCardTable />
        <h4>2ND SEMESTER</h4>
        <ReportCardTable />
      </Container>
    </div>
  );
}

export default StudentReportCardScreen;
