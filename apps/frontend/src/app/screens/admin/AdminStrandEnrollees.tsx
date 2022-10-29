import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Header from '../../components/header/Header';

function AdminStrandEnrollees() {
  return (
    <div>
      <Header page="Strand / Enrollees" redirect="/admin/home" />
      <Container>
        <Row>
          <Col md="4" xs="6" className="text-center mb-5">
            <LinkContainer to="/admin/strandstudentlist">
              <div className="admin-box clickable">
                <h1>ABM</h1>
              </div>
            </LinkContainer>
          </Col>
          <Col md="4" xs="6" className="text-center mb-5">
            <div className="admin-box">
              <h1>GAS</h1>
            </div>
          </Col>
          <Col md="4" xs="6" className="text-center mb-5">
            <div className="admin-box">
              <h1>STEM</h1>
            </div>
          </Col>
          <Col md="4" xs="6" className="text-center mb-5">
            <div className="admin-box">
              <h1>HUMSS</h1>
            </div>
          </Col>
          <Col md="4" xs="6" className="text-center mb-5">
            <div className="admin-box">
              <h1>HOME ECONOMICS</h1>
            </div>
          </Col>
          <Col md="4" xs="6" className="text-center mb-5">
            <div className="admin-box">
              <h1>ICT</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminStrandEnrollees;
