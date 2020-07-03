import React, {useState} from "react"



import {withGoogleMap, GoogleMap, Marker, InfoWindow}from "react-google-maps"


const imgstyle = {
   border: '1px solid #ddd',
   borderRadius: '4px',
   padding: '5px',
   width: '150px'
  };


const DogParksMapContainer = withGoogleMap(props => {
      const dogSearch=props.dogSearch
      const [selectedMap, setSelectedMap] = useState(null);
      const [selectedPlace, setSelectedPlace] = useState([]);
     
      return(
         <div>
      <GoogleMap
        defaultCenter = { { lat: 34.052235, lng: -118.243683 } }
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
            <div>
               <p>{selectedMap.name}</p>
               <p>{selectedMap.location.display_address[0]} {selectedMap.location.display_address[1]} </p>
            </div>
         </InfoWindow>
      )}
         </GoogleMap>





      <form>
        <input type="text" name="city" onChange={props.handleInputChange} placeholder="Enter city"></input>
        <button onClick={props.handleParkSubmit}>Search Dog Parks</button><button onClick={props.handleSubmit}>Search Dog-Friendly-Eats</button>
      </form>
        
      {selectedPlace.map(function(place){
       return <div key={place.image_url} className="row">
            <div className="col-sm-4">
               <div className="card">
                  <div className="card-body">
                     <h5 className="card-title">{place.name}</h5>
                     <img style={imgstyle} key={place.image_url} src={place.image_url} alt={place.name}/>
                     <p>{place.location.display_address[0]}{place.location.display_address[1]}</p>
                     <a href={place.url} className="btn btn-primary">View On Yelp</a>
                  </div>
               </div>
            </div>
         </div>
   
   })}
         
</div>
   );
})

export default DogParksMapContainer;