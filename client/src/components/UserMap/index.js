import React, {useEffect, useState} from 'react'
import API from '../../utils/API'
import UserMapContainer from "../UserMapContainer"
import { connect } from "react-redux";
import Chatroom from "../Chatroom"


function UserMap(props){

const [userInfo, setUserInfo]=useState(null)

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
                    <a className="navbar-brand logo-text" href="/fidosearch">
                    Dog Owners Near You
                    </a>
                </div>
                <div className="navbar-header ml-auto">
                    <a className="navbar-brand back-text" href="/dashboard">
                    Back to 
                    </a>
                </div>
            </div>
        </nav>
    <UserMapContainer 
    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={ <div style={{ height: `300px`, width: '100%', marginTop:`2px` }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
            userInfo={userInfo}
            latitude={props.auth.user.latitude}
            longitude={props.auth.user.longitude}
    />
    
    <Chatroom username={props.auth.user.username}/>
    <a href="/fidosearch" className="btn btn-primary">Find Dog Friendly Places</a>
    </div>
)

}


const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
  )(UserMap);