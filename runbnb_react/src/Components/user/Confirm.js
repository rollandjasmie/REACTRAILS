import React, { Component } from 'react';

import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'

export class Confirm extends Component {

  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  
  render() {
    const { user } = this.props;
 
    return (
     
        <>
       
            
            <List>
              <ListItem>
                <ListItemText primary="Prenom et Nom" secondary={user.name}/>
              </ListItem>
              <ListItem>
                <ListItemText primary="Sexe" secondary={user.sexe} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Date De Naissance" secondary={user.date_of_birth} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={user.email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Numero De Tel" secondary={user.mobile} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Piece"  />
              </ListItem>
                <ListItem>
                <ListItemText primary="Adresse" secondary={user.adresse} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Numero D'urgence" secondary={user.urgence} />
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

const mapStateToPropos=(state) =>{
  return{
    ...state.auth
  }
}
export default connect(mapStateToPropos) (Confirm);
