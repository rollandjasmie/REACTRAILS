import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';






class Affichage extends React.Component{
    render(){
      return(
        <Formik>
            <div className="w-full bg-white">
              <div className="flex">
               <h1 className="w-2/3 text-xl font-bold text-gray-700">Photos</h1>
               <h2 className="text-orange-500 border-2 border-orange-500 rounded px-4 py-2 hover:bg-orange-500 hover:text-white">Modifier</h2>
              </div>
              <div className="py-5"> 
              <img  className="w-64 " src="./images/villa.jpg"></img>
              </div>
          </div>  
        </Formik>
      )
    }
  }

export default Affichage;
