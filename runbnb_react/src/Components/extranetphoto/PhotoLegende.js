import React, { Component } from 'react'

import Uploadlegende from './Uploadlegende';
import {render} from 'react-dom';




class PhotoLegende extends Component {

    render() {
        return (

        <>
   




<div className="hidden sm:block">
  <div className="py-5">
    <div className="border-t border-gray-200"></div>
  </div>
</div>

<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">

        <h3 class="text-lg font-medium leading-6 font-bold text-center text-blue-400">Retour à  toutes les photos</h3>
        <p className="mt-1 text-sm leading-5 text-gray-600">

       
        </p>

     <div className ="legende">
        <Uploadlegende/>

      </div>  
      </div>
    </div>
    <div className=" mt-5 md:mt-0 md:col-span-2">

      <form action="#" method="POST">

        <div class=" shadow overflow-hidden md:rounded-md">
          <div class=" px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
             

        

              <div className="col-span-6 sm:col-span-4">
                <label for="email_address" class="block text-sm font-medium leading-5 text-gray-700">Mise à jour aujourd’hui</label>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label for="country" class="block text-sm font-medium leading-5 text-gray-700">Ajouter des détails à propos de cette photo</label>
             

              <div className="rounded-md shadow-sm">
                <textarea id="about" rows="3" class="form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" placeholder="Mettre les detaille ici"></textarea>
              </div>
              </div>

            

            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-left sm:px-6">
            <button className="py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600 transition duration-150 ease-in-out">
              Enregistré la photo
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

<div className="hidden sm:block">
  <div className="py-5">
    <div className="border-t border-gray-200"></div>
  </div>
</div>



        </>    

        )
    }
}
export default PhotoLegende;

