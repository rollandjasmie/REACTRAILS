import React, {useState} from 'react';


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Field, Form } from 'formik';
import IncrementeComponent from './IncrementeComponent';
import '../../App.css';



  function Chambres(props) {

    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const  [ lgshowautre, setlgshowautre] = useState(false);
    let [Che, setCH] = useState(
    );
    
    
    const next =()=>{
      props.nextStep();
    }
    const io =() => {
      setSmShow(false)
    }
  
    return (
      <>

        <h1 className="text-2ml font-bold  mx-5 my-5 ">Informations sur l’hébergement :</h1>
          <div className="w-1/3 mx-5 flow-root on inline-block element mt-5 pl-10 ml-9 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-10   ">
              <Button className="my-4 block text-gray-700 text-center bg-white hover:text-blue-500 border-none focus:text-blue-500 border-none " onClick={() => setSmShow(true)} >
                 <span className="plus font-bold text-2xl">+</span><span className="mx-3">Chambre 1</span></Button>
              <Button className="my-4 block text-gray-700 text-center bg-white hover:text-blue-500 border-none focus:text-blue-500 border-none" onClick={() => setLgShow(true)} >
              <span className="plus font-bold text-2xl">+</span><span className="mx-3">Salon</span> </Button>
              <Button className="my-4 block text-gray-700 text-center bg-white hover:text-blue-500 border-none focus:text-blue-500 border-none" onClick={() => setlgshowautre(true)} >
              <span className="plus font-bold text-2xl">+</span><span className="mx-3">Autres espaces</span> </Button>
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
                <Button onClick={io} type="submit">Enregistré</Button>
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
                <div className="w-full">
                <label className="flex">
                <div className="w-1/2">
                  <Field type="checkbox" className="mr-2" name="canape" value="Canapé"/>
                  Canapé
                  </div>
                  <span className="">
                <IncrementeComponent />

                </span>
                </label>
                <label className="flex">
                <div className="w-1/2">
                  <Field type="checkbox" className="mr-2" name="canape" value="Canapé lits"/>
                  Canapé lits
                  </div>
                  <span className="">
                <IncrementeComponent />

                </span>
                </label>
                </div>
               <Button onClick={io} type="submit">Enregistré</Button>

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
                    <div className="w-full">
                    <label className="flex">
                    <div className="w-1/2">
                      <Field type="checkbox" className="mr-2" name="autrelits" value="lits double"/>
                      lits double
                      </div>
                      <span className="">
                       <IncrementeComponent />

                      </span>
                    </label>
                    <label className="flex">
                    <div className="w-1/2">
                      <Field type="checkbox" className="mr-2" name="autrelits" value="lits Simples"/>
                      lits simples
                      </div>
                      <span className="">
                      <IncrementeComponent />

                      </span>
                    </label>
                    <label className="flex">
                    <div className="w-1/2">
                      <Field type="checkbox" className="mr-2" name="autrelits" value="lits King size" />
                      lits King size
                      </div>
                      <span className="">
                      <IncrementeComponent />

                      </span>
                    </label>
                    <label className="flex">
                    <div className="w-1/2">
                      <Field type="checkbox" className="mr-2" name="autrelits" value="Grand lits King size" />
                      Grand lits King size
                      </div>
                      <span className="">
                      <IncrementeComponent />

                      </span>
                    </label >
                    <label className="flex">
                    <div className="w-1/2">
                      <Field type="checkbox" className="mr-2" name="autrelits"  value="lits superposé"/>
                      autrelits superposé
                      </div>
                      <span className="">
                      <IncrementeComponent />

                      </span>
                    </label>
                    <label className="flex">
                    <div className="w-1/2">
                      <Field type="checkbox" className="mr-2" name="autrelits"  value="Canapé lits"/>
                      Canapé lits
                      </div>
                      <span className="">
                      <IncrementeComponent />

                      </span>
                    </label>
                    <label className="flex">
                    <div className="w-1/2">
                      <Field type="checkbox" className="mr-2" name="autrelits"  value="Canpé lits double"/>
                      Canapé lits double
                      </div>
                      <span className="">
                      <IncrementeComponent />

                      </span>
                    </label>
                    <label className="flex">
                    <div className="w-1/2">
                      <Field type="checkbox" className="mr-2" name="autrelits" value="Futon" />
                      Futon
                      </div>
                      <span className="">
                      <IncrementeComponent />

                      </span>
                    </label>
                  
                    </div> 
                    <Button onClick={io} type="submit">Enregistré</Button>
                  </Form>
              </Modal.Body>
               )}
          </Formik>
        </Modal>
      </>
    ); 
  }

export default Chambres;




