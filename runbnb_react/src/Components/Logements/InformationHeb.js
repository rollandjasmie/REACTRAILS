import React from 'react';
import MapGL, { Marker }  from "react-map-gl";
import Pin from './pin';



class InformationHeb extends React.Component {
  
  state={
    longitude:this.props.formValue.map.longitude,
    latitude:this.props.formValue.map.latitude,
    zoom: 8.56,
    ok:'none',
    ko:'block'
  }
  
  onChange =(event)=>{
    if (event.target.checked) {
    this.setState({
        ok: "block",
        ko:"none"
      })
    } 
    else {  
      this.setState({
      ko: "block",
      ok:"none"
    })
      
    }
  }
  
  render() {
    let adresse1 = this.props.adresse1
    let adresse = this.props.formValue.localisation.adresse
    let name = this.props.formValue.hebergement.name
    let longitude = this.props.formValue.map.longitude
    let latitude = this.props.formValue.map.latitude

    const MAPBOX_TOKEN ="pk.eyJ1Ijoicm9sbGFuZGphc21pZSIsImEiOiJja2drZjM1dGowNnR0MnFwY2V2dHB4cGltIn0.KGbcbcVaTYQhASyG17Q5rQ";

    return (
      <>
     
    

          <div className="w-2/5 on inline-block element mt-5 pl-10 ml-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-10  ">
            <h1 className="text-2ml font-bold  mb-10 ">Information sur l'hébergement</h1>
              <div class=" mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Vérifiez les informations sur votre hébergement :
                </label>
                <label class="block tracking-wide text-gray-700 text-xs py-3" >
                Si vous souhaitez modifier les informations,
                mieux vaut le faire maintenant. En effet, il est plus difficile de les mettre à jour pour la suite
                </label>
                <hr className="w-full"></hr>
            
              </div>

              <div className="my-5 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                Adresse de l’hébergement
                </label>
                <label className="block uppercase tracking-wide text-gray-700 text-xs  mb-2" for="grid-city">
                {adresse} <div onClick={adresse1} >Modifier</div>
                </label>
                <hr className="w-full mt-5"></hr>

              </div>
              <div className="my-2 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                Emplacement sur la carte
                </label>
                <label className="block uppercase tracking-wide text-gray-700 text-xs  mb-2" for="grid-city">
                <div><div onClick={this.props.map1} >Modifier</div>
                  <MapGL
                    mapStyle="mapbox://styles/mapbox/streets-v11"
                    {...this.state}
                    width="250px"
                    height="250px"
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                  >
                  
                    <Marker
                      longitude={longitude}
                      latitude={latitude}
                      offsetTop={-20}
                      offsetLeft={-10}
                    >
                      <Pin size={20} />
                    </Marker>
                  </MapGL>
                </div>                
                </label>
               <hr className="w-full mt-5"></hr>
              
              </div>
              

            <div className="my-5 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
              Nom de l’hébergement
              </label>
              <label className="block uppercase tracking-wide text-gray-700 text-xs  mb-2" for="grid-city">
              {name}<div onClick={this.props.nom1} >Modifier</div>
              </label>
              <hr className="w-full mt-5"></hr>
             
            </div>
            <div className="my-5 md:mb-0">
            
              <label className="block  tracking-wide text-gray-700 text-xs mb-2" for="grid-city">
              <input type="checkbox" name="informations" id="daika" onClick={this.onChange}></input>
              Je confirme que ces informations sont correctes
              </label>
             
              <hr className="w-full mt-5"></hr>
             
            </div>
            <div className="flex items-end justify-end">

                <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-1" onClick={this.props.previousStep}>Précedent</button>  
                <button style={{display:this.state.ok}}  class="bg-orange-500 dp:n hover:bg-orange-700 text-white pl-6 pr-6 font-bold py-2 px-4 rounded" onClick={this.props.nextStep}>Suivant</button>   
                <button style={{display:this.state.ko}} class="bg-orange-500 dp:n hover:bg-orange-700 text-white pl-6 pr-6 font-bold py-2 px-4 rounded" >Suivant</button>

              </div>
        
          </div>
     </>
    )
  }
}

export default InformationHeb;