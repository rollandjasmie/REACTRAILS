import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';




export default class Conditions extends Component {
    render() {
        return (

         <>
            <p className="text-2ml font-bold mt-20 pl-10 ml-10">Conditions d’annulation : </p>
            <div className="w-auto on inline-block element h-200 pl-10 ml-10 mt-20  bg-white shadow-md rounded px-8 pt-20 pb-8 mb-10">
              <div class="inline-flex">
                <button  type='radio' class="bg-orange-400 focus:focus:bg-orange-500 hover:bg-orange-600 text-gray-800 shadow border-2 border-gray-500 font-bold py-2 px-4 rounded-r">
                  1Jour
                </button>
                <button  type='radio' class="bg-orange-400 focus:focus:bg-orange-500 hover:bg-orange-600 text-gray-800 shadow border-2 border-gray-500 font-bold py-2 px-4 rounded-r">
                  7Jours
                </button>
                <button  type='radio' class="bg-orange-400 focus:focus:bg-orange-500 hover:bg-orange-600 text-gray-800 shadow border-2 border-gray-500 font-bold py-2 px-4 rounded-r">
                  14Jours
                </button>
                <button  type='radio' class="bg-orange-400 focus:focus:bg-orange-500 hover:bg-orange-600 text-gray-800 shadow border-2 border-gray-500 font-bold py-2 px-4 rounded-r">
                  30Jours
                </button>
              </div><br /><br />

              <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-1" onClick={this.props.previousStep}>Précedent</button>
              <button  class="bg-orange-500 hover:bg-orange-700 text-white pl-6 pr-6 font-bold py-2 px-4 rounded" onClick={this.props.nextStep}>Suivant</button>
            </div>

         </>



 


  

 

              
           
          
        )
    }
}

