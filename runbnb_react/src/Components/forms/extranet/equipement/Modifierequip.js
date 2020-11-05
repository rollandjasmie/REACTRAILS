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
    
        const [showcourant, setShowcourant] = useState(false);
        const [showsupp, setShowsupp] = useState(false);
        const [showfamille, setShowfamille] = useState(false);
        const [showlogistique, setShowlogistique] = useState(false);
        const handleClosecourant = () => setShowcourant(false);
        const handleShowcourant= () => setShowcourant(true);
        const handleClosesupp = () => setShowsupp(false);
        const handleShowsupp= () => setShowsupp(true);
        const handleClosefamille = () => setShowfamille(false);
        const handleShowfamille = () => setShowfamille(true);
        const handleCloselogistique = () => setShowlogistique(false);
        const handleShowlogistique = () => setShowlogistique(true);
      return(
        <Formik>
            <>
            <div className="">
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
        
            <div className="w-full px-5 ">
              <div className="">
               <h1 className="w-2/3 text-xl font-bold text-gray-700">Equipements :</h1>
                <h2 className=" text-sm font-medium text-gray-600 py-4" onClick={handleShowcourant} >+ Equipements courants</h2>
         
                <h5 className=" text-sm font-medium text-gray-600 py-4" onClick={handleShowlogistique} >+ Logistiques</h5>
                <div className="py-5">
                                <div className="w-full flex px-5">
                                    <label className="w-3/4 flex">
                                        <input type="checkbox" className=" mr-3"></input>
                                        Chambre
                                    </label>
                                    <IncrementeComponent/>
                                </div>
                               
                         </div>  
             
              </div>
            
            </div>
            {/* piece et esace */}
         
         
          </> 
        </Formik>
      )
    }


export default Modifierpiece;
