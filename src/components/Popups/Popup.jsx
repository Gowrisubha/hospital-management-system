import { useState } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './Popup.css'
import ChatIcon from '@mui/icons-material/Chat';
import { Chat } from 'react-bootstrap-icons';

function Popup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Link to={'/appointment'}> <button onClick={handleShow} class="app-color-black-1 font-semibold text-md app-button-shadow w-40 py-2 rounded-3xl mr-5" > Add Appointment</button></Link>
    <Link to={'/feedback'}> <button onClick={handleShow} class="app-color-black-1 font-semibold text-md app-button-shadow w-40 py-2 rounded-3xl mr-5" > Give Feedback</button></Link> 
   
   <Link to={'/chat'}> <button onClick={handleShow} class="app-color-black-1 font-semibold text-md app-button-shadow w-40 py-2 rounded-3xl mr-5" ><ChatIcon ></ChatIcon> </button></Link> 
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Type your name"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}

export default Popup;