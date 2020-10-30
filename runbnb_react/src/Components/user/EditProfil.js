import React, { Component } from 'react'
import Dropdow from './Dropdow';
import Navboard from '../forms/Navbar/Navboard';
import IconButton from '@material-ui/core/IconButton';

import {render} from 'react-dom';
import Upload from './Upload';

import UserForm from './UserForm';


class EditProfile extends Component {

    render() {
        return (
            < div className="h">
                  <Navboard/>
                 <nav className="bg-blue-500">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0">
        
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 no-underline">

              <a  href="/Dashboard" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 hover:no-underline focus:outline-none focus:text-white focus:bg-gray-700">Tous les hébergements</a>

              <a href="" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 hover:no-underline focus:outline-none focus:text-white focus:bg-gray-700">Calendrier de tous les hébergements</a>

              <a href="" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 hover:no-underline focus:outline-none focus:text-white focus:bg-gray-700">Toutes les réservations</a>

            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="ml-4 flex items-center md:ml-6">
       

            <div class="ml-3  relative">
              <div className="flex  items-center mr-1 w-auto ">
          
                  <img className=" m-h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
  
                  <Dropdow/>
              </div>

        
        
      
      
           
            </div>
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
 
          <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
    
            <svg class="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
  
            <svg className="hidden h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>


    <div className="hidden md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Dashboard</a>

        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Team</a>

        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Projects</a>

        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Calendar</a>

        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Reports</a>
      </div>
      <div className="pt-4 pb-3 border-t border-gray-700">
        <div className="flex items-center px-5 space-x-3">
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
          </div>
          <div className="space-y-1">
            <div className="text-base font-medium leading-none text-white">Tom Cook</div>
            <div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
          </div>
        </div>
        <div className="mt-3 px-2 space-y-1">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Your Profile</a>

          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Settings</a>

          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Sign out</a>
        </div>
      </div>
    </div>
  </nav>
  <div className="p-20 mt-15 flex ">
        <span className="sary ">
        

            <Upload/>
  
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>
      <p class="w-full h-12 text-lg text-center font-medium text-gray-500 overflow-hidden h">Obtenez plus de réservation en rassurant les voyageurs avec une identité confirmée. </p>  
      <br></br>
      <hr></hr>
   </span>  



<p class="w-full h-12 text-lg text-center ml-24   text-gray-600">Membre depuis 2020</p>
   <div className="mt-10  ">
        <span className="field bg-white shadow-md rounded px-8 pt-6 pb-8 mb-1 rounded-2xl">

          <UserForm/>
      </span>

   </div>
    
  </div>

  <div>

      <div class=" ml-1 h-34 bg-white  juser">

          <p class="w-full h-22 text-lg font-medium text-center text-gray-800 f">Lesquelles de mes informations sont communiquées à des tiers ?</p>

          <p class="w-full h-22 text-lg font-medium text-center text-gray-500 f">Runbnb ne communique les coordonnées de l’hôte aux voyageurs qu’après la confirmation de la réservation.</p>
    </div>
  </div>
   


   </div>
        )
    }
}
export default EditProfile;

