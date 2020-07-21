import React, {useState, useEffect} from "react"
import API from '../../utils/API'
import DogMapContainer from "../DogMapContainer"
import "./styles.css"
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom"


function DogMap(props){
    
    const location = useLocation();
    // states for city inputted and api search
    const[city, setCity]=useState("")
    const[dogSearch, setDogSearch]=useState([])
    const[category, setCategory]=useState("")
    const[coords, setCoords]=useState({ lat: parseFloat(props.auth.user.latitude), lng: parseFloat(props.auth.user.longitude) })
    const [alertState, setAlertState]=useState(null)
    
    const handleInputChange=event=>{
        const value=event.target.value
        setCity(value)
    }
    
    // when submit button is clicked, call API tp get dog parks or deg friendly business
    const handleParkSubmit=event=>{
        event.preventDefault();
            if(city===""){
                setAlertState(true)
                setTimeout(()=>{
                    setAlertState(null);
                }, 6000);
            }else{
            API.getCityCoords(city).then((res) => {
                setCoords({lat: res.data.results[0].locations[0].latLng.lat,
                lng:res.data.results[0].locations[0].latLng.lng })
                API.getDogParks(city).then((res) => {
                    setDogSearch(res.data.businesses)
                    setCategory("Dog Park")
                })
            }).catch((err) => {
                console.log (err)
             })
            }
    }
    const handleFriendlySubmit=event=>{
        event.preventDefault();
        if(city===""){
            setAlertState(true)
            setTimeout(()=>{
                setAlertState(null);
            }, 6000);
        }else{
        API.getCityCoords(city).then((res) => {
            console.log(res)
            setCoords({lat: res.data.results[0].locations[0].latLng.lat,
            lng:res.data.results[0].locations[0].latLng.lng })
                API.getDogFriendly(city).then((res) => {
                setDogSearch(res.data.businesses)
                setCategory("Dog Friendly Biz")
            })
        }).catch((err) => {
            console.log (err)
            })
        }   
    }

    const handleDogBeachSubmit=event=>{
        event.preventDefault();
        if(city===""){
            setAlertState(true)
            setTimeout(()=>{
                setAlertState(null);
            }, 6000);
        }else{
        API.getCityCoords(city).then((res) => {
            setCoords({lat: res.data.results[0].locations[0].latLng.lat,
            lng:res.data.results[0].locations[0].latLng.lng })
                API.getDogBeaches(city).then((res) => {
                    setDogSearch(res.data.businesses)
                    setCategory("Dog Beaches")
                })
        }).catch((err) => {
        console.log (err)
            })
        }
    }
    
    // google map styling and props for submit buttons and state
    return(
        <div>
        <nav className="navbar navbar-default navbar-fidosearch">
            <div className="container-fluid">
                <div className="navbar-header">
                <Link to="/fidosearch" id="fido-search" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                <h3 id="h3"><span>F</span>ido<span>S</span>earch</h3>
              </Link>
                </div>
                <div className="navbar-header ml-auto">
                <Link to="/dashboard" id="back-to-users" className={location.pathname === "/board" ? "nav-link active" : "nav-link"}>
                Back to Users Page
              </Link>
                </div>
            </div>
        </nav>
        <DogMapContainer
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAJ67XPqFCkQROFj98MvLbeDMnxkKsCWpM`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={ <div id="map-map-map" style={{ height: `300px`, width: '100%' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
          handleInputChange={handleInputChange}
          handleParkSubmit={handleParkSubmit}
          handleFriendlySubmit={handleFriendlySubmit}
          handleDogBeachSubmit={handleDogBeachSubmit}
          dogSearch={dogSearch}
          category={category}
          coords={coords}
          alertState={alertState}
        />
        </div>
    )


}

const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
  )(DogMap);