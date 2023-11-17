import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom'

function DocPopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='captureButton' onClick={handleShow} style={{ backgroundColor: '#f9688d' ,  border: 'none'}}>
  CHECK!
</Button>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Doctor Attendance</Modal.Title>
        </Modal.Header>
        <Modal.Body>Welcome Dr. Subha. Have a good day</Modal.Body>
        <Modal.Footer>
          <Link to='/nursehome'>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Link>
          <Link to='/docattendance'>
  <Button variant="primary" onClick={handleClose} style={{ backgroundColor: '#f9688d',  border: 'none' }}>
    View attendance list
  </Button>
</Link>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DocPopup;