import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Field, Form } from 'formik';




  function Chambres() {

    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const  [ lgshowautre, setlgshowautre] = useState(false);
  
    return (
      <>

<div className="container col-4 flow-root on inline-block element mt-5 pl-10 ml-9 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-10   ">
        <Button className="my-4 block text-gray-700 text-center bg-gray-500 " onClick={() => setSmShow(true)} >Chambre 1</Button>
        <Button className="my-4 block text-gray-700 text-center bg-gray-500 " onClick={() => setLgShow(true)} > Salon</Button>
        <Button className="my-4 block text-gray-700 text-center bg-gray-500 " onClick={() => setlgshowautre(true)} > Autres espaces</Button>
  </div>

  

  
        <Modal
          size=".w auto"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >           
          <Formik
            initialValues={{ 
              lits: '',
            }}
          >
          <Modal.Body>





            <Form>
              <div className="col-5">
              <Field type="checkbox" className="mr-2"name="lits" value="Lits double"/>

              <label>
                Lits double
              </label>


              <label>
                <Field type="checkbox" name="lits" value="Lits Simples"/>
                Lits simples
              </label>
              <label>
                <Field type="checkbox" name="lits" value="Lits King size" />
                Lits King size
              </label>
              <label>
                <Field type="checkbox" name="lits" value="Grand lits King size" />
                Grand lits King size
              </label>
              <label>
                <Field type="checkbox" name="lits"  value="Lits Lits superposé"/>
                Lits superposé
              </label>
              <label>
                <Field type="checkbox" name="lits"  value="Canapé lits"/>
                Canapé lits
              </label>
              <label>
                <Field type="checkbox" name="lits"  value="Canpé lits double"/>
                Canapé lits double
              </label>
              <label>
                <Field type="checkbox" name="lits" value="Futon" />
                Futon
              </label>
              </div> 
            </Form>


            .</Modal.Body>
          </Formik>
        </Modal>
          
        <Modal
          size=".w auto"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Formik
            initialValues={{ 
              canape: '',
            }}
          >
          <Modal.Body>.
          <Form>
              <div className="col-4">
              <label>
                <Field type="checkbox" name="canape" value="Canapé"/>
                Canapé
              </label>
              <label>
                <Field type="checkbox" name="canape" value="Canapé lits"/>
                Canapé lits
              </label>
              </div>
            </Form>
          </Modal.Body>
          </Formik>
        </Modal>

        <Modal
          size=".w auto"
          show={lgshowautre}
          onHide={() => setlgshowautre(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
            <Formik
            initialValues={{ 
              autrelits: '',
            }}
          >
          <Modal.Body>.
          <Form>
              <div className="col-5">
              <label>
                <Field type="checkbox" name="autrelits" value="lits double"/>
                lits double
              </label>
              <label>
                <Field type="checkbox" name="autrelits" value="lits Simples"/>
                lits simples
              </label>
              <label>
                <Field type="checkbox" name="autrelits" value="lits King size" />
                lits King size
              </label>
              <label>
                <Field type="checkbox" name="autrelits" value="Grand lits King size" />
                Grand lits King size
              </label>
              <label>
                <Field type="checkbox" name="autrelits"  value="lits superposé"/>
                autrelits superposé
              </label>
              <label>
                <Field type="checkbox" name="autrelits"  value="Canapé lits"/>
                Canapé lits
              </label>
              <label>
                <Field type="checkbox" name="autrelits"  value="Canpé lits double"/>
                Canapé lits double
              </label>
              <label>
                <Field type="checkbox" name="autrelits" value="Futon" />
                Futon
              </label>
              </div> 
            </Form>
          </Modal.Body>
          </Formik>
        </Modal>
    
      </>
    ); 
}

export default Chambres;




