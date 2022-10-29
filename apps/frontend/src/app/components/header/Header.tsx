import React from 'react';
import { Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

import './header.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Header({ page }: any) {
  const role = window.location.pathname.split('/');

  return (
    <div className="mb-5">
      <nav className="topHeader py-2">
        <Container>
          <Row className="text-center text-md-start justify-content-center justify-content-md-start">
            <Col className="my-auto" lg="1" md="12" style={{ width: '95px' }}>
              <Image
                src="../../assets/images/pnhs-logo.png"
                alt="pnhs-logo"
                fluid
                roundedCircle
              />
            </Col>
            <Col className="my-auto" lg="11" md="12">
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
      <Navbar expand="md" className="bottomHeader">
        <Container>
          <Navbar.Brand className="colorNav border-2 border-bottom border-primary">
            {page === 'strandList' ? (
              <Link
                className="text-decoration-none"
                to="/admin/strandenrollees"
              >
                Back
              </Link>
            ) : (
              <h3 className="py-0 my-0">{page}</h3>
            )}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {page === 'Menu' || page === 'Portal Main Menu' ? (
                <>
                  <Navbar.Brand className="colorNav">
                    {/* <div>Admin</div> */}
                    {role[1] === 'admin' ? (
                      <div>Admin</div>
                    ) : role[1] === 'student' ? (
                      <div>Student</div>
                    ) : (
                      <div>Faculty</div>
                    )}
                  </Navbar.Brand>
                  <Navbar.Brand className="colorNav">
                    <div>Logout</div>
                  </Navbar.Brand>
                </>
              ) : (
                <>
                  <Navbar.Brand className="colorNav">
                    {/* <div>Admin</div> */}
                    {role[0] === 'admin' ? (
                      <div>Admin</div>
                    ) : (
                      <div>Student</div>
                    )}
                  </Navbar.Brand>
                  {role[1] === 'admin' ? (
                    <LinkContainer to="/admin/home">
                      <Navbar.Brand className="colorNav">
                        <div>Menu</div>
                      </Navbar.Brand>
                    </LinkContainer>
                  ) : role[1] === 'student' ? (
                    <LinkContainer to="/student/home">
                      <Navbar.Brand className="colorNav">
                        <div>Menu</div>
                      </Navbar.Brand>
                    </LinkContainer>
                  ) : (
                    <LinkContainer to="/faculty/home">
                      <Navbar.Brand className="colorNav">
                        <div>Menu</div>
                      </Navbar.Brand>
                    </LinkContainer>
                  )}
                  <Navbar.Brand className="colorNav">
                    <div>Logout</div>
                  </Navbar.Brand>
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
