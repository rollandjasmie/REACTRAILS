import React from "react";
import InformationLogements from '../Logements/InformationLogements';
import Localisation from '../Logements/Localisation';


class  AjoutHebergements extends React.Component {
  state = {
    etape: 1
  }

  setEtape = (newEtape) => {
    this.setState({
      etape: newEtape
    });
  }

  render() {
    return (
      <div>
          
         {this.state.etape === 1 ? (<InformationLogements setEtape={this.setEtape} />) : null }
      
        
         {this.state.etape === 2 ? (<Localisation setEtape={this.setEtape} />) : null}

        Etape : { this.state.etape }
      </div>
    );
  }
}

export default AjoutHebergements;