import React, {useState} from "react"
import API from '../../utils/API'
import DogParksMapContainer from "../DogParksMapContainer"


function DogParksMap(){

    const[city, setCity]=useState("")
    const[dogSearch, setDogSearch]=useState([])
    
    function handleInputChange(event){
        const value=event.target.value
        setCity(value)
    }

    function handleParkSubmit(event){
        event.preventDefault();
        API.getDogParks(city).then((res) => {
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
          dogSearch={dogSearch}
        />

        
    )



}

export default DogParksMap