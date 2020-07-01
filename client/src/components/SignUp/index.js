import React from "react";
import "../SignUp/style.css";


function SignUp(){
    return (
        <div className="form_bg">
          <div className="container">
             <div className="row">
                <div className=" col-md-8   col-sm-8   col-xs-6   col-lg-10">
                <form className="form_horizontal">
                    <div className="form_icon" style={{fontSize: "50px"}}><i id="paw" className="fa fa-paw"></i></div>
                    <h3 className="title">FidoFriend</h3>
                    <h4>Sign-Up</h4>
                    <div className="form-group">
                      <input className="form-control" type="text" name="" placeholder="username"/>
                    </div>
                    <div className="form-group">
                      <input className="form-control" type="email" name="" placeholder="email"/>
                    </div>
                    <div className="form-group">
                    <input className="form-control" type="password" name="" placeholder="password"/>
                    </div>
                    <button className="btn signin">Sign Up</button>
                    <br/>
                    <br/>
                    <h5><a href="signUp.html"><i className="fa fa-arrow-left"></i> Go Back to Log In Page </a></h5>
                </form>
                </div>
             </div>
          </div>
    </div>
    )
}

export default SignUp;