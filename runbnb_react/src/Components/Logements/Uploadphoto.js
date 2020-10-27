import React, { Component } from 'react';
import {DropzoneArea} from 'material-ui-dropzone'


export default class Uploadphoto extends Component {
    
        state = {

        }
        
        handleChange(files){
            this.setState({
            files: files
        })
        console.log(files)
            
            let { formValue, setFormValue } = this.props;
            formValue = {...formValue, photo: files};
            setFormValue(formValue);
        }
        
      
        render() {
    
            
            return (<>
                <div className=" w-2/4 mr-0 mt-5 pl-3 ml-10 pr-3  bg-white shadow-md rounded pt-6 pb-8 ">
            
                    <DropzoneArea
                        onChange={this.handleChange.bind(this)}
                        showPreviewsInDropzone={false}
                        showPreviews={true}
                        filesLimit={50}
                        maxFileSize={5000000}
                        dropzoneText='Importez au moins une photo'
                        previewText="Photo(s) sélectionnée(s)"
                        
                    />                
                    
                <div className="flex items-end justify-end pt-10 my-5 mx-5">
                    <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-1" onClick={this.props.previousStep}>Précedent</button>
                    <button class="bg-orange-500 hover:bg-orange-700 text-white pl-6 pr-6 font-bold py-2 px-4 rounded" onClick={this.props.nextStep}>Suivant</button>  
                </div>
                </div>
                </>
            )
        }
}
