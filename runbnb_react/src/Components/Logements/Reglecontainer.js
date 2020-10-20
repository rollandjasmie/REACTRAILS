import React, { Component } from 'react';
import Regle from './Regle';

export default class Reglecontainer extends Component {
    
    render() {
        return ( 
            <div className="  mr-0 mt-5 pl-3 ml-10  pt-6 pb-8 mb-10 ">
                <Regle /> 
             <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-1" onClick={this.props.previousStep}>Précedent</button>
             <button  class="bg-blue-500 hover:bg-blue-700 text-white pl-6 pr-6 font-bold py-2 px-4 rounded" onClick={this.props.nextStep}type="submit">Suivant</button>
            </div>
             
        )
    }
}