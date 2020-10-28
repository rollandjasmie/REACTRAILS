import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import ItemsCarousel from 'react-items-carousel';
import CarouselItems from './CarouselItems';
import CarouselItems2 from './CarouselItems2';
import './HomePage.css';
import Navbar from './Navbar/Navbar';


class HomePage extends React.Component{
    render(){
      return(
        <Formik>
            <div className="w-full bg-white">
                <Navbar/>
                <div className="">
                  <div className="with-bg container mx-auto flex flex-wrap flex-col md:flex-row mx-12 my-5 py-5 
                  w-11/12  flex justify-center container">
                  <input  className="appearance-none block w-42 h-10 bg-gray-100 text-gray-700 border-2 border-gray-200
                  rounded my-5 px-4 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 mx-2 " placeholder="Nom" />

                  <input type="date" className="appearance-none text-center px-5 w-42 h-10 bg-gray-100 text-gray-700 border-2 border-gray-200
                      rounded leading-tight focus:outline-none focus:bg-white focus:border-orange-500 mx-2 my-5 "></input>
                    <input type="date" className="appearance-none text-center px-5 w-42 h-10 bg-gray-100 text-gray-700 border-2 border-gray-200
                      rounded leading-tight focus:outline-none focus:bg-white focus:border-orange-500 mx-2 my-5 "></input>   

                      <select className="appearance-none text-center px-5 w-42 h-10 bg-gray-100 text-gray-700 border-2 border-gray-200
                      rounded leading-tight focus:outline-none focus:bg-white focus:border-orange-500 mx-2 my-5  ">
                        <option value="green">1 voyageur</option>
                        <option value="blue">Plusieurs voyageurs</option>
                      </select>
                  </div>
                </div>
                <div className=" pl-12 py-5">
                  <h1 className="text-xl ">Les offres du moment :<span className="text-xs"> &nbsp; (voir toutes les offres)</span></h1>
                </div>
                 <div className="py-5 px-5" >
                  <CarouselItems/>
                 </div>
                 <div className=" pl-12 py-5">
                  <h1 className="text-xl ">Découvrir:<span className="text-xs"> &nbsp; (voir toutes les offres)</span></h1>
                  </div>
                  <div className="py-5 px-5">
                  <CarouselItems2/>
                 </div>
                 <div>
                   <h1 className="text-3xl font-medium text-center py-5">Espace propriétaire</h1>
                   <div className="flex justify-center "> 
                     <div className="w-5/12 my-5 mx-10">
                       <a className="block mr-5 hover:text-gray-500  text-xl">Ajouter un hébergement</a>
                       
                       <a className="block mr-5 hover:text-gray-500  text-xl my-2">Gérer ses hébergements (extranet)</a>
                       <div className="py-5">
                         <img src="./images/fond.jpg"></img>
                       </div>
                     </div>
                     <div className="w-5/12  mx-10 ">
                       <h1 className="block mr-5 hover:text-gray-900 my-5 text-3xl font-medium text-center ">Besoin d’aide pour vos réservations ?</h1>
                       <a className="block mr-5 hover:text-gray-900 py-10 text-xl px-5 ">Les services de logistique a la cartes :</a>
                       <div className="flex" >
                         <img className="h-16 w-16 mx-4" src="./images/fond.jpg"></img>
                         <img className="h-16 w-16 mx-4" src="./images/fond.jpg"></img>
                         <img className="h-16 w-16 mx-4" src="./images/fond.jpg"></img>
                         <img className="h-16 w-16 mx-4" src="./images/fond.jpg"></img>
                         <img className="h-16 w-16 mx-4" src="./images/fond.jpg"></img>
                         <img className="h-16 w-16 mx-4" src="./images/fond.jpg"></img>
                       </div>
                     </div>
                   </div>
                 </div>
               
                  <div>
                  <h1 className="text-3xl font-medium text-center py-5">Service Premium</h1>
                  <h2 className="text-2xl font-normal text-center ">Besoin d’aide pour vos gérer annonces ?</h2>
                  <div className="w-4/5">
                  <h3 className="text-2xl font-normal text-right px-48 text-blue-500 hover:text-blue-900">+ d'info</h3>
                  </div>
                  </div>

          </div>  
        </Formik>
      )
    }
  }

export default HomePage;
