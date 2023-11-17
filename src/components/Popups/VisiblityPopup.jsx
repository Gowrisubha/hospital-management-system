import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './VisiblityPopup.css'

function VisiblityPopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} class="flex items-center justify-center app-button-shadow w-32 py-2 rounded-3xl">
                                    <svg class="w-6 h-6 app-color-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
                                    <span class="ml-3 font-semibold text-md app-color-black-1">Vitals</span>
                                </button> 

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><img  className="visiblity-image" src="https://img.icons8.com/?size=512&id=96151&format=png"alt="Not visible" height={200} width={100}/></Modal.Title>
        </Modal.Header>
        <Modal.Body>
You don't have the access to view this. Contact the administrator for further issues</Modal.Body>
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

export default VisiblityPopup;