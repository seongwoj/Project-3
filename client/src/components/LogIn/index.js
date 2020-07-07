import React, { Component } from "react";
import "./styles.css"
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";


class LogIn extends Component {
  constructor () {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      console.log("Successfully logged in!")
      this.props.history.push("/main"); //or whatever we decide to call it
    }
  

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
  

  const userData = {
    username: this.state.username,
    password: this.state.password
  };

  this.props.loginUser(userData);
  // console.log(userData);
  };


render () {
  const { errors } = this.state;
    return (
        <div className="form_bg">
          <div className="container">
             <div className="row">
                <div className=" col-md-8   col-sm-8   col-xs-6   col-lg-10">
                <form className="form_horizontal" onSubmit={this.onSubmit}>
                    <div className="form_icon" style={{fontSize: "50px"}}><i id="paw" className="fa fa-paw"></i></div>
                    <h3 className="title">FidoFriend</h3>
                    <h4>Log-In</h4>
                    <div className="form-group">
                      <input className={classnames("", { invalid: errors.username || errors.usernamenotfound})} type="text" name="" placeholder="username" onChange={this.onChange} value={this.state.username} error={errors.username} id="username"/>
                    <span className="red-text">{errors.username} {errors.usernamenotfound}</span>
                    </div>
                    <div className="form-group">
                    <input className={classnames("", { invalid: errors.password || errors.passwordincorrect})} type="password" name="" placeholder="password" onChange={this.onChange} value={this.state.password} error={errors.password} id="password"/>
                    <span className="red-text">{errors.password}{errors.passwordincorrect}</span>
                    </div>
                    <button className="btn signin">Login</button>
                    <br/>
                    <br/>
                    <h5><Link to="/signup">Create New Account <i className="fa fa-arrow-right"></i></Link></h5>
                </form>
                </div>
             </div>
          </div>
    </div>
    )
  }
}

LogIn.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps, { loginUser }
)(LogIn);