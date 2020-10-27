import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
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
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="PrenometNom" secondary={PrenometNom} />
              </ListItem>
              <ListItem>
                <ListItemText primary="sexe" secondary={sexe} />
              </ListItem>
              <ListItem>
                <ListItemText primary="DateDeNaissance" secondary={DateDeNaissance} />
              </ListItem>
              <ListItem>
                <ListItemText primary="email" secondary={email} />
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
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Confirm & Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
