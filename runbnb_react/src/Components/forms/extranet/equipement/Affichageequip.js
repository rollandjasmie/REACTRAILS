import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { NavLink } from 'react-router-dom';





class Affichageequip extends React.Component{
    render(){
      return(
        <Formik>
            <div className="w-full bg-white">
              <div className="flex">
               <h1 className="w-2/3 text-xl font-bold text-gray-700">Equipements</h1>
               <NavLink to="/modifierequip">
               <h2 className="text-orange-500 border-2 border-orange-500 rounded px-4 py-2 hover:bg-orange-500 hover:text-white">Modifier</h2>
               </NavLink>
              </div>
              <div className="py-4 flex mx-5"> 
                  <div className="w-1/3 py-1">
                    <h1 className=" text-gray-600 font-bold text-sm">Equipement de base</h1>
                    <h2 className="my-3 text-gray-600 text-sm">cuisine</h2>
                    
                  </ div>
                   <div className="">
                    <h1 className="py-2 text-gray-600 text-sm">Climatisation</h1>
                    <h2 className="py-2 text-gray-600 text-sm">Sèche-cheveux</h2>
                  
                  </div>
              </div>
          </div>  
        </Formik>
      )
    }
  }

export default Affichageequip;
