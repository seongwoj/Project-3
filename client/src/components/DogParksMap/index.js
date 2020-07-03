import React, {useState} from "react"
import API from '../../utils/API'
import DogParksMapContainer from "../DogParksMapContainer"


function DogParksMap(){

    // states for city inputted and api search
    const[city, setCity]=useState("")
    const[dogSearch, setDogSearch]=useState([])
    
    const handleInputChange=event=>{
        const value=event.target.value
        setCity(value)
    }

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
        <DogParksMapContainer
          containerElement={ <div style={{ height: `300px`, width: '100%' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
          handleInputChange={handleInputChange}
          handleParkSubmit={handleParkSubmit}
          handleFriendlySubmit={handleFriendlySubmit}
          dogSearch={dogSearch}
        />
    )


}

export default DogParksMap