import React, { Component } from 'react';
import Regle from './Regle';

export default class Reglecontainer extends Component {
    
    render() {
        return ( 
            <div className="  ">
                <Regle /> 
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-1" onClick={this.props.previousStep}>Précedent</button>
               <button  className="bg-blue-500 hover:bg-blue-700 text-white pl-6 pr-6 font-bold py-2 px-4 rounded" onClick={this.props.nextStep}type="submit">Suivant</button>
            </div>
             
        )
    }
}