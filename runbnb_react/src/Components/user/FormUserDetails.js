import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { connect } from 'react-redux'



import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { userUpdateAttempt } from '../../redux/Auth/auth.action';


export class FormUserDetails extends Component {
  state ={
     user:null
  }
  componentDidMount(){
    const { user } = this.props;
    axios.get(`/users/${user.id}`).then(response => { this.setState({
      user:response.data.user,
    })
    console.log(response)
      }
        )
}

continue = e => {
  const { user } = this.props;
    e.preventDefault();
    axios.put(`/users/${user.id}`, this.state)
        .then(response => {
       if (response.status === 200) {
              console.log(response)
                // console.log(response.data)
                // const { user } = response.data;
                // console.log(user);
                // dispatch(authUpdateSuccess(user));
                
            }
      })
      this.props.prevStep()
    // this.props.userUpdateAttempt(user, this.state);
  };
  render() {
    if (this.state.user) {

      return (
<>
           <div className=''>       
              <TextField 
            
                label={' Nom'}
                onChange={(e) => {this.setState({name: e.target.value})}}
                defaultValue={this.state.user.name}
                margin="normal"
                fullWidth
              />
               <TextField
                label={'Prénom'}
                onChange={(e) => {this.setState({first_name: e.target.value})}}
                defaultValue={this.state.user.first_name}
                margin="normal"
                fullWidth
              />
              <br />

              <TextField
            
            label={'Prénom'}
            onChange={(e) => {this.setState({name: e.target.value})}}
            defaultValue={this.state.user.name}
            margin="normal"
            fullWidth
          />
              <TextField
              
              
                label="Sexe"
                onChange={(e) => {this.setState({sexe: e.target.value})}}
                defaultValue={this.state.user.sexe}
                margin="normal"
                fullWidth
              />
              <br />
              <TextField
             
                label="Date de naissance"
                onChange={(e) => {this.setState({date_of_birth: e.target.value})}}
                defaultValue={this.state.user.date_of_birth}
                margin="normal"
                fullWidth
              />
              <br />
              <TextField
        
                label="Email"
                onChange={(e) => {this.setState({email: e.target.value})}}
                defaultValue={this.state.user.email}
                margin="normal"
                fullWidth
              />
              <br />
      
              <TextField
          
                label="Numero de Télephone"
                onChange={(e) => {this.setState({mobile: e.target.value})}}
                defaultValue={this.state.user.mobile}
                margin="normal"
                fullWidth
              />
              <br />
              <TextField
           
                label=" Piece d'identité"
                onChange={(e) => {this.setState({piece: e.target.value})}}
                defaultValue="rien"
                margin="normal"
                fullWidth
              />
              <br />
              <TextField
       
                label="Numero d'urgence"
                onChange={(e) => {this.setState({urgence: e.target.value})}}
                defaultValue={this.state.user.urgence}
                margin="normal"
                fullWidth
              />
              <br />
              <br/>
              <Button
                color="primary"
                variant="contained"
                onClick={this.continue}
              >Enregistré</Button>
            </div>
       </>
        
    
    );
    } else {
      return null
    }


    
  }
}
const mapStateToPropos=(state) =>{
  return{
    ...state.auth
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
      userUpdateAttempt: (user, values) => {dispatch(userUpdateAttempt(user, values))}
    }
}
export default connect(mapStateToPropos,mapDispatchToProps)(FormUserDetails);
