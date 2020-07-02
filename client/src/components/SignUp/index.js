import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signupUser } from "../../actions/authActions";
import "../SignUp/style.css";
// import { connect } from "mongoose";
import classnames from "classnames";

class SignUp extends Component {
  constructor() {
      super();
      this.state ={
          username: "",
          email: "",
          password:"",
          errors: {}
      };
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
                      <input className={classnames("", { invalid: errors.username})} type="text" name="" placeholder="username" onChange={this.onChange} value={this.state.username} error={errors.username} id="username"/>
                      <span className="red-text">{errors.username}</span>
                    </div>
                    <div className="form-group">
                      <input className={classnames("", { invalid: errors.email })} type="email" name="" placeholder="email" onChange={this.onChange} value={this.state.email} error={errors.email} id="email"/>
                    <span className="red-text">{errors.email}</span>
                    </div>
                    <div className="form-group">
                    <input className={classnames("", { invalid: errors.password })} type="password" name="" placeholder="password" onChange={this.onChange} value={this.state.password} error={errors.password} id="password"/>
                    <span className="red-text">{errors.email}</span>
                    </div>
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