import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { connect } from 'react-redux'



import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export class FormUserDetails extends Component {
  state ={
    
  }

  continue = e => {
    e.preventDefault();
    const { user } = this.props;
    axios.put(`/users/${user.id}`,this.state).then(response =>
      console.log(response)
      )
    this.props.prevStep()  

  };
  render() {
    const { user } = this.props;


    return (
<>
           <div className='overflow-auto'>       
              <TextField
                placeholder="Prenon et Nom"
                label={'Prenom et Nom'}
                onChange={(e) => {this.setState({name: e.target.value})}}
                defaultValue={user.name}
                margin="normal"
                fullWidth
              />
              <br />
              <TextField
                placeholder="Sexe"
                label="Sexe"
                onChange={(e) => {this.setState({sexe: e.target.value})}}
                defaultValue={user.sexe}
                margin="normal"
                fullWidth
              />
              <br />
              <TextField
                placeholder="DateDeNaissance"
                label="Date de naissance"
                onChange={(e) => {this.setState({date_of_birth: e.target.value})}}
                defaultValue={user.date_of_birth}
                margin="normal"
                fullWidth
              />
              <br />
              <TextField
                placeholder="Email"
                label="Email"
                onChange={(e) => {this.setState({email: e.target.value})}}
                defaultValue={user.email}
                margin="normal"
                fullWidth
              />
              <br />
      
              <TextField
                placeholder="Numero de Télephone"
                label="Numero de Télephone"
                onChange={(e) => {this.setState({mobile: e.target.value})}}
                defaultValue={user.mobile}
                margin="normal"
                fullWidth
              />
              <br />
              <TextField
                placeholder=" Piece"
                label=" Piece"
                onChange={(e) => {this.setState({piece: e.target.value})}}
                defaultValue="rien"
                margin="normal"
                fullWidth
              />
              <br />
              <TextField
                placeholder=" Numero d'urgence"
                label="Numero d'urgence"
                onChange={(e) => {this.setState({urgence: e.target.value})}}
                defaultValue={user.urgence}
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
const mapStateToPropos=(state) =>{
  return{
    ...state.auth
  }
}
export default connect(mapStateToPropos)(FormUserDetails);
