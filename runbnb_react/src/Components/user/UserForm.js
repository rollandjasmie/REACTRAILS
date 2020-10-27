import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';

import Confirm from './Confirm';


export class UserForm extends Component {
  state = {
    step: 1,
    PrenomEtNom: '',
    Sexe: '',
    DateDeNaissance: '',
    Email: '',
    NumeroDeTel: '',
    Piece: '',
    Adresse:'',
    NumeroDurgence:'',
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { PrenomEtNom ,  Sexe,   DateDeNaissance, Email, NumeroDeTel ,  Piece, Adresse,  NumeroDurgence } = this.state;
    const values = { PrenomEtNom ,  Sexe,   DateDeNaissance, Email, NumeroDeTel ,  Piece, Adresse,  NumeroDurgence }; 

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

    
      default:
        (console.log('votre profil'))
    }
  }
}

export default UserForm;
