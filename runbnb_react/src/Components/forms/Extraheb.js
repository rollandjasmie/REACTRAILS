import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';

import './HomePage.css';
import Navbarextra from './Navbar/Navbaruser';
import { NavLink } from 'react-router-dom';



class Details extends React.Component{
    render(){
      return(
        <Formik>
            <div className="w-full bg-white">
                <Navbarextra/>
               
                
              
                        <h1 className="tracking-wide text-gray-700 mx-3 text-lg font-bold my-3"> > Détails de l'hébergement</h1>
                  
                
          </div>  
        </Formik>
      )
    }
  }

export default Details;
