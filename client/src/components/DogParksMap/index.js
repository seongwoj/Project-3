import React, {useState} from "react"
import API from '../../utils/API'
import DogParksMapContainer from "../DogParksMapContainer"
import "./styles.css"
require('dotenv').config()

function DogParksMap(){
    

    // states for city inputted and api search
    const[city, setCity]=useState("")
    const[dogSearch, setDogSearch]=useState([])
    
    const handleInputChange=event=>{
        const value=event.target.value
        setCity(value)
    }
    console.log(process.env.REACT_APP_API_KEY)
    // when submit button is clicked, call API tp get dog parks or deg friendly business
    const handleParkSubmit=event=>{
        event.preventDefault();
        API.getDogParks(city).then((res) => {
            setDogSearch(res.data.businesses)
            })
            .catch((err) => {
            console.log (err)
            })
    }
    const handleFriendlySubmit=event=>{
        event.preventDefault();
        API.getDogFriendly(city).then((res) => {
            setDogSearch(res.data.businesses)
            })
            .catch((err) => {
            console.log (err)
            })
    }
    
    return(
        <div>
        <h1 className="header">Fido Search</h1>
        <DogParksMapContainer
          containerElement={ <div style={{ height: `300px`, width: '100%', marginTop:`20px` }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
          handleInputChange={handleInputChange}
          handleParkSubmit={handleParkSubmit}
          handleFriendlySubmit={handleFriendlySubmit}
          dogSearch={dogSearch}
        />
        </div>
    )


}

export default DogParksMap