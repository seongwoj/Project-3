import React, {useState} from "react"
import "./styles.css"


import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow}from "react-google-maps"


const DogMapContainer = withScriptjs(withGoogleMap((props => {
      const dogSearch=props.dogSearch
      const [selectedMap, setSelectedMap] = useState(null);
      const [selectedPlace, setSelectedPlace] = useState([]);
      
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





      <form className="search-form">
        <input className="city-input" type="text" name="city" onChange={props.handleInputChange} placeholder="Enter city"></input>
        <button className="search-button" onClick={props.handleParkSubmit}>Fetch Dog Parks</button><button className="search-button" onClick={props.handleFriendlySubmit}>Fetch Dog Friendly Places</button>
        <button className="search-button" onClick={props.handleDogBeachSubmit}>Fetch Dog Beaches</button>
      </form>
      
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
                     <a href={place.url} className="btn view-yelp" rel="noopener noreferrer">View On Yelp</a>
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