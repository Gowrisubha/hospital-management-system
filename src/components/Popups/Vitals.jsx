import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function VitalsPopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} class="flex items-center justify-center rounded-3xl shadow-md w-32 py-2 app-button-shadow">
                                    <svg class="w-6 h-6 app-color-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
                                    <span class="ml-3 font-semibold text-md app-color-gray-1">Vitals</span>
                                </button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Your Vitals</Modal.Title>
        </Modal.Header>
        <Modal.Body>BP : 140mg/dL</Modal.Body>
        <Modal.Body>Sugar : 200mg/dL</Modal.Body>
        <Modal.Body>Temperature : 99F</Modal.Body>
        <Modal.Body>Allergies: NIL</Modal.Body>
    
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

export default VitalsPopup;