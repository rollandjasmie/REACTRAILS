import React, {useState} from 'react';


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Field, Form } from 'formik';
import IncrementeComponent from './IncrementeComponent';




  function Chambres(props) {

    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const  [ lgshowautre, setlgshowautre] = useState(false);
    let [Che, setCH] = useState(
    );
    
    
    const next =()=>{
      props.nextStep();
    }
  
    return (
      <>


          <div className="container col-4 flow-root on inline-block element mt-5 pl-10 ml-9 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-10   ">
              <Button className="my-4 block text-gray-700 text-center bg-gray-500 " onClick={() => setSmShow(true)} >Chambre 1</Button>
              <Button className="my-4 block text-gray-700 text-center bg-gray-500 " onClick={() => setLgShow(true)} > Salon</Button>
              <Button className="my-4 block text-gray-700 text-center bg-gray-500 " onClick={() => setlgshowautre(true)} > Autres espaces</Button>
               <div className="flex items-end justify-end">

              <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-1" onClick={props.previousStep}>Précedent</button>
              <button  class="bg-orange-500 hover:bg-orange-700 text-white pl-6 pr-6 font-bold py-2 px-4 rounded" onClick={next}>Suivant</button>
            </div>
      
          </div>

  

  
        <Modal
            size=".w auto"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >           
            <Formik
            initialValues={props.formValue.lits}
            onSubmit={values => {
               let { formValue, setFormValue } = props;
              formValue = {...formValue, lits: values};
              setFormValue(formValue);
              console.log(formValue);
              setSmShow(false)

            }}
            >
              {({ values,checked, handleSubmit, touched, setFieldValue }) => (
            <Modal.Body>
              <div>
              
              <Form onSubmit={handleSubmit}>
               <div className="w-full ">
              <label className="flex">
                <div className="w-1/2">

              <Field type="checkbox" className="mr-2"name="lits" value="Lits double"/>
                Lits double 
                </div>
                <span className="">
                <IncrementeComponent />

                </span>
            
              </label>

              <label className="flex">
              <div className="w-1/2">
                <Field type="checkbox"className="mr-2" name="lits" value="Lits Simples"/>
                Lits simples
                </div>  
                <span className="">
                <IncrementeComponent />

                </span>
              </label>
              <label className="flex">
              <div className="w-1/2">
                <Field type="checkbox"className="mr-2" name="lits" value="Lits King size" />
                Lits King size
                </div>  
                <span className="">
                <IncrementeComponent />

                </span>
              </label>
              <label className="flex">
              <div className="w-1/2">
                <Field type="checkbox" className="mr-2"name="lits" value="Grand lits King size" />
                Grand lits King size
                </div>  
                <span className="">
                <IncrementeComponent />

                </span>
              </label>
              <label className="flex">
              <div className="w-1/2">
                <Field type="checkbox" className="mr-2"name="lits"  value="Lits Lits superposé"/>
                Lits superposé
                </div>  
                <span className="">
                <IncrementeComponent />

                </span>
              </label>
              <label className="flex">
              <div className="w-1/2">
                <Field type="checkbox"className="mr-2" name="lits"  value="Canapé lits"/>
                Canapé lits
                </div>  
                <span className="">
                <IncrementeComponent />

                </span>
              </label>
              <label className="flex">
              <div className="w-1/2">
                <Field type="checkbox" className="mr-2"name="lits"  value="Canpé lits double"/>
                Canapé lits double
                </div>  
                <span className="">
                <IncrementeComponent />

                </span>
              </label>
              <label className="flex">
              <div className="w-1/2">
                <Field type="checkbox" className="mr-2"name="lits" value="Futon" />
                Futon
              </div>  
                <span className="">
                <IncrementeComponent />

                </span>
              </label>
              </div> 
                <Button type="submit">Enregistré</Button>
              </Form>
              </div>
            </Modal.Body>
            ) }
            </Formik>
          </Modal>
          
        <Modal
            size=".w auto"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
          <Formik
            initialValues={props.formValue.canapes}
            onSubmit={values => {
               let { formValue, setFormValue } = props;
              formValue = {...formValue, canapes: values};
              setFormValue(formValue);
              console.log(formValue);
              setLgShow(false)
            }}
            >
               {({ values,checked, handleSubmit, touched, setFieldValue }) => (
            <Modal.Body>.
              <Form  onSubmit={handleSubmit}>
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
               <Button type="submit">Enregistré</Button>

              </Form>
            </Modal.Body>
               )}
          </Formik>
        </Modal>

        <Modal
          size=".w auto"
            show={lgshowautre}
            onHide={() => setlgshowautre(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
          <Formik
            initialValues={props.formValue.autres}
            onSubmit={values => {
               let { formValue, setFormValue } = props;
              formValue = {...formValue, autres: values};
              setFormValue(formValue);
              console.log(formValue);
              setlgshowautre(false)
            }}
            >
               {({ values,checked, handleSubmit, touched, setFieldValue }) => (
              <Modal.Body>.
                <Form onSubmit={handleSubmit} >
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
                    <Button type="submit">Enregistré</Button>
                  </Form>
              </Modal.Body>
               )}
          </Formik>
        </Modal>
      </>
    ); 
  }

export default Chambres;




