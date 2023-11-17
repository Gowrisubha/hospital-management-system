import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ResourcePopup.css'

function ResourcePopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} class="app-color-black-1 font-semibold text-md app-button-shadow w-40 py-2 rounded-3xl mr-5">Resource Person</button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Resource Person</Modal.Title>
        </Modal.Header>
        <Modal.Body><img  className="circular-image"
        src="https://img.freepik.com/free-photo/young-lady-looking-pointing-copy-space_171337-5771.jpg?w=740&t=st=1692160511~exp=1692161111~hmac=156951311f6d3efb556355e9a6a3a936a8b4bef10120a9d5e24605544c655b2e"
         alt="nurse"/></Modal.Body>
        <Modal.Body>Name: Lara Jean</Modal.Body>
        <Modal.Body>Nurse Id: 12290</Modal.Body>
        <Modal.Body>Experience: 5 years</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ResourcePopup;