import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form'

import 'bootstrap/dist/css/bootstrap.min.css';

function EntryForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value
    };

    const JSONdata = JSON.stringify(data);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSONdata
    };

    const response = await fetch('/api/form', options);
    const result = await response.json();

    alert(`${result.data}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control 
          type="text" 
          id="firstName"
          name="firstName" 
          placeholder="First Name" 
          required 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control 
          type="text" 
          id="lastName"
          name="lastName"
          placeholder="Last Name" 
          required 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email Address</Form.Label>
        <Form.Control 
          type="email" 
          id="email"
          name="email"
          placeholder="Enter email" 
          required 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="entryFormFile">
        <Form.Label>Upload Image</Form.Label>
        <Form.Control 
          type="file" 
          id="file"
          name="file"
          accept=".jpg, .jpeg, .png"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

function FormDrawer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='primary' onClick={handleShow} className='me-2'>
        Enter Now
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Entry Form</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <EntryForm />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <FormDrawer />
        </Col>
      </Row>
    </Container>
  )
}
