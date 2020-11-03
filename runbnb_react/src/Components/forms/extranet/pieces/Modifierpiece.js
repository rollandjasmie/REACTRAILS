import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import Navbarextra from '../../Navbar/Navbarextra'
import Navbarextra2 from '../../Navbar/Navbarextra2'
import { GoArrowSmallLeft } from 'react-icons/go';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import IncrementeComponent from '../../../Logements/IncrementeComponent';
import { NavLink } from 'react-router-dom';



function Modifierpiece(){
    
        const [showpiece, setShowpiece] = useState(false);
        const [showchambre1, setShowchambre1] = useState(false);
        const [showsalon, setShowsalon] = useState(false);
        const [showespace, setShowespace] = useState(false);
        const handleClosepiece = () => setShowpiece(false);
        const handleShowpiece= () => setShowpiece(true);
        const handleClosechambre1 = () => setShowchambre1(false);
        const handleShowchambre1 = () => setShowchambre1(true);
        const handleClosesalon = () => setShowsalon(false);
        const handleShowsalon = () => setShowsalon(true);
        const handleCloseespace = () => setShowespace(false);
        const handleShowespace = () => setShowespace(true);
      return(
        <Formik>
            <>
            <div className="h-24">
                <Navbarextra/>
            </div> 
            <div className="h-24">
                <Navbarextra2/>
            </div> 
            <NavLink to="/extraheb">
            <label className=" px-4 py-5 text-gray-600 text-sm text-blue-500 hover:text-blue-700 hover:font-bold flex "  >
                   <GoArrowSmallLeft className="w-10 h-10"/><span className="py-2 px-3 text-base"> Retour à la modification de la   Villa Nath - Saint Gilles Les Bains </span>
            </label>
            </NavLink> 
        
            <div className="w-full bg-white px-5 ">
              <div className="">
               <h1 className="w-2/3 text-xl font-bold text-gray-700">Pièces et espaces</h1>
                <h2 className=" text-sm font-medium text-gray-500 py-4" >Ajouter ou modifier les espaces à la disposition des voyageurs et indiquer quels sont les espaces partagés  </h2>
             
              </div>
            
            </div>
            {/* piece et esace */}
            <div className="w-4/6 mx-5 flow-root inline-block  mt-5 pl-10 ml-9 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-10   ">  
                <span className=" text-sm w-4/6" >Chambre (3) - Salle de bain entière (2) - Cuisine entière - Salon  </span>   
                
                
                <span className="w-2/6 mx-5 px-5  text-sm text-blue-500 hover:font-bold hover:text-blue-700 cursor-pointer"  onClick={handleShowpiece}> Modifier les pièces et les espaces </span>          
                    {/* modal */}

                        <Modal
                            size="lg"
                            show={showpiece}
                            onHide={handleClosepiece}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                            <Modal.Title >
                                <h1 className="text-base py-5">Quels espaces sont  à disposition des voyageurs ?</h1>
                                <h2 className="text-sm text-gray-600 font-normal ">Indiquez toutes les pièces que les voyageurs peuvent utiliser, même
                                les pièces partagées
                                </h2>
                            </Modal.Title>
                        
                            </Modal.Header>
                            <Modal.Body >
                                <div className="py-5">
                                <div className="w-full flex px-5">
                                    <label className="w-3/4">
                                        Chambre
                                    </label>
                                    <IncrementeComponent/>
                                </div>
                                <div className="w-full flex px-5 py-2">
                                    <label className="w-3/4">
                                    Salle de bain entière : Toilette, lavabo, douce et baignoire
                                    </label>
                                    <IncrementeComponent/>
                                </div>
                                <div className="w-full flex px-5 py-2">
                                    <label className="w-3/4">
                                    Demi-salle de bain : Toilette et lavabo
                                    </label>
                                    <IncrementeComponent/>
                                </div>
                                <div className="w-full flex px-5 py-2">
                                    <label className="w-3/4">
                                    Cuisine entière
                                    </label>
                                    <IncrementeComponent/>
                                </div>
                                <div className="w-full flex px-5 py-2">
                                    <label className="w-3/4">
                                    Kitchenette : un espace compact pour préparer à manger
                                    </label>
                                    <IncrementeComponent/>
                                </div>
                                <div className="w-full flex px-5 py-2">
                                    <label className="w-3/4">
                                 Salon
                                    </label>
                                    <IncrementeComponent/>
                                </div>
                                <div className="w-full flex px-5 py-2">
                                    <label className="w-3/4">
                                    Espace repas
                                    </label>
                                    <IncrementeComponent/>
                                </div>
                                </div>   
                            </Modal.Body>
                            <Modal.Footer>
                            {/* <Button variant="secondary" onClick={handleClose}>
                                fermer
                            </Button> */}
                            <Button className="bg-orange-500     text-white border-0 hover:bg-orange-500  hover:border-0 hover:font-bold "
                              onClick={handleClosepiece}>Enregistrer</Button>
                            </Modal.Footer>
                        </Modal>

                        <Modal
                            size="lg"
                            show={showchambre1}
                            onHide={handleClosechambre1}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                            <Modal.Title >
                                <h1 className="text-base py-5">Quels espaces sont  à disposition des voyageurs ?</h1>
                                <h2 className="text-sm text-gray-600 font-normal ">Indiquez toutes les pièces que les voyageurs peuvent utiliser, même
                                les pièces partagées
                                </h2>
                            </Modal.Title>
                        
                            </Modal.Header>
                            <Modal.Body >
                                <div className="py-5">
                                <div className="w-full flex px-5">
                                    <label className="w-3/4">
                                        Chambre
                                    </label>
                                    <IncrementeComponent/>
                                </div>
                                <div className="w-full flex px-5 py-2">
                                    <label className="w-3/4">
                                    Salle de bain entière : Toilette, lavabo, douce et baignoire
                                    </label>
                                    <IncrementeComponent/>
                                </div>
                                <div className="w-full flex px-5 py-2">
                                    <label className="w-3/4">
                                    Demi-salle de bain : Toilette et lavabo
                                    </label>
                                    <IncrementeComponent/>
                                </div>
                                <div className="w-full flex px-5 py-2">
                                    <label className="w-3/4">
                                    Cuisine entière
                                    </label>
                                    <IncrementeComponent/>
                                </div>
                                <div className="w-full flex px-5 py-2">
                                    <label className="w-3/4">
                                    Kitchenette : un espace compact pour préparer à manger
                                    </label>
                                    <IncrementeComponent/>
                                </div>
                                <div className="w-full flex px-5 py-2">
                                    <label className="w-3/4">
                                 Salon
                                    </label>
                                    <IncrementeComponent/>
                                </div>
                                <div className="w-full flex px-5 py-2">
                                    <label className="w-3/4">
                                    Espace repas
                                    </label>
                                    <IncrementeComponent/>
                                </div>
                                </div>   
                            </Modal.Body>
                            <Modal.Footer>
                            {/* <Button variant="secondary" onClick={handleClose}>
                                fermer
                            </Button> */}
                            <Button className="bg-orange-500     text-white border-0 hover:bg-orange-500  hover:border-0 hover:font-bold "
                              onClick={handleClosechambre1}>Enregistrer</Button>
                            </Modal.Footer>
                        </Modal>
                        <Modal
                            size="lg"
                            show={showsalon}
                            onHide={handleClosesalon}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                            <Modal.Title >
                                <h1 className="text-base py-5">Quels espaces sont  à disposition des voyageurs ?</h1>
                                <h2 className="text-sm text-gray-600 font-normal ">Indiquez toutes les pièces que les voyageurs peuvent utiliser, même
                                les pièces partagées
                                </h2>
                            </Modal.Title>
                        
                            </Modal.Header>
                            <Modal.Body >
                                <div className="py-5">
                                <div className="w-full flex px-5">
                                    <label className="w-3/4">
                                        Chambre
                                    </label>
                                    <IncrementeComponent/>
                                </div>
                                <div className="w-full flex px-5 py-2">
                                    <label className="w-3/4">
                                    Salle de bain entière : Toilette, lavabo, douce et baignoire
                                    </label>
                                    <IncrementeComponent/>
                                </div>
                                <div className="w-full flex px-5 py-2">
                                    <label className="w-3/4">
                                    Demi-salle de bain : Toilette et lavabo
                                    </label>
                                    <IncrementeComponent/>
                                </div>
                                <div className="w-full flex px-5 py-2">
                                    <label className="w-3/4">
                                    Cuisine entière
                                    </label>
                                    <IncrementeComponent/>
                                </div>
                                <div className="w-full flex px-5 py-2">
                                    <label className="w-3/4">
                                    Kitchenette : un espace compact pour préparer à manger
                                    </label>
                                    <IncrementeComponent/>
                                </div>
                                <div className="w-full flex px-5 py-2">
                                    <label className="w-3/4">
                                 Salon
                                    </label>
                                    <IncrementeComponent/>
                                </div>
                                <div className="w-full flex px-5 py-2">
                                    <label className="w-3/4">
                                    Espace repas
                                    </label>
                                    <IncrementeComponent/>
                                </div>
                                </div>   
                            </Modal.Body>
                            <Modal.Footer>
                            {/* <Button variant="secondary" onClick={handleClose}>
                                fermer
                            </Button> */}
                            <Button className="bg-orange-500     text-white border-0 hover:bg-orange-500  hover:border-0 hover:font-bold "
                              onClick={handleClosesalon}>Enregistrer</Button>
                            </Modal.Footer>
                        </Modal>
                        <Modal
                            size="lg"
                            show={showespace}
                            onHide={handleCloseespace}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                            <Modal.Title >
                                <h1 className="text-base py-5">Quels espaces sont  à disposition des voyageurs ?</h1>
                                <h2 className="text-sm text-gray-600 font-normal ">Indiquez toutes les pièces que les voyageurs peuvent utiliser, même
                                les pièces partagées
                                </h2>
                            </Modal.Title>
                        
                            </Modal.Header>
                            <Modal.Body >
                                <div className="py-5">
                                <div className="w-full flex px-5">
                                    <label className="w-3/4">
                                        Chambre
                                    </label>
                                    <IncrementeComponent/>
                                </div>
                                <div className="w-full flex px-5 py-2">
                                    <label className="w-3/4">
                                    Salle de bain entière : Toilette, lavabo, douce et baignoire
                                    </label>
                                    <IncrementeComponent/>
                                </div>
                                <div className="w-full flex px-5 py-2">
                                    <label className="w-3/4">
                                    Demi-salle de bain : Toilette et lavabo
                                    </label>
                                    <IncrementeComponent/>
                                </div>
                                <div className="w-full flex px-5 py-2">
                                    <label className="w-3/4">
                                    Cuisine entière
                                    </label>
                                    <IncrementeComponent/>
                                </div>
                                <div className="w-full flex px-5 py-2">
                                    <label className="w-3/4">
                                    Kitchenette : un espace compact pour préparer à manger
                                    </label>
                                    <IncrementeComponent/>
                                </div>
                                <div className="w-full flex px-5 py-2">
                                    <label className="w-3/4">
                                 Salon
                                    </label>
                                    <IncrementeComponent/>
                                </div>
                                <div className="w-full flex px-5 py-2">
                                    <label className="w-3/4">
                                    Espace repas
                                    </label>
                                    <IncrementeComponent/>
                                </div>
                                </div>   
                            </Modal.Body>
                            <Modal.Footer>
                            {/* <Button variant="secondary" onClick={handleClose}>
                                fermer
                            </Button> */}
                            <Button className="bg-orange-500     text-white border-0 hover:bg-orange-500  hover:border-0 hover:font-bold "
                              onClick={handleCloseespace}>Enregistrer</Button>
                            </Modal.Footer>
                        </Modal>
        
              </div>

            <div className="w-1/3 mx-5  mt-5 pl-10 ml-9 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-10   ">  
                 <label className="w-full hover:text-blue-500 hover:font-bold cursor-pointer" onClick={handleShowchambre1}>
                  <span className="plus font-bold text-2xl">+</span>
                  <span className="mx-3">Chambre 1</span>     <br></br>          
                  </label>
                  <label className="w-full hover:text-blue-500 hover:font-bold cursor-pointer" onClick={handleShowsalon}>
              <span className="plus font-bold text-2xl">+</span><span className="mx-3">Salon</span>  <br></br>                    
              </label>
              <label className="w-full hover:text-blue-500 hover:font-bold cursor-pointer" onClick={handleShowespace}>
              <span className="plus font-bold text-2xl">+</span><span className="mx-3">Autres espaces</span>  
              </label>            
            </div>
              
         
          </> 
        </Formik>
      )
    }


export default Modifierpiece;
