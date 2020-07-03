import React, {useState} from "react"



import {withGoogleMap, GoogleMap, Marker, InfoWindow}from "react-google-maps"


const imgstyle = {
   border: '1px solid #ddd',
   borderRadius: '4px',
   padding: '5px',
   width: '150px'
  };


const DogParksMapContainer = withGoogleMap(props => {
      const dogSearch=props.doSearch
      const [selectedCenter, setSelectedCenter] = useState(null);
      const [selectedPark, setSelectedPark] = useState([]);
     
      return(
         <div>
      <GoogleMap
        defaultCenter = { { lat: 34.052235, lng: -118.243683 } }
        defaultZoom = { 12 }
      >
      {dogSearch&&dogSearch.map(function(park){
      return <Marker
      key={park.id}
         position={{lat: park.coordinates.latitude, 
                  lng: park.coordinates.longitude,
            }}
            onClick={() => {
               setSelectedCenter(park);
               setSelectedPark([park])
               }
            }
         />
         })}

      {selectedCenter &&(
         <InfoWindow
         position={{lat: selectedCenter.coordinates.latitude, 
                     lng: selectedCenter.coordinates.longitude,
                  }}
      
         onCloseClick={()=>{
            setSelectedCenter(null)
         }}>
            <div>
               <p>{selectedCenter.name}</p>
               <p>{selectedCenter.location.display_address[0]} {selectedCenter.location.display_address[1]} </p>
            </div>
         </InfoWindow>
      )}
         </GoogleMap>





      <form>
        <input type="text" name="city" onChange={props.handleInputChange} placeholder="Enter city"></input>
        <button onClick={props.handleSubmit}>Search Dog Parks</button><button onClick={props.handleSubmit}>Search Dog-Friendly-Eats</button>
      </form>
        
      {selectedPark.map(function(dogpark){
       return <div key={dogpark.image_url} className="row">
            <div className="col-sm-4">
               <div className="card">
                  <div className="card-body">
                     <h5 className="card-title">{dogpark.name}</h5>
                     <img style={imgstyle} key={dogpark.image_url} src={dogpark.image_url} alt={dogpark.name}/>
                     <p>{dogpark.location.display_address[0]}{dogpark.location.display_address[1]}</p>
                     <a href={dogpark.url} className="btn btn-primary">View On Yelp</a>
                  </div>
               </div>
            </div>
         </div>
   
   })}
         
</div>
   );
})

export default DogParksMapContainer;