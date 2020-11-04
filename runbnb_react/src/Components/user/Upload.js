
import axios from 'axios';
import React, { Component } from 'react';
import history from '../../history'

import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


 class Upload extends Component {
  state = {
    avatar:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  };
  componentDidMount() {
    axios.get('/users/show',).then(response => {
      if (response.data.photo === true) {
        
        this.setState({
          avatar: `http://localhost:4000/${response.data.avatar}` })
        console.log(response)
      }
    })
  }
  imageHandler = e => {
   
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ avatar: reader.result });
        // console.log(reader.result)
      }
      
    };
    
    reader.readAsDataURL(e.target.files[0]);

    
    
    console.log(this.state)
    let formData = new FormData(); 
    formData.append('featured_image', e.target.files[0]);
    console.log(formData)
    console.log(e.target.files[0]);
    axios.put("/avatar", formData).then(response=>{
       console.log(response)
        }   
      )
      history.push('/EditProfil')
  };

  render() {
    return (
      <div className="page">
        <div className="container">  
          <div className="img-holder">
              <img src={this.state.avatar} alt="" id="img" className="img" />
          </div>
          <input
            type="file"
            accept="image/*"
            name="image-upload"
            id="input"
            onChange={this.imageHandler}
            multiple={true}
          />
          <div className="label">
            <label className="image-upload" htmlFor="input">              
              <IconButton color="primary" aria-label="upload picture" component="span">
              <PhotoCamera />
              </IconButton>
            </label>
          </div>
        </div>
      </div>
      );
    }
}

export default Upload;
