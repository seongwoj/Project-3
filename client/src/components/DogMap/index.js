import React, {useState} from "react"
import API from '../../utils/API'
import DogMapContainer from "../DogMapContainer"
import "./styles.css"


function DogMap(){
    

    // states for city inputted and api search
    const[city, setCity]=useState("")
    const[dogSearch, setDogSearch]=useState([])
    const[category, setCategory]=useState("")
    
    const handleInputChange=event=>{
        const value=event.target.value
        setCity(value)
    }
    
    // when submit button is clicked, call API tp get dog parks or deg friendly business
    const handleParkSubmit=event=>{
        event.preventDefault();
        API.getDogParks(city).then((res) => {
            setDogSearch(res.data.businesses)
            setCategory("Dog Park")
            })
            .catch((err) => {
            console.log (err)
            })
    }
    const handleFriendlySubmit=event=>{
        event.preventDefault();
        API.getDogFriendly(city).then((res) => {
            setDogSearch(res.data.businesses)
            setCategory("Dog Friendly Biz")
            })
            .catch((err) => {
            console.log (err)
            })
    }
    
    // google map styling and props for submit buttons and state
    return(
        <div>
        <h1 className="header">Fido Search</h1>
        <DogMapContainer
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={ <div style={{ height: `300px`, width: '100%', marginTop:`20px` }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
          handleInputChange={handleInputChange}
          handleParkSubmit={handleParkSubmit}
          handleFriendlySubmit={handleFriendlySubmit}
          dogSearch={dogSearch}
          category={category}
        />
        </div>
    )


}

export default DogMap