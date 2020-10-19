import React, {useState} from 'react';


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Field, Form } from 'formik';
import IncrementeComponent from './IncrementeComponent';




  function Chambres() {

    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const  [ lgshowautre, setlgshowautre] = useState(false);
  
    return (
      <>

<div className="container col-4 flow-root on inline-block element mt-5 pl-10 ml-9 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-10   ">
        <Button className="bg-grey hover:bg-grey-dark font-bold py-2 px-4 rounded ml-4 shadow" onClick={() => setSmShow(true)} >Chambre 1</Button>
        <Button className="bg-grey hover:bg-grey-dark font-bold py-2 px-4 rounded ml-4 shadow " onClick={() => setLgShow(true)} > Salon</Button>
        <Button className="bg-grey hover:bg-grey-dark font-bold py-2 px-4 rounded ml-4 shadow" onClick={() => setlgshowautre(true)} > Autres espaces</Button>
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
              <div className="w-full ">
              <label>

              <Field type="checkbox" className="mr-2"name="lits" value="Lits double"/>
                Lits double 1
                <span className="">
                <IncrementeComponent />

                </span>
            
              </label>

              <label>
                <Field type="checkbox"className="mr-2" name="lits" value="Lits Simples"/>
                Lits simples
                <span className="">
                <IncrementeComponent />

                </span>
              </label>
              <label>
                <Field type="checkbox"className="mr-2" name="lits" value="Lits King size" />
                Lits King size
                <span className="">
                <IncrementeComponent />

                </span>
              </label>
              <label>
                <Field type="checkbox" className="mr-2"name="lits" value="Grand lits King size" />
                Grand lits King size
                <span className="">
                <IncrementeComponent />

                </span>
              </label>
              <label>
                <Field type="checkbox" className="mr-2"name="lits"  value="Lits Lits superposé"/>
                Lits superposé
                <span className="">
                <IncrementeComponent />

                </span>
              </label>
              <label>
                <Field type="checkbox"className="mr-2" name="lits"  value="Canapé lits"/>
                Canapé lits
                <span className="">
                <IncrementeComponent />

                </span>
              </label>
              <label>
                <Field type="checkbox" className="mr-2"name="lits"  value="Canpé lits double"/>
                Canapé lits double
                <span className="">
                <IncrementeComponent />

                </span>
              </label>
              <label>
                <Field type="checkbox" className="mr-2"name="lits" value="Futon" />
                Futon
                <span className="">
                <IncrementeComponent />

                </span>
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
                <Field type="checkbox"className="mr-2" name="canape" value="Canapé"/>
                Canapé
              </label>
              <label>
                <Field type="checkbox"className="mr-2" name="canape" value="Canapé lits"/>
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
                <Field type="checkbox" className="mr-2" name="autrelits" value="lits double"/>
                lits double
              </label>
              <label>
                <Field type="checkbox"className="mr-2" name="autrelits" value="lits Simples"/>
                lits simples
              </label>
              <label>
                <Field type="checkbox" className="mr-2"name="autrelits" value="lits King size" />
                lits King size
              </label>
              <label>
                <Field type="checkbox" className="mr-2" name="autrelits" value="Grand lits King size" />
                Grand lits King size
              </label>
              <label>
                <Field type="checkbox" className="mr-2" name="autrelits"  value="lits superposé"/>
                autrelits superposé
              </label>
              <label>
                <Field type="checkbox" className="mr-2"name="autrelits"  value="Canapé lits"/>
                Canapé lits
              </label>
              <label>
                <Field type="checkbox" className="mr-2"name="autrelits"  value="Canpé lits double"/>
                Canapé lits double
              </label>
              <label>
                <Field type="checkbox" className="mr-2"name="autrelits" value="Futon" />
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




