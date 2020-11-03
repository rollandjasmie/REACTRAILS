import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Navbarextra extends Component {
    render() {
  
      return (
          <>
          <header className="text-gray-700 bg-white">
              <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
                <NavLink to="/" className="flex title-font font-medium items-center text-gray-900 mb-3 md:mb-0">
                  <img className="w-40" src="./images/logo.jpg"></img>
            
                </NavLink>
                  <button className="  bg-orange-500 rounded-lg hover:bg-orange-700 hover:text-white
                  text-white px-3 py-1  mx-5">Accueil du groupe</button>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                  <div className="flex">
                  <p  className="no-underline  
                  text-blue-500  px-4 mx-3 py-1">La Villa Nath - Saint Gilles Les Bains 6388771</p>
            
              <button className=" border-2 border-orange-500 rounded-xl hover:bg-orange-500 hover:text-white
                text-orange-500  px-4 mx-3">Changer d'hébergement</button>
                
                </div>
                  </nav>
          
              </div>
          </header>
        
        
          </>
        )
    }
}


export default Navbarextra;