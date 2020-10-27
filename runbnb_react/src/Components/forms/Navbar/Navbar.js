import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import DropDown from '../DropDown/DropDown';

export default class Navbar extends Component {
    render() {
        return (
            <>
                <header className="text-gray-700 body-font">
                  <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
                  <NavLink to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                      <img className="w-40 pt-2" src="./images/logo.jpg"></img>
                    </NavLink>
                    <NavLink to="/AjoutHebergements"  className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                      <a className=" hover:text-gray-900">Ajouter un hébergement</a>
                    </NavLink>
                    <NavLink to="/Dashboard"  className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                      <a className=" hover:text-gray-900">Dashboard</a>
                    </NavLink>
                    <form>
                    <div className="flex">
                      <DropDown title="Espace propriétaire" className="nav-action mx-5">
                        <NavLink to="/signin"><div className="item">Gérer mes annonces</div></NavLink>
                        <NavLink to="/"><div className="item">Service à la carte</div></NavLink>
                      </DropDown>

                      <DropDown title="Espace voyageur" className="nav-action">
                        <NavLink to="/"><div className="item">S'inscrire</div></NavLink>
                        <NavLink to=""><div className="item">Se connecter</div></NavLink>
                      </DropDown>
                      
                    </div>
                    
                    </form>
                  </div>
                </header>
            </>
        )
    }
}
