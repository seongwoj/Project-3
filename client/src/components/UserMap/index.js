import React, {useEffect, useState} from 'react'
import API from '../../utils/API'
import UserMapContainer from "../UserMapContainer"
import { connect } from "react-redux";
import Chatroom from "../Chatroom"
import { Link,useLocation } from "react-router-dom"
import "./styles.css"


function UserMap(props){

const [userInfo, setUserInfo]=useState(null)
const location = useLocation();
    useEffect(()=>{
        API.getUserLocation().then((res)=>{
            setUserInfo(res.data)
        })
    },[])
    console.log(props.auth)

return(
    <div>
        <nav className="navbar navbar-default navbar-fidosearch">
            <div className="container-fluid">
                <div className="navbar-header">
                
                <h3 id="dog-owners-title">Dog Owners</h3>
             
                </div>
                <div className="navbar-header ml-auto">
                <Link to="/main" id="link"className={location.pathname === "/main" ? "nav-link active" : "nav-link"}>
                Back to Main Page
              </Link>
                </div>
            </div>
        </nav>
    <UserMapContainer 
    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAJ67XPqFCkQROFj98MvLbeDMnxkKsCWpM`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={ <div style={{ height: `300px`, width: '100%', marginTop:`2px` }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
            userInfo={userInfo}
            latitude={props.auth.user.latitude}
            longitude={props.auth.user.longitude}
    />
    
    <Chatroom username={props.auth.user.username}/>
    <Link to="/fidosearch" id="find-friendly-button" className="btn btn-primary">Find Dog Friendly Places</Link>
    </div>
)

}


const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
  )(UserMap);