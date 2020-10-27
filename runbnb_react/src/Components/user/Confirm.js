import React, { Component } from 'react';

import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { PrenometNom, Sexe, DateDeNaissance, Email, NumeroDeTel, Piece,Adresse,NumeroDurgence, }
    } = this.props;
    return (
     
        <>
       
            
            <List>
              <ListItem>
                <ListItemText primary="PrenometNom" secondary={PrenometNom} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Sexe" secondary={Sexe} />
              </ListItem>
              <ListItem>
                <ListItemText primary="DateDeNaissance" secondary={DateDeNaissance} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={Email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="NumeroDeTel" secondary={NumeroDeTel} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Piece" secondary={Piece} />
              </ListItem>
                <ListItem>
                <ListItemText primary="Adresse" secondary={Adresse} />
              </ListItem>
              <ListItem>
                <ListItemText primary="NumeroDurgence" secondary={NumeroDurgence} />
              </ListItem>
            </List>
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Edit</Button>

          
       
        </>
 
    );
  }
}

export default Confirm;
