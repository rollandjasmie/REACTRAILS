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
      
    
      const io = () =>{
      setSmShow(false)

      }
      
        const handleChange = (row, index, setFieldValue, event) => {
          const isChecked = event.target.checked;
          setFieldValue(`${row}[${index}].checked`, isChecked);
        }
      
      
      const next =()=>{
        props.nextStep();
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
            
                  initialValues={{
                    Lits : [
                      {
                        checked: false,
                        quantite: 0,
                        name: "Lit Double"
                      },
                      {
                        checked: false,
                        quantite: 0,
                        name: "Lit Simple"
                      },
                      {
                        checked: false,
                        quantite: 0,
                        name: "Lit King-size"
                      },
                      {
                        checked: false,
                        quantite: 0,
                        name: "Lit Superposé"
                      },
                      {
                        checked: false,
                        quantite: 0,
                        name: "Canapé lit"
                      },
                      {
                        checked: false,
                        quantite: 0,
                        name:"Canapé lit double"
                      },
                      {
                        checked: false,
                        quantite: 0,
                        name: "Futon"
                      }

                    ]
                  }}    
                    onSubmit={values => {
                      // same shape as initial values
                      let { formValue, setFormValue } =props;

                      formValue = {...formValue, lits: values};

                      setFormValue(formValue);
                      console.log(formValue);
                      setSmShow(false)
              }}
              >
                {({ values,checked, handleSubmit, touched, setFieldValue }) => (
              <Modal.Body>
                <div>
                
                <Form>
              {Object.keys(values) &&
                Object.keys(values).map(value => {
                  return (
                    <>
                      {/* Titre selon la key(s) */}
                      {values[value].map((item, index) => {
                        return (
                          <>
                      <div className="w-full ">

                     
                          <label className="flex">

                              <div className="w-1/2">
                                {/* Titre de l'option .name */}
                             
                                <input className="mr-2"
                                   
                                  type="checkbox"
                                  onClick={event =>
                                    handleChange(value, index, setFieldValue, event)
                                  }
                               
                          
                               />
                                  {item.name} 
                              </div>

                              <span className="">
                                <IncrementeComponent
                                  onChange={quantity =>
                                    setFieldValue(
                                      `${value}[${index}].quantite`,
                                      quantity
                                    )
                                  }
                              />
                            </span>

                            </label>

                            </div>
           

                          </>
                        );
                      })}
                    </>
                  );
                })}
              <button  type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5">
              Sauvegarder</button>
            </Form>
       
                </div>
              </Modal.Body>
              ) }
              </Formik>
            </Modal>

            {/* modal salon */ }

            <Modal
              size=".w auto"
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >           
              <Formik
            
                  initialValues={{
                    canapes: [
                      {
                        checked: false,
                        quantite: 0,
                        name: " Canapés"
                      },
                      {
                        checked: false,
                        quantite: 0,
                        name: "Cnapés lits"
                      }
                     
                    ]
                  }}    
                    onSubmit={values => {
                      // same shape as initial values
                      let { formValue, setFormValue } =props;

                      formValue = {...formValue, canapes: values};

                      setFormValue(formValue);
                      console.log(formValue);
                      setLgShow(false)
              }}
              >
                {({ values,checked, handleSubmit, touched, setFieldValue }) => (
              <Modal.Body>
                <div>
                
                <Form>
              {Object.keys(values) &&
                Object.keys(values).map(value => {
                  return (
                    <>
                      {/* Titre selon la key(s) */}
                      {values[value].map((item, index) => {
                        return (
                          <>

                          <div className="w-full">                       

                                <label className="flex" >
                                      <div className="w-1/2">
                                        {/* Titre de l'option .name */}
                                   
                                        <input className="mr-2"
                                          type="checkbox"
                                          onClick={event =>
                                            handleChange(value, index, setFieldValue, event)
                                          }
                                        />
                                             {item.name} 
                                      </div>
                                      <span>
                                        <IncrementeComponent
                                          onChange={quantity =>
                                            setFieldValue(
                                              `${value}[${index}].quantite`,
                                              quantity
                                            )
                                          }
                                        />
                                      </span>
                                  </label>     

                          </div>
                          </>
                        );
                      })}
                    </>
                  );
                })}
              <button  type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5">
              Sauvegarder</button>
            </Form>

                </div>
              </Modal.Body>
              ) }
              </Formik>
            </Modal>

          {/* modal autrelits */ }




    
          <Modal
              size=".w auto"
              show={lgshowautre}
              onHide={() => setlgshowautre(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >           
              <Formik
            
                  initialValues={{
                    autres: [
                      {
                        checked: false,
                        quantite: 0,
                        name: "Lit Simple"
                      },
                      {
                        checked: false,
                        quantite: 0,
                        name: "Lit Double"
                      },
                      {
                        checked: false,
                        quantite: 0,
                        name: "Lit Famille"
                      }
                    ]
                  }}    
                    onSubmit={values => {
                      // same shape as initial values
                      let { formValue, setFormValue } =props;

                      formValue = {...formValue, autres: values};

                      setFormValue(formValue);
                      console.log(formValue);
                      setlgshowautre(false)
              }}
              >
                {({ values,checked, handleSubmit, touched, setFieldValue }) => (
              <Modal.Body>
                <div>
                
                <Form>
              {Object.keys(values) &&
                Object.keys(values).map(value => {
                  return (
                    <>
                      {/* Titre selon la key(s) */}
                      {values[value].map((item, index) => {
                        return (
                          <>

                           <div className="w-full">

                             <label className="flex">
                                  <div className="w-1/2">
                                    {/* Titre de l'option .name */}
                              
                                    <input className="mr-2"
                                      type="checkbox"
                                      onClick={event =>
                                        handleChange(value, index, setFieldValue, event)
                                      }
                                    />
                                          {item.name} 
                                  </div>
                                  <span>
                                    <IncrementeComponent
                                      onChange={quantity =>
                                        setFieldValue(
                                          `${value}[${index}].quantite`,
                                          quantity
                                        )
                                      }
                                    />
                                  </span>
                            </label>  
                          </div>   
                          </>
                        );
                      })}
                    </>
                  );
                })}
               <button  type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5">
              Sauvegarder</button>
            </Form>
    
                </div>
              </Modal.Body>
              ) }
              </Formik>
            </Modal>

      </>
    ); 
  }


export default Chambres;




