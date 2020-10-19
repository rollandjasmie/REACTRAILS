import React, {Component} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'
const dropzoneStyle = {
    width  : "0%",
    height : "20%",
    border : "1px solid black"
};

class Photos extends Component{
  constructor(props){
    super(props);
    this.state = {
      files: []
    };
  }
  handleChange(files){
    this.setState({
      files: files
    });
    console.log(files[1])
  }
  render(){
    return (
      <DropzoneArea
        onChange={this.handleChange.bind(this)}
        showPreviewsInDropzone={false}
        showPreviews={true}
        filesLimit={50}
        maxFileSize={5000000}

        />
    )
  }
}

export default Photos