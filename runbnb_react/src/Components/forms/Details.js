import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';

import './HomePage.css';
import Navbaruser from './Navbar/Navbaruser';
import { NavLink } from 'react-router-dom';
import { BiCalendar } from "react-icons/bi";
import { BiMap } from "react-icons/bi";
import { BsHouseDoor } from "react-icons/bs";
import { CgCreditCard } from "react-icons/cg";


class Details extends React.Component{
    render(){
      return(
        <Formik>
            <div className="w-full bg-white">
                <Navbaruser/>
               
                
                <div className="flex justify-center py-5 px-5" >
                    <div className="block">
                        <h1 className="tracking-wide text-gray-700 mx-3 text-lg font-bold my-3"> > Détails de l'hébergement</h1>
                        <img className="rounded-xl " style={{ height: 320,width:500 }} 
                          src="./images/villa.jpg"></img>
                    </div>  
                    <div className="my-5">
                        
                          <label className="flex py-4 px-5">
                              <BsHouseDoor className="my-1" style={{width:25,height:25,}}/>
                              <h1 className="tracking-wide text-gray-700 mx-3 text-3xl font-bold">Villa zen</h1>
                              <label className="flex mx-5 px-5">
                              <CgCreditCard className="my-1" style={{width:25,height:25,}}/>
                                <h1 className="tracking-wide text-gray-700 mx-3 text-3xl font-bold ">100 €</h1>
                              </label>
                          </label> 
                          <label className="flex  px-5">
                              <BiMap style={{width:25,height:25,}}/>
                              <h2 className="py-1 mx-3">Saint Paul </h2>
                              </label>
                              <label className="flex py-4 px-5">
                              <BiCalendar style={{width:25,height:25,}}/>
                              <h3 className="py-1 mx-3">Du <span className="font-bold">12/10/20 </span>au <span className="font-bold">12/12/20 </span>  </h3>
                          </label> 
                    <div className ="px-5 py-5">
                    <NavLink to="/signin">
                      <button className="   px-5 py-3 border rounded-md hover:bg-blue-500 hover:text-white
                       text-blue-500 ">Réserver</button>
                    </NavLink>   
                    </div>
                    </div>

                </div>
                    
                <div className="px-5 text-center">
                    <h1 className="tracking-wide text-gray-700 mx-3 text-xl font-bold"><span className="uppercase">à </span>propos :</h1>
                    <div className=" flex justify-center">
                    <p className="tracking-wide text-gray-700 w-4/6 py-5 ">Non amet quis esse do ex cillum minim sunt id eu do sunt veniam ullamco. Do excepteur
                     culpa exercitation minim aliquip. Pariatur incididunt reprehenderit quis aute id. Esse minim tempor aute velit ad ullamco tempor ad in
                      consectetur. In laboris sunt elit sunt labore non sint fugiat sunt eu aliquip laboris. 
                      Officia irure nostrud adipisicing quis tempor laboris elit voluptate est qui consequat dolor et. 
                    
                    </p>
                    </div>
                </div>
                
          </div>  
        </Formik>
      )
    }
  }

export default Details;
