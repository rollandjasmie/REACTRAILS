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
                      <img className="w-40 px-5" src="./images/logo.jpg"></img>
                    </NavLink>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                      <a className="mr-5 hover:text-gray-900">Ajouter un hébergement</a>
                    </nav>
                    <form>
                    <div className="flex">
                      <DropDown title="Espace propriétaire" className="nav-action">
                        <NavLink to="/gestion/annonces"><div className="item">Gérer mes annonces</div></NavLink>
                        <NavLink to="/"><div className="item">Service à la carte</div></NavLink>
                      </DropDown>

                      <DropDown title="Espace voyageur" className="nav-action">
                        <NavLink to="/signin"><div className="item">S'inscrire</div></NavLink>
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
