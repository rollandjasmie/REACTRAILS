import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Dropdow from '../../user/Dropdow';
import moduleName from 'module'

export default class Navbaruser extends Component {
    render() {
        return (
            <>
                <header className="text-gray-700 body-font">
                  <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
                  <NavLink to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                      <img className="w-40 pt-2" src="./images/logo.jpg"></img>
                    </NavLink>
                    <NavLink to="/"  className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                      <a className=" hover:text-gray-900"></a>
                    </NavLink>
                   
                    <form>
                    <div className="flex">
                    <div className="flex  justify-end w-auto ">
          
                        <img className=" m-h-8 w-8 rounded-full" 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>

                        <Dropdow/>
                    </div>
                      
                    </div>
                    
                    </form>
                  </div>
                </header>
            </>
        )
    }
}
