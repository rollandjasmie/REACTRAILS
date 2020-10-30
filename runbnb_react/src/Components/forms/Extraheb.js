import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';

import './HomePage.css';
import Navbarextra from './Navbar/Navbarextra';
import { NavLink } from 'react-router-dom';



class Details extends React.Component{
    render(){
      return(
        <Formik>
            <div className="w-full bg-white">
              <div className="h-24">
                <Navbarextra/>
                </div> 
                 <div className="flex w-full h-16 bg-blue-500">
                    <div className="navex h-full w-1/2 flex justify-center">
                        <h1 className="text-md text-white pt-4 ">Accueil</h1>
                    </div>
                    <div className="navex h-full w-1/2 flex justify-center">
                        <h1 className="text-md text-white pt-4 ">Tarif et calendrier</h1>
                    </div>
                    <div className="navex h-full w-1/2 flex justify-center">
                        <h1 className="text-md text-white pt-4 ">Promotions</h1>
                    </div>
                    <div className="navex h-full w-1/2 flex justify-center">
                        <h1 className="text-md text-white pt-4 ">Réservation</h1>
                    </div>
                    <div className="navex h-full w-1/2 flex justify-center">
                        <h1 className="text-md text-white pt-4 ">Hébergement</h1>
                    </div>
                    <div className="navex h-full w-1/2 flex justify-center">
                        <h1 className="text-md text-white pt-4 ">Boite de réception</h1>
                    </div>
                    <div className="navex h-full w-1/2 flex justify-center">
                        <h1 className="text-md text-white pt-4 ">Comptabilité</h1>
                    </div>
                    <div className="navex h-full w-1/2 flex justify-center">
                        <h1 className="text-md text-white text-center pt-4 ">Commentaire  clients</h1>
                    </div>
                   
                 </div>       
                  
                
          </div>  
        </Formik>
      )
    }
  }

export default Details;
