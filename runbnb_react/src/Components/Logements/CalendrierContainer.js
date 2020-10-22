import React, { Component } from 'react';
import CalendrierComponent from './CalendrierComponent';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { frFR } from '@material-ui/core/locale';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#1976d2' },
  },
}, frFR);
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
              
            <div class="w-3/4 mt-17 pl-10 ml-10 mt-10  bg-white shadow-md rounded px-8 pt-6 pb-8 mb-10">
                <h2 className="text-2ml font-bold  mb-10 ">A quelle date souhaitez-vous ouvrir votre hébergement à la réservation ? </h2>
                <h2 className="text-1ml mb-10">Cliquez sur chaque date individuellement. Toutes les dates colorés sont disponibles à la réservation. Ne vous inquitez pas, vous pourrez toujours ajouter ou supprimer des dates plus tard.</h2>
               <ThemeProvider theme={theme}>
                <CalendrierComponent dateRange={this.dateRange}/> 
                
              <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-1 mt-10" onClick={this.props.previousStep}>Précedent</button>
              <button  class="bg-orange-500 hover:bg-orange-700 text-white pl-6 pr-6 font-bold py-2 px-4 rounded  mt-10" onClick={this.props.nextStep}>Suivant</button> 
                </ThemeProvider>
             </div>
        )
    }  
}