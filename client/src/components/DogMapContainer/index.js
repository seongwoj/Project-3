import React, {useState} from "react"
import "./styles.css"


import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow}from "react-google-maps"


const DogMapContainer = withScriptjs(withGoogleMap((props => {
      const dogSearch=props.dogSearch
      const [selectedMap, setSelectedMap] = useState(null);
      const [selectedPlace, setSelectedPlace] = useState([]);
      console.log(props.location)
      return(
         <div className="dog-map-container">
            
      <GoogleMap
        center = { { lat: props.coords.lat, lng: props.coords.lng} }
        defaultZoom = { 12 }
      >
      {dogSearch&&dogSearch.map(function(business){
      return <Marker
      key={business.id}
         position={{lat: business.coordinates.latitude, 
                  lng: business.coordinates.longitude,
            }}
            onClick={() => {
               setSelectedMap(business);
               setSelectedPlace([business])
               }
            
            }
         />
         })}

      {selectedMap &&(
         <InfoWindow
         position={{lat: selectedMap.coordinates.latitude, 
                     lng: selectedMap.coordinates.longitude,
                  }}
      
         onCloseClick={()=>{
            setSelectedMap(null)
         }}>
            <div className="map-container">
               <p>{selectedMap.name}</p>
               <p>{selectedMap.location.display_address[0]} {selectedMap.location.display_address[1]} </p>
            </div>
         </InfoWindow>
      )}
         </GoogleMap>
         <br/>


   <div className="row">
      
         <div class="col-md-4 col-xs-12" style={{textAlign: "center"}}>
        <input className="city-input" type="text" name="city" onChange={props.handleInputChange} placeholder="Enter city here first before searching"></input>
        </div>
        <div className="col-md-2 col-xs-12" style={{textAlign: "center"}}>
        <button className="search-button" onClick={props.handleParkSubmit}>Fetch Dog Parks</button>
        </div>
        <div className="col-md-4 col-xs-12" style={{textAlign: "center"}}>
        <button className="search-button" onClick={props.handleFriendlySubmit}>Fetch Dog Friendly Places</button>
        </div>
        <div className="col-md-2 col-xs-12" style={{textAlign: "center"}}>
        <button className="search-button" onClick={props.handleDogBeachSubmit}>Fetch Dog Beaches</button>
        </div>
      
   </div>   
      {selectedPlace.map(function(place){
       return (<div key={place.id}>
               <h3 className="category">{props.category}</h3>
               <div className="row">
               <div className="card business-card">
                  <div className="card-body business-body">
                     <h5 className="card-title">{place.name}</h5>
                     <img className="placeImage" src={place.image_url} alt={place.name}/>
                     <p>{place.location.display_address[0]} </p>
                     <p>{place.location.display_address[1]}</p>
                     <a href={place.url} className="btn view-yelp" rel="noopener noreferrer" target="_blank">View On Yelp</a>
                  </div>
               </div>
            </div>
            </div>
       )
   })}
         
</div>
   );
})))

export default DogMapContainer;