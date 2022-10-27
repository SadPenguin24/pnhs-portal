import React from 'react';
import { Table } from 'react-bootstrap';

export function ReportCardTable() {
  return (
    <Table bordered className="my-3">
      <thead>
        <tr className="text-center" style={{ backgroundColor: '#1DA914' }}>
          <th style={{ color: 'black' }}>Subjects</th>
          <th style={{ color: 'black' }}>Final Grades</th>
          <th style={{ color: 'black' }}>Remarks</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>sample</td>
          <td>sample</td>
          <td>sample</td>
        </tr>
      </tbody>
    </Table>
  );
}
