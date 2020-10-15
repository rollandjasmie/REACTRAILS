import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';




  function Chambres() {

    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
  
    return (
      <>

<div class="box-content h-20 w-32 p-4 border-4 border-gray-400 bg-gray-200 mr-10">

  <Button onClick={() => setSmShow(true)} >Small modal</Button><br></br>
        <Button onClick={() => setLgShow(true)} >Large modal</Button>
  
  </div>
    
        <Modal
          size="lg"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Small Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>...</Modal.Body>
        </Modal>
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Large Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>...</Modal.Body>
        </Modal>
    
      </>
    );
}

export default Chambres;




