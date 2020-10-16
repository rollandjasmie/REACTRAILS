import React, { Component } from 'react';
import Map from './Map';

export default class MapContainers extends Component {
    render() {
        return (
            <div class=" w-1/3 mr-0 mt-5  ml-10 bg-white shadow-md rounded pt-6 pb-8 mb-10">
         
                <Map />  
           
            </div>
        )
    }
}
