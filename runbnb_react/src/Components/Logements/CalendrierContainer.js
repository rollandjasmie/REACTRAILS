import React, { Component } from 'react';
import CalendrierComponent from './CalendrierComponent';
import '../../App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { frFR } from '@material-ui/core/locale';


export default class CalendrierContainer extends Component {
  state={

  }

  dateRange = (range)=>{
    this.setState({ date:range});
 
    let { formValue, setFormValue } = this.props;
        formValue = {...formValue, date: range};
        setFormValue(formValue);
       
    console.log(formValue)
  }
    render() {
        return (
       <>
            <div class="w-2/4 mt-17 pl-10 ml-10 mt-10  bg-white shadow-md rounded px-8 pt-6 pb-8 mb-10">
               <h2 className="text-xl font-bold  mb-10 ">A quelle date souhaitez-vous ouvrir votre hébergement à la réservation ? </h2>
               <h2 className="text-sm mb-10">Cliquez sur chaque date individuellement. Toutes les dates colorés sont disponibles à la réservation. Ne vous inquitez pas, vous pourrez toujours ajouter ou supprimer des dates plus tard.</h2>
            
                 <div className="">
               <ThemeProvider >
                  <CalendrierComponent dateRange={this.dateRange}/>  
               </ThemeProvider>
                  </div>
             <div className="sp relative">
              <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-1" onClick={this.props.previousStep}>Précedent</button>
              <button  class="bg-orange-500 hover:bg-orange-700 text-white pl-6 pr-6 font-bold py-2 px-4 rounded" onClick={this.props.nextStep}>Suivant</button>
              </div>
            </div>
              </>
        )
    }
}