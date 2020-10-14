import React from "react";
import InformationLogements from '../Logements/InformationLogements';
import Localisation from '../Logements/Localisation';
import axios from '../../axios';


class  AjoutHebergements extends React.Component {
  state = {
    etape: 1

  }


    setEtape = (newEtape,values) => {
      axios.post("/logement", values).then()
      this.setState({
        etape: newEtape

        
      });
    }
     

  render() {
    return (
      <div>
          
         {this.state.etape === 1 ? (<InformationLogements setEtape={this.setEtape}  />) : null }
      
        
         {this.state.etape === 2 ? (<Localisation setEtape={this.setEtape}/>) : null}

        Etape : { this.state.etape }
      </div>
    );
  }
}

export default AjoutHebergements;

