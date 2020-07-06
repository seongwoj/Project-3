import React, { Component } from "react";
import "./styles.css";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signupUser } from "../../actions/authActions";

// import { connect } from "mongoose";
import classnames from "classnames";

class SignUp extends Component {
  constructor() {
      super();
      this.state ={
          username: "",
          email: "",
          password:"",
          errors: {},
          latitude: null,
          longitude: null,
          userAddress: null
      };
      this.getLocation = this.getLocation.bind(this);
      this.getCoordinates = this.getCoordinates.bind(this);
      this.reverseGeocodeCoordinates = this.reverseGeocodeCoordinates.bind(this);
  }
componentDidMount() {
  //If logged in and user navigates to SignUp, should redirect to dashboard
  if (this.props.auth.isAuthenticated) {
    this.props.history.push("/dashboard");
  }
}

componentWillReceiveProps(nextProps) {
  if (nextProps.errors) {
    this.setState({
      errors: nextProps.errors
    });
  }
}

onChange = e => {
  this.setState({ [e.target.id]: e.target.value});
};

onSubmit = e => {
  e.preventDefault();
  
const newUser = {
  username: this.state.username,
  email: this.state.email,
  password: this.state.password,
  
};
this.props.signupUser(newUser, this.props.history);
console.log(newUser);
};

getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

getCoordinates(position) {
  console.log(position.coords)
  this.setState({
    latitude: position.coords.latitude,
    longitude: position.coords.longitude
  })
  this.reverseGeocodeCoordinates();
}

reverseGeocodeCoordinates() {
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&sensor=false&key=AIzaSyBsyx-Kp0OomdOCTi7lowN87T6FGcv4CKM`)
  .then(response => response.json())
  .then(data => this.setState({
    userAddress: data.results[5].formatted_address
  }))
  .catch(error => alert(error))
}

handleLocationError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.")
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.")
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.")
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.")
      break;
  }
}

render() {
  const { errors } = this.state;

    return (
        <div className="form_bg">
          <div className="container">
             <div className="row">
                <div className=" col-md-8   col-sm-8   col-xs-6   col-lg-10">
                <form className="form_horizontal" onSubmit={this.onSubmit}>
                    <div className="form_icon" style={{fontSize: "50px"}}><i id="paw" className="fa fa-paw"></i></div>
                    <h3 className="title">FidoFriend</h3>
                    <h4>Sign-Up</h4>
                    <div className="form-group">
                      <input className={classnames("", { invalid: errors.username})} type="text" name="" placeholder="Username" onChange={this.onChange} value={this.state.username} error={errors.username} id="username"/>
                      <span className="red-text">{errors.username}</span>
                    </div>
                    <div className="form-group">
                      <input className={classnames("", { invalid: errors.email })} type="email" name="" placeholder="Email" onChange={this.onChange} value={this.state.email} error={errors.email} id="email"/>
                    <span className="red-text">{errors.email}</span>
                    </div>
                    <div className="form-group">
                    <input className={classnames("", { invalid: errors.password })} type="password" name="" placeholder="Password" onChange={this.onChange} value={this.state.password} error={errors.password} id="password"/>
                    <span className="red-text">{errors.password}</span>
                    </div>
                    <button onClick={this.getLocation} className="btn">Get My Location</button>
                    <h5>Address: {this.state.userAddress}</h5>
                    <br/>
                    <br/>
                    <button className="btn signin">Sign Up</button>
                    <br/>
                    <br/>
                    <h5><Link to="/login"><i className="fa fa-arrow-left"></i> Go Back to Log In Page </Link></h5>
                </form>
                </div>
             </div>
          </div>
    </div>
    )
  }
}

SignUp.propTypes = {
  signupUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { signupUser }
) (withRouter(SignUp));