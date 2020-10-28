import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';


import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
 
        <>
            <div>
        
            <TextField 
              placeholder="Prenon et Nom"
              label="Prenom et Nom"
              onChange={handleChange('PrenomEtNom')}
              defaultValue={values.PrenomEtNom}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Sexe"
              label="Sexe"
              onChange={handleChange('Sexe')}
              defaultValue={values.Sexe}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="DateDeNaissance"
              label="Date de naissance"
              onChange={handleChange('DateDeNaissance')}
              defaultValue={values.DateDeNaissance}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Email"
              label="Email"
              onChange={handleChange('Email')}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
            <br />
     
            <TextField
              placeholder="Numero de Télephone"
              label="Numero de Télephone"
              onChange={handleChange('NumeroDeTel')}
              defaultValue={values.NumeroDeTel}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder=" Piece"
              label=" Piece"
              onChange={handleChange(' Piece')}
              defaultValue={values. Piece}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder=" Numero d'urgence"
              label="Numero d'urgence"
              onChange={handleChange(' NumeroDurgence')}
              defaultValue={values. NumeroDurgence}
              margin="normal"
              fullWidth
            />
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Enregistré</Button>
       </div>
        </>
    
    );
  }
}

export default FormUserDetails;
