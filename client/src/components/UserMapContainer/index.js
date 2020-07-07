import React, {useState} from "react"
import "./styles.css"


import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow}from "react-google-maps"


const UserMapContainer = withScriptjs(withGoogleMap((props => {

      const [selectedUser, setSelectedUser]=useState(null)
   
      return(
         <div className="user-map-container">
            
      <GoogleMap
        center = { { lat: parseFloat(props.latitude), lng: parseFloat(props.longitude)} }
        defaultZoom = { 12 }
      >
        {props.userInfo&&props.userInfo.map(function(location){
            return <Marker
            key={location._id}
            position={{lat: parseFloat(location.latitude),
                lng:parseFloat(location.longitude)

            }}
            onClick={()=>{
                setSelectedUser(location)
            }}
            />
        })}
        {selectedUser &&(
         <InfoWindow
         position={{lat: parseFloat(selectedUser.latitude), 
                     lng: parseFloat(selectedUser.longitude)
                  }}
      
         onCloseClick={()=>{
            setSelectedUser(null)
         }}>
            <div className="user-container">
               <p className="username-font">{selectedUser.username}</p>
               <img className="dog-pic" src={selectedUser.url}></img>
               <p className="address-font">address: {selectedUser.address}</p>
               <p className="email-font">email: {selectedUser.email}</p>
            </div>
         </InfoWindow>
      )}
    </GoogleMap>




         
</div>
   );
})))

export default UserMapContainer;