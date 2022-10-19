import React from 'react';
import { Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';

import './header.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Header({ page }: any) {
  return (
    <div className="mb-5">
      <nav className="topHeader py-2">
        <Container>
          <Row className="text-center text-sm-start justify-content-center justify-content-sm-start">
            <Col className="my-auto" sm="1" style={{ width: '110px' }}>
              <Image
                src="../../assets/images/pnhs-logo.png"
                alt="pnhs-logo"
                fluid
                roundedCircle
              />
            </Col>
            <Col className="my-auto" sm="11">
              <h1 className="mt-2">
                <strong className="textBlack">
                  Pangasinan National High School
                </strong>
              </h1>
              <h4>
                <em className="textBlack">Senior High School Student Portal</em>
              </h4>
            </Col>
          </Row>
        </Container>
      </nav>
      <Navbar expand="sm" className="bottomHeader">
        <Container>
          <Navbar.Brand className="colorNav py-0 border-2 border-bottom border-primary">
            {page === 'home' && 'Menu'}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {page === 'home' ? (
                <>
                  <Navbar.Brand className="colorNav">Admin</Navbar.Brand>
                  <Navbar.Brand className="colorNav">Logout</Navbar.Brand>
                </>
              ) : (
                <>
                  <Navbar.Brand className="colorNav">Admin</Navbar.Brand>
                  <Navbar.Brand className="colorNav">Menu</Navbar.Brand>
                  <Navbar.Brand className="colorNav">Logout</Navbar.Brand>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
