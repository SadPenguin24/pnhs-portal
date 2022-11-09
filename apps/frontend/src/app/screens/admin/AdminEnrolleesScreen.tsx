import React, { useState } from 'react';
import {
  Button,
  Container,
  Form,
  FormControl,
  Spinner,
  Table,
  Row,
  Col,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Header from '../../components/header/Header';
import '../../components/tables/tables.scss';
import { useCreateEnrolleeMutation } from '../../redux/api/enrolleeApi';

function AdminEnrolleesScreen() {
  const [isSuccess, setIsSuccess] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const [first_name, setFirstName] = useState('');
  const [middle_name, setMiddleName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [birth_certificate, setBirthCertificate] = useState('');
  const [picture_2x2, setPicture] = useState('');
  const [grade_10_card, setGradeTenCard] = useState('');
  const [lrn, setLrn] = useState('');
  const [good_moral, setGoodMoral] = useState('');
  const [strand, setStrand] = useState('');
  const [password, setPassword] = useState('');
  const [c_password, setConfirmPassword] = useState('');

  const [createEnrollee] = useCreateEnrolleeMutation();

  const createHandler = () => {
    setIsSuccess(false);
    setIsCreating(true);
  };

  const createEnrolleeHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const { enrollee } = await createEnrollee({
      first_name,
      middle_name,
      last_name,
      email,
      address,
      phone_number,
      birth_certificate,
      picture_2x2,
      grade_10_card,
      lrn,
      good_moral,
      strand,
      password,
      c_password,
    }).unwrap();
  };

  const exitHandler = () => {
    setIsCreating(false);
    setIsSuccess(true);

    setFirstName('');
    setMiddleName('');
    setLastName('');
    setEmail('');
    setAddress('');
    setPhoneNumber('');
    setBirthCertificate('');
    setPicture('');
    setGradeTenCard('');
    setLrn('');
    setGoodMoral('');
    setStrand('');
    setPassword('');
    setConfirmPassword('');
  };

  let content;

  if (isLoading) {
    content = (
      <div className="text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  } else if (isSuccess) {
    content = (
      <>
        <div className="d-flex mb-3">
          <div className="w-50 me-3">
            <FormControl
              style={{ backgroundColor: '#ffe4a0', border: '#eaaa79 solid' }}
              placeholder="Grade/Section"
            ></FormControl>
          </div>
          <Button>Search</Button>
        </div>
        <Table bordered className="tableColor mb-3">
          <thead style={{ backgroundColor: '#2a6fd6' }}>
            <tr className="text-center">
              <th>Name</th>
              <th>Grade Level</th>
              <th>Section</th>
              <th>Adviser</th>
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
        <div className="text-center">
          <LinkContainer to="/admin/subject">
            <Button className="me-3">View Subject</Button>
          </LinkContainer>
          <Button className="me-3" onClick={createHandler}>
            Create Enrollee
          </Button>
          <Button variant="danger">Exit</Button>
        </div>
      </>
    );
  } else if (isError) {
    content = <p>{JSON.stringify(Error)}</p>;
  } else if (isCreating) {
    content = (
      <Form onSubmit={createEnrolleeHandler} className="my-3">
        <Form.Group as={Row} className="mb-2">
          <Form.Label column md={2}>
            First Name:
          </Form.Label>
          <Col md={10}>
            <Form.Control
              type="text"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-2">
          <Form.Label column md={2}>
            Middle Name:
          </Form.Label>
          <Col md={10}>
            <Form.Control
              type="text"
              value={middle_name}
              onChange={(e) => setMiddleName(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-2">
          <Form.Label column md={2}>
            Last Name:
          </Form.Label>
          <Col md={10}>
            <Form.Control
              type="text"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-2">
          <Form.Label column md={2}>
            Email:
          </Form.Label>
          <Col md={10}>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-2">
          <Form.Label column md={2}>
            Address:
          </Form.Label>
          <Col md={10}>
            <Form.Control
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-2">
          <Form.Label column md={2}>
            Phone Number:
          </Form.Label>
          <Col md={10}>
            <Form.Control
              type="text"
              value={phone_number}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-2">
          <Form.Label column md={2}>
            Birth Certificate:
          </Form.Label>
          <Col md={10}>
            <Form.Control
              type="text"
              value={birth_certificate}
              onChange={(e) => setBirthCertificate(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-2">
          <Form.Label column md={2}>
            Picture 2x2:
          </Form.Label>
          <Col md={10}>
            <Form.Control
              type="text"
              value={picture_2x2}
              onChange={(e) => setPicture(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-2">
          <Form.Label column md={2}>
            Grade 10 Card:
          </Form.Label>
          <Col md={10}>
            <Form.Control
              type="text"
              value={grade_10_card}
              onChange={(e) => setGradeTenCard(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-2">
          <Form.Label column md={2}>
            LRN:
          </Form.Label>
          <Col md={10}>
            <Form.Control
              type="text"
              value={lrn}
              onChange={(e) => setLrn(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-2">
          <Form.Label column md={2}>
            Good Moral:
          </Form.Label>
          <Col md={10}>
            <Form.Control
              type="text"
              value={good_moral}
              onChange={(e) => setGoodMoral(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-2">
          <Form.Label column md={2}>
            Strand:
          </Form.Label>
          <Col md={10}>
            <Form.Control
              type="text"
              value={strand}
              onChange={(e) => setStrand(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-2">
          <Form.Label column md={2}>
            Password:
          </Form.Label>
          <Col md={10}>
            <Form.Control
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-2">
          <Form.Label column md={2}>
            Confirm Password:
          </Form.Label>
          <Col md={10}>
            <Form.Control
              type="text"
              value={c_password}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Button type="submit" className="me-3">
          Create Enrollee
        </Button>
        <Button variant="danger" onClick={exitHandler}>
          Exit
        </Button>
      </Form>
    );
  }
  return (
    <div>
      <style>{'body { background-color: #dcf7b0; }'}</style>
      <Header page="Strand/Enrollees/Subject" redirect="/admin/strand" />
      <Container>{content}</Container>
    </div>
  );
}

export default AdminEnrolleesScreen;
