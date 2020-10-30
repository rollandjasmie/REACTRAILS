
import React, { Component } from 'react';

import AvatarUploader from './Upload';


export class Upload extends Component {
render(){
    return(

        <AvatarUploader
        size={150}
        uploadURL="http://localhost:3000"
        fileType={"image/png"}/>
       );

    
}


}
