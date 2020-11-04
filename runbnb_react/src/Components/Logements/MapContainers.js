import React, { Component } from 'react';
import Map from './Map';

export default class MapContainers extends Component {
    state = {
        longitude: this.props.formValue.map.longitude,
        latitude: this.props.formValue.map.latitude
    }
    setPosition = (position) => {
        // this.setState({
        //     position: position
        // });

        let { formValue, setFormValue } = this.props;
        formValue = {...formValue, map: position};
        setFormValue(formValue);
        this.setState({
            longitude: formValue.map.longitude,
            latitude: formValue.map.latitude
        })
        console.log(formValue)
        // let lat = this.state.position.latitude
        // let long = this.state.position.longitude
    }
    
    
    render() {

        return ( 
            <div className=" w-1/3 mr-0 mt-5 pl-3 ml-10  pt-6 pb-8 ">
                <Map setPosition={this.setPosition} state={this.state}/> 
             <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-1" onClick={this.props.previousStep}>Précedent</button>
             <button class="bg-orange-500 hover:bg-orange-700 text-white pl-6 pr-6 font-bold py-2 px-4 rounded" onClick={this.props.nextStep}>Suivant</button>
            </div>
        )
    }
}
    