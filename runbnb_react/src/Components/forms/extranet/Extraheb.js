import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';

import '../HomePage.css';
import Navbarextra from '../Navbar/Navbarextra';
import Navbarextra2 from '../Navbar/Navbarextra2';
import { NavLink } from 'react-router-dom';
import Affichage from './photo/Affichage';
import AffichagePiece from './pieces/AffichagePiece';
import Affichageequip from './equipement/Affichageequip';



class Extraheb extends React.Component{
    render(){
      return(
        <Formik>
            <div className="w-full bg-white">
              <div className="h-24">
                <Navbarextra/>
                </div> 
               <div>
               <Navbarextra2/>
                 </div>     
                  
             <div className="my-5 py-5 px-5 flex">
                  <div className=" py-2">
                      <h1 className="text-2xl text-gray-700"><span className="font-bold">La Villa Nath - Saint Gilles Les Bains </span>6388771</h1>
                  </div>
                  <div className="mx-5">
                    <label className="border-2 rounded px-3 py-2 border-orange-500 text-orange-500 hover:text-white
                    hover:bg-orange-500 hover:font-bold ">
                      Prévisualiser l'annonce
                    </label>
                    <label className="border-2 rounded px-3 py-2 border-orange-500 text-orange-500 hover:text-white
                    hover:bg-orange-500 hover:font-bold mx-4">
                      Voir le calendrier
                    </label>
                  </div>
             </div>
            <div className=" my-5">
                <div className="mx-4 flex w-5/6 h-10   ">
                  <label className="mx-4  h-10 text-sm text-orange-500 font-bold border-b-4 border-orange-500 ">
                      Déails de l'annonce
                  </label>
                  <label className="mx-4  h-10 text-sm text-gray-500 ">
                      Paramètre de réservation
                  </label>
                  <label className="mx-4  h-10 text-sm text-gray-500 ">
                      Frais complémentaire
                  </label>
                  <label className="mx-4  h-10 text-sm text-gray-500 ">
                      Taxe de séjour locale
                  </label>
                  <label className="mx-3  h-10 text-sm text-gray-500 ">
                      Co-géstionnaire
                  </label>                      
                </div> 
                <div className="w-4/6 ">
                  <hr className="w-full mx-5"></hr>
                </div>
             </div>


              {/* CONTENUE */}

              <div className="py-5 px-5  ">
                <Affichage/>
              </div>

              <div className="px-5  ">
                <AffichagePiece/>
              </div>
              
              <div className="px-5  ">
                <Affichageequip/>
              </div>
          </div>  
        </Formik>
      )
    }
  }

export default Extraheb;
