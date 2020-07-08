import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import UserMap from "../UserMap"
import "./style-dash.css";





class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };


  
render() {
  console.log(this.props.auth.user.url)
    const { user } = this.props.auth;
    
return (

  <div>
       <div class="jumbotron">
          <h1 class="display-4"><b>Hello there,</b> {user.username.split(" ")[0]} </h1>
          <p class="lead"><h2>Welcome to <span>F</span>ido<span>F</span>riend, and let's have some fun.</h2></p>
          
          <a class="btn btn-primary btn-lg" onClick={this.onLogoutClick} href="#" role="button">Log Out</a>
       </div>
        
            
              
              
            
          
            
         

        
        

        

        <UserMap />
        
       


      
       
      
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);