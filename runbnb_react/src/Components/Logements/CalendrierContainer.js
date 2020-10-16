import React, { Component } from 'react';
import CalendrierComponent from './CalendrierComponent';

export default class CalendrierContainer extends Component {
    render() {
        return (
            <div class="w-3/4 mt-17 pl-10 ml-10 mt-10  bg-white shadow-md rounded px-8 pt-6 pb-8 mb-10">
         
                <CalendrierComponent/>  
           
            </div>
        )
    }
}