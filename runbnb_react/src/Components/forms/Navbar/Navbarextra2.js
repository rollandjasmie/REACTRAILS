import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Navbarextra2 extends Component {
    render() {
  
      return (
          <>
          <header className="text-gray-700 bg-white">
          <div className="flex w-full h-16 bg-blue-500" >
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
          </header>
        
        
          </>
        )
    }
}


export default Navbarextra2;