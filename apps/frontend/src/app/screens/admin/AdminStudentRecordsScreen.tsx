/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Header from '../../components/header/Header';
import { ReportCardTable } from '../../components/tables/Tables';
import '../../components/tables/tables.scss';

function AdminStudentRecordsScreen() {
  return (
    <div>
      <style>{'body { background-color: #dcf7b0; }'}</style>
      <Header page="Student Records" redirect="/admin/home" />
      <Container>
        <div className="d-flex justify-content-md-end mb-3">
          <div
            style={{
              backgroundColor: '#ffe4a0',
              border: '#eaaa79 solid',
              width: '500px',
              height: '40px',
            }}
          >
            Enter Student Name:
          </div>
        </div>
        <Row className="mb-5">
          <Col md="7">
            <Form>
              <Form.Group as={Row} className="mb-2">
                <Form.Label column md={2}>
                  Student No.
                </Form.Label>
                <Col md={10}>
                  <Form.Control type="text" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-2">
                <Form.Label column md={2}>
                  Name
                </Form.Label>
                <Col md={10}>
                  <Form.Control type="text" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-2">
                <Form.Label column md={2}>
                  Address
                </Form.Label>
                <Col md={10}>
                  <Form.Control type="text" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-2">
                <Form.Label column md={2}>
                  Contact
                </Form.Label>
                <Col md={10}>
                  <Form.Control type="text" />
                </Col>
              </Form.Group>
            </Form>
          </Col>
          <Col md="5">
            <div>Requirements</div>
            <Form>
              <Form.Check type="checkbox" label="Personal Data Sheet" />
              <Form.Check type="checkbox" label="Good Moral" />
              <Form.Check type="checkbox" label="Birth Certificate" />
              <Form.Check type="checkbox" label="Grade 10 Report Card" />
            </Form>
          </Col>
        </Row>
        <div>STUDENT GRADES OF SENIOR HIGH STUDENT ONLY</div>
        <div
          style={{
            backgroundColor: '#fffefe',
            border: '1px solid',
          }}
          className="p-3 mb-5"
        >
          <Row className="mb-4 mx-md-5">
            <Col md="6">
              <Form>
                <Form.Group as={Row} className="mb-2">
                  <Form.Label column md={2}>
                    School Year
                  </Form.Label>
                  <Col md={10}>
                    <Form.Control type="text" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-2">
                  <Form.Label column md={2}>
                    Term
                  </Form.Label>
                  <Col md={10}>
                    <Form.Control type="text" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-2">
                  <Form.Label column md={2}>
                    Grade
                  </Form.Label>
                  <Col md={10}>
                    <Form.Control type="text" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-2">
                  <Form.Label column md={2}>
                    Section / Strand
                  </Form.Label>
                  <Col md={10}>
                    <Form.Control type="text" />
                  </Col>
                </Form.Group>
              </Form>
            </Col>
            <Col md="6">
              <Form>
                <Form.Group as={Row} className="mb-2">
                  <Form.Label column md={2}>
                    Term
                  </Form.Label>
                  <Col md={10}>
                    <Form.Control type="text" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-2">
                  <Form.Label column md={2}>
                    Grade
                  </Form.Label>
                  <Col md={10}>
                    <Form.Control type="text" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-2">
                  <Form.Label column md={2}>
                    Section / Strand
                  </Form.Label>
                  <Col md={10}>
                    <Form.Control type="text" />
                  </Col>
                </Form.Group>
              </Form>
            </Col>
          </Row>

          <a href="#">Print Preview</a>
          <ReportCardTable headerColor="#19940e" sem="1st" />
          <a href="#">Print Preview</a>
          <ReportCardTable headerColor="#19940e" sem="1st" />
        </div>
      </Container>
    </div>
  );
}

export default AdminStudentRecordsScreen;
